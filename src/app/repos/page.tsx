'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { UseUser } from "@/hook/UseUser";
import { Folder, Languages, Map, Star } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function page() {

    const { user } = UseUser()
    const returnSearchPage = () => {
        redirect('/profile')
    }

    return (
        <>
            <div className="w-fll h-screen flex items-center justify-center">
                <div className="absolute top-0 pt-4 right-0 pr-4">
                    <Button onClick={returnSearchPage} className="bg-gray-950 text-slate-100 rounded-[6px]">Return to search page</Button>
                </div>
                <Card className="max-w-[1200px]">
                    <CardHeader className="w-full m-auto text-center">
                        <CardTitle>GitHuB - Repository</CardTitle>
                        <CardDescription>
                            Discover the 5 best projects by user {user?.login}
                        </CardDescription>
                    </CardHeader>

                    <CardContent className="p-2 flex gap-4 justify-center items-center">
                        {user?.repos
                            .sort((a, b) => b.stargazers_count - a.stargazers_count)
                            .slice(0, 5)
                            .map((repo) => (
                                <Card key={repo?.name} className="w-[300px] h-[300px] p-4 ">
                                    <div className="">
                                        <p className="flex gap-4 flex-row"> <span className="flex gap-2"><Folder className="text-[8px]"/> Name:{repo?.name}</span></p>
                                        <p className="flex gap-4"> <span className="flex gap-2"><Star className="text-[8px]"/>  Stars:{repo?.stargazers_count}</span></p>
                                        <p className="flex gap-4"> <span className="flex gap-2"><Map className="text-[8px]"/> Language: {repo?.language}</span></p>

                                        <div className="mt-[40px]">
                                            <Link target="_blank" href={repo?.html_url}>
                                                <h3 className="text-1xl font-semibold ">
                                                    click me to look at the repository!!!
                                                </h3>
                                            </Link>
                                        </div>
                                    </div>
                                </Card>
                            ))}
                    </CardContent>
                </Card>
            </div>
        </>
    )
}


'use client'

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { UseUser } from "@/hook/UseUser";
import { redirect } from "next/navigation";

export default function Page() {
    const { user } = UseUser();

    const returnSearchPageFromLang = () => {
        redirect('/profile');
    };
    //=======================================================================================================================   

    
    const languagesRepos = user?.repos.filter((repo: { language: string }) => repo.language) || [];

    
    const languageCounts = languagesRepos.reduce((acc: Record<string, number>, repo: { language: string }) => {
        acc[repo.language] = (acc[repo.language] || 0) + 1;
        return acc;
    }, {});

    
    const sortedLanguages = Object.entries(languageCounts)
        .sort(([, a], [, b]) => b - a) 
        .slice(0, 3); 

    
        const filter = sortedLanguages.sort(([, a], [, b]) => b - a)

    //=======================================================================================================================        

    return (
        <div className="w-full h-screen flex items-center justify-center">
            <div className="absolute top-0 pt-4 right-0 pr-4">
                <Button onClick={returnSearchPageFromLang} className="bg-gray-950 text-slate-100 rounded-[6px]">
                    Return to search page
                </Button>
            </div>
            <Card>
                <CardHeader>
                    <CardTitle>3 Most used languages of {user?.login}</CardTitle>
                    
                </CardHeader>
                <CardContent>
                    {sortedLanguages.length > 0 ? (
                        <ul>
                            
                            {sortedLanguages.map(([language, count]) => (
                                <>
                                    <li key={language}>
                                        {language}: {count}
                                    </li>
                                    <Progress  className='[&>*]:bg-black' value={count} max={filter[0][1]} />
                                </>

                            ))}
                        </ul>
                    ) : (
                        <p>No languages found.</p>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}

'use client';
import Image from "next/image";
import { FolderOpen, MapIcon, MapPinCheckIcon, User, Users2 } from "lucide-react";
import BtnGroup from "./BtnGroup";
import { UseUser } from "@/hook/UseUser";
import NumberTicker from "./ui/number-ticker";

const UserResult = () => {

    const {user} = UseUser()

    return (
        <>
            {user ? (
                <div className="bg-gray-50 rounded-3xl p-6 w-full max-w-[850px] flex justify-between items-center">
                    <div className="flex flex-col gap-2">
                        <p className="flex gap-2 items-center"><MapPinCheckIcon />  {user?.location}</p>
                        <p className="flex gap-2 items-center"> <Users2 /> Followers: <NumberTicker value={user?.followers}/></p>
                        <p className="flex gap-2 items-center"> <User />  Following: <NumberTicker value={user?.following} /></p>
                        <p className="flex gap-2 items-center"> <FolderOpen />  Public repositories: <NumberTicker value={user?.public_repos} /> </p>
                    </div>

                    <div className="flex items-center flex-col text-center m-auto">
                        <Image
                            src={user?.avatar_url}
                            width={200}
                            height={200}
                            alt="imagem do avatar do usuario no github"
                            className="rounded-full"
                        />
                        <h3 className="mr-[2px] tracking-normal w-full pb-0 mt-[8px] font-semibold text-lg">{user?.login}</h3>
                        <h4 className="mr-[2px] tracking-normal w-full pt-0 text-sm">{user?.bio}</h4>
                    </div>
                    <BtnGroup />
                </div>
            ) : (
                null
            )}
        </>
    );
};

export default UserResult;

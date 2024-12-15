import { Button } from "@/components/ui/button"
import { UseUser } from "@/hook/UseUser";
import { redirect } from "next/navigation";


const BtnGroup = () => {

    const { user } = UseUser()

    const handlePageRepos = () => {
        redirect('/repos')
    }

    const handlePageLang = () => {
        redirect('/lang')
    }

    return (
        <div className="flex flex-col gap-4">
            <Button
                className="bg-gray-950 text-slate-100 rounded-[4px]"
                type="button"
            >
                <a target="_blank" href={`https://github.com/${user?.login}`}>Look profile</a>
            </Button>
            <Button
                className="bg-gray-950 text-slate-100 rounded-[4px]"
                type="button"
                onClick={handlePageRepos}

            >

                5 Best projects
            </Button>
            <Button
                className="bg-gray-950 text-slate-100 rounded-[4px]"
                type="button"
                onClick={handlePageLang}
            >

                Favorite languages
            </Button>

        </div>
    )
}

export default BtnGroup;
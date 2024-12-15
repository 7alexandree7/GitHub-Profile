import Header from "@/components/Header"
import Search from "@/components/Search"
import UserResult from "@/components/UserResult"

export default function page() {

    return (
        <>
            <Header />
            <div className="mt-[200px] h-[90vh] w-full">
                <div className="flex flex-col items-center">
                    <Search />
                    <UserResult />
                </div>
            </div>
        </>
    )
}



import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DollarSign, Subscript, User, Users2 } from "lucide-react"
import ButtonLogout from "@/components/ButtonLogout"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "./ui/dropdown-menu"


const Header = async () => {

    const session = await getServerSession()

    if (!session) {
        redirect('/')
    }

    return (
        <header className="w-full flex justify-end pr-6 pt-4 h-[10vh]">
            <div className="flex items-center gap-4">
                <div>
                    <DropdownMenu>
                        <DropdownMenuTrigger className="outline-none border-none">
                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuItem> <User />Profile</DropdownMenuItem>
                            <DropdownMenuItem> <DollarSign />  Billing</DropdownMenuItem>
                            <DropdownMenuItem> <Users2 /> Team</DropdownMenuItem>
                            <DropdownMenuItem> <Subscript /> Subscription</DropdownMenuItem>
                            <DropdownMenuItem className="w-full">
                                <ButtonLogout />
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                </div>
                <div>
                    <p>{session?.user?.name}</p>
                    <p className="text-[13px]">{session?.user?.email}</p>
                </div>

            </div>
        </header>
    )
}


export default Header;
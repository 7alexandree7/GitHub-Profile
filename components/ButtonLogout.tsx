'use client'
import { signOut } from "next-auth/react"
import { Button } from "./ui/button"

const ButtonLogout = () => {

    return (
        <Button onClick={() => signOut()} className="bg-black text-slate-50">Logout</Button>
    )
}

export default ButtonLogout
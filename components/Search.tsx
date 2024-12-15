'use client'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { UseUser } from "@/hook/UseUser"
import { UserProps } from "@/types/user"
import { useState } from "react"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const Search = () => {
    const { setUser } = UseUser()
    const [userName, setUserName] = useState('');

    const loadUser = async (userName: string) => {
        try {
            const resUser = await fetch(`https://api.github.com/users/${userName}`);
            if (!resUser.ok) {
                throw new Error("User not found or GitHub API error");
            }
            const dataUser = await resUser.json();

            const resRepos = await fetch(`https://api.github.com/users/${userName}/repos?per_page=500&page=1`);
            if (!resRepos.ok) {
                throw new Error("Error fetching user repositories");
            }
            const dataRepos = await resRepos.json();

            const userValue: UserProps = {
                avatar_url: dataUser.avatar_url,
                login: dataUser.login,
                location: dataUser.location,
                followers: dataUser.followers,
                following: dataUser.following,
                bio: dataUser.bio,
                public_repos: dataUser.public_repos,
                repos: dataRepos.map((repo: any) => ({
                    name: repo.name,
                    html_url: repo.html_url,
                    language: repo.language,
                    stargazers_count: repo.stargazers_count
                })),
            }
            setUser(userValue);
        } catch (error: any) {
            // Exibe a toast de erro
            toast.error(error.message || "An error occurred. Please try again!");
        }
    }

    const handlePressKey = (event: any) => {
        if (event.key === 'Enter') {
            loadUser(userName);
        }
    }

    return (
        <div className="flex gap-4 mb-[70px]">
            <Input
                className="w-[320px] text-gray-600 text-[10px]"
                type="text"
                value={userName}
                placeholder="Click the button or press enter"
                onChange={(e) => setUserName(e.target.value)}
                onKeyDown={handlePressKey}
                required
            />
            <Button
                className="bg-gray-950 text-slate-100"
                type="submit"
                onClick={() => loadUser(userName)}
            >
                Search user
            </Button>
            {/* Container do Toastify */}
            <ToastContainer position="top-left" />
        </div>
    )
}
export default Search;

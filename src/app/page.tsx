'use client'
import Image from "next/image";
import bg from '../../public/shubham-dhage-NsPqV-WsZYY-unsplash.jpg';
import { signIn } from "next-auth/react";
import { FaGithub } from "react-icons/fa";


export default function Home() {
  return (
    <div className="relative h-screen w-full p-8 bg-black z-50">
      <Image
        src={bg}
        alt="Background"
        layout="fill"
        objectFit="cover"
        objectPosition="top"
        priority
        quality={100}
        className="-z-10 opacity-45"
      />
      <div className="relative flex items-center justify-center h-full text-white flex-col gap-14">
        <h1 className="text-4xl">The API Powered Developer Platform</h1>
        <button
          className="bg-neutral-100 text-slate-950 w-[250px] p-2 rounded-xl flex gap-4 items-center justify-center text-center"
          onClick={() => signIn('github', { callbackUrl: '/profile' })}>
          <FaGithub />
          <span>signIn With GitHub</span>
        </button>
      </div>
    </div>
  )
}   

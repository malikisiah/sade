"use client";
import { useSession } from "next-auth/react";

import { redirect } from "next/navigation";

export default function Home() {
  const session = useSession();

  if (session.status === "authenticated") {
    redirect("/dashboard");
  }

  return (
    <div
      className='hero min-h-screen'
      style={{
        backgroundImage: `url("https://img1.goodfon.com/wallpaper/nbig/c/cc/sade-pevica-lico.jpg")`,
      }}
    >
      <div className='hero-overlay bg-opacity-60 bg-black'></div>
      <div className='hero-content text-center text-neutral-content'>
        <div className='max-w-md'>
          <h1 className='mb-5 text-9xl font-bold'>S A D E </h1>
          <p className='mb-5 text-xl'>Please Sign With Spotify </p>
          <a
            className='btn btn-content normal-case'
            href='http://localhost:3000/api/auth/signin'
          >
            Sign in
          </a>
        </div>
      </div>
    </div>
  );
}

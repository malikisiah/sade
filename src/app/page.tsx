"use client";

import { signIn } from "next-auth/react";

export default function Home() {
  return (
    <div
      className='hero min-h-screen'
      style={{
        backgroundImage: `url("https://img1.goodfon.com/wallpaper/nbig/c/cc/sade-pevica-lico.jpg")`,
      }}
    >
      <div className='hero-overlay bg-opacity-60 bg-black'></div>
      <div className='hero-content text-center text-content'>
        <div className='max-w-md'>
          <h1 className='mb-5 text-9xl font-bold'>S A D E </h1>
          <p className='mb-5 text-xl'>Please Sign With Spotify </p>

          <button
            className='btn btn-content normal-case'
            onClick={() => signIn("spotify", { callbackUrl: "/dashboard" })}
          >
            {" "}
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}

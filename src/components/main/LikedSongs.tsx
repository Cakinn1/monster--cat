import React from "react";
import { FaPlay } from "react-icons/fa";

export default function LikedSongs() {
  return (
    <div className="space-y-4">
      <h1 className="font-bold text-3xl">Welcome back</h1>
      <div className="flex h-16 w-[360px]  rounded-l-lg duration-300 group hover:bg-neutral-100/20 rounded-r-lg bg-[#f5f5f51a] ">
        <img className="rounded-l-lg" src="/liked.png" alt="" />
        <div className="flex items-center  mx-4 justify-between flex-1">
          <h1 className="font-medium">Liked Songs</h1>
          <div className="bg-[#22c55e]  hidden group-hover:flex p-4 rounded-full">
            <FaPlay className="text-black" />
          </div>
        </div>
      </div>
    </div>
  );
}

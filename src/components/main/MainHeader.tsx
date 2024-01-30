import React from "react";
import Header from "./Header";
import { FaPlay } from "react-icons/fa";
import LikedSongs from "./LikedSongs";
export default function MainHeader() {
  return (
    <div className="p-6 space-y-6 bg-gradient-to-b from-emerald-800  rounded-t-lg ">
      <Header />
      <LikedSongs />
    </div>
  );
}

import React from "react";
import { CiHeart } from "react-icons/ci";

interface SongPhotoProps {
  image: string | undefined;
  title: string | undefined;
  artist: string | undefined;
  id: number | undefined;
handleCurrentChange?: (value: number) => void;
  isLikes: boolean;
}

export default function SongPhoto(props: SongPhotoProps) {
  const { artist, image, title, id, handleCurrentChange, isLikes } =
    props;
  return (
    <div className="flex gap-x-2 items-center ">
      <figure>
        <img className="object-cover h-[60px]" src={image} alt="" />
      </figure>
      <div className="">
        <h1 className="font-semibold truncate">{title}</h1>
        <h1 className="text-neutral-400 text-sm truncate">By {artist}</h1>
      </div>
      {isLikes && (
        <CiHeart
          onClick={() => id && handleCurrentChange && handleCurrentChange(id)}
          className="text-3xl ml-4 cursor-pointer duration-300 hover:scale-110 active:scale-90 hover:text-red-500"
        />
      )}
    </div>
  );
}

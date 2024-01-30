import React from "react";
import PlayButton from "./PlayButton";

interface SongsProps {
  title: string;
  image: string;
  artist: string;
  audio: string;
  id: number;
  handleCurrentId: (value: number) => void;
  handleAddCurrentSongToLibrary: (value: number) => void;
}

export default function Songs(props: SongsProps) {
  const {
    artist,
    image,
    title,
    audio,
    id,
    handleCurrentId,
    handleAddCurrentSongToLibrary,
  } = props;
  return (
    <div onClick={() => handleAddCurrentSongToLibrary(id)} className="bg-neutral-400/5 hover:bg-neutral-400/10 duration-300 group cursor-pointer gap-x-4 mb-2 mr-2 w-[48%] lg:w-[190px] lg:h-[280px] md:w-[31%]  space-y-3 group  p-3 ">
      <figure className="relative">
        <img
          className="lg:max-h-[170px] h-full w-full lg:max-w-[170px]/ rounded-lg  object-cover "
          src={image}
          alt=""
        />
        <div
          className="absolute bottom-2 right-2"
          onClick={() => handleCurrentId(id)}
        >
          <PlayButton audio={audio} id={id} />
        </div>
      </figure>
      <div className="space-y-1 pb-4">
        <h1 className="font-semibold truncate">{title}</h1>
        <p className="text-neutral-400 text-sm truncate"> By {artist} </p>
      </div>
    </div>
  );
}

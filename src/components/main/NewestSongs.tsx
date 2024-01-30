import React, { useState } from "react";
import Songs from "../ui/Songs";
import { MusicProps } from "../../constants/typings";

interface NewestSongsProps {
  spotifyData: MusicProps[];
  handleCurrentId: (value: number) => void;
  handleAddCurrentSongToLibrary: (value: number) => void;
}

export default function NewestSongs(props: NewestSongsProps) {
  const { spotifyData, handleCurrentId, handleAddCurrentSongToLibrary } = props;

  return (
    <div className="p-6 space-y-2">
      <h1 className="font-semibold text-2xl">Newest songs</h1>
      <div className="flex flex-wrap">
        {spotifyData.map((data) => (
          <Songs
            handleAddCurrentSongToLibrary={handleAddCurrentSongToLibrary}
            handleCurrentId={handleCurrentId}
            key={data.id}
            audio={data.preview}
            title={data.title}
            image={data.album.cover}
            artist={data.artist.name}
            id={data.id}
          />
        ))}
      </div>
    </div>
  );
}

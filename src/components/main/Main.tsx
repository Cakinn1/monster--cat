import React from "react";
import MainHeader from "./MainHeader";
import NewestSongs from "./NewestSongs";
import { MusicProps } from "../../constants/typings";
import BottomBanner from "../banner/BottomBanner";

interface MainProps {
  spotifyData: MusicProps[];
  handleCurrentId: (value: number) => void;
  handleAddCurrentSongToLibrary: (value: number) => void
}
export default function Main(props: MainProps) {
  const { spotifyData, handleCurrentId, handleAddCurrentSongToLibrary } = props;
  return (
    <div className="rounded-lg flex-col h-full mb-[110px] bg-neutral-900  w-full flex flex-1  ml-0 m-2 r">
      <MainHeader />
      <NewestSongs
      handleAddCurrentSongToLibrary={handleAddCurrentSongToLibrary}
        handleCurrentId={handleCurrentId}
        spotifyData={spotifyData}
      />
    </div>
  );
}

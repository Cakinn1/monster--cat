import React from "react";
import LeftBar from "../components/leftbar/LeftBar";
import Main from "../components/main/Main";
import { MusicProps } from "../constants/typings";

interface LandingProps {
  spotifyData: MusicProps[];
  handleCurrentId: (value: number) => void;
  handleAddCurrentSongToLibrary: (value: number) => void;
}

export default function Landing(props: LandingProps) {
  const { spotifyData, handleCurrentId, handleAddCurrentSongToLibrary } = props;
  return (
    <div className="flex ml-[318px] flex-1 min-h-screen ">
      <Main
        handleAddCurrentSongToLibrary={handleAddCurrentSongToLibrary}
        handleCurrentId={handleCurrentId}
        spotifyData={spotifyData}
      />
    </div>
  );
}

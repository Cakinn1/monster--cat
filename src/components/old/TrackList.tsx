import React, { useState } from "react";
import { MusicProps } from "../../constants/typings";
import Tracks from "./Tracks";

interface TrackListProps {
  spotifyData: MusicProps[];
  searchQuery: string;
  setSearchQuery: (value: string) => void;
}
export default function TrackList(props: TrackListProps) {
  const { spotifyData, searchQuery, setSearchQuery } = props;
  const [isSelected, setIsSelected] = useState<string>("");

  function handleSection(value: string) {
    setIsSelected(value);
    if (value === isSelected) {
      setIsSelected("");
    }
  }

  const result: number[] = [];

  for (let i = 0; i < spotifyData?.length; ++i) {
    result.push(i + 1);
  }
  return (
    <div className="max-w-[800px] mx-auto space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-6xl tracking-wide">Track List</h1>
        <input
          className="bg-transparent focus:outline-none py-2 border px-12 text-white"
          type="text"
          placeholder="Search song"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {spotifyData?.map((data, index) => {
        return (
          <div>
            <Tracks
              isSelected={isSelected}
              handleSection={handleSection}
              {...data}
              result={result[index]}
            />
          </div>
        );
      })}
    </div>
  );
}

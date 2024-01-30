import React, { useRef, useState } from "react";
import { Albumn, Artist, TrackProps } from "../../constants/typings";
import { IoIosPlay } from "react-icons/io";


export default function Tracks(props: TrackProps) {
  const {
    album,
    artist,
    id,
    preview,
    rank,
    title,
    title_short,
    type,
    result,
    handleSection,
    isSelected,
  } = props;
  const audioRef = useRef<HTMLAudioElement>(null);
  const [select, setSelect] = useState<string>("");

  function handlePlayPause() {
    if (audioRef) {
      if (audioRef.current?.paused) {
        audioRef.current?.play();
      } else {
        audioRef?.current?.pause();
      }
    }
  }

  return (
    <div className="text-white">
      <div className="flex  relative items-center gap-x-6">
        <h1 className="w-[10px]">{result}</h1>
        <audio ref={audioRef} src={preview}></audio>
        <div
          onClick={() => handleSection(preview)}
          className={` ${
            isSelected === preview ? "text-4xl" : ""
          }flex items-center gap-x-4`}
        >
          <IoIosPlay
            className="text-2xl g text-white"
            onClick={() => handlePlayPause()}
          />
          <div>
            <h1>{title}</h1>
            <h1>{artist?.name}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

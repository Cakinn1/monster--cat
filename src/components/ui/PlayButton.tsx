import React, { useEffect, useRef, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";

interface PlayButtonProps {
  audio?: string;
  id?: number;
}

export default function PlayButton(props: PlayButtonProps) {
  const { audio, id } = props;
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = audio || "";
    }
  }, [audio]);

  const handlePlayButtonClick = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play();
        setIsPlaying(true);
      } else {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    }
  };


  return (
    <div
      onClick={handlePlayButtonClick}
      className="bg-[#22c55e] active:scale-90 hover:scale-110  opacity-0 duration-300 group-hover:opacity-100 p-4 rounded-full"
    >
      {isPlaying ? (
        <FaPause className="text-black" />
      ) : (
        <FaPlay className="text-black" />
      )}
      <audio ref={audioRef} />
    </div>
  );
}

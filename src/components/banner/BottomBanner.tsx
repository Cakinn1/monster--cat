import React from "react";
import { MusicProps } from "../../constants/typings";
import { CiHeart } from "react-icons/ci";
import SongPhoto from "../ui/SongPhoto";
interface BottomBannerProps {
  currentSongPlaying: MusicProps | null;
  handleAddCurrentSongToLiked: (value: number) => void;
}
export default function BottomBanner(props: BottomBannerProps) {
  const { currentSongPlaying, handleAddCurrentSongToLiked } = props;
  return (
    <div className="fixed flex justify-between items-center flex-1 p-4 bottom-0 h-[120px] bg-black text-white w-full ">
      <SongPhoto
        handleCurrentChange={handleAddCurrentSongToLiked}
        id={currentSongPlaying?.id}
        image={currentSongPlaying?.album.cover}
        title={currentSongPlaying?.title}
        artist={currentSongPlaying?.artist.name}
        isLikes={true}
      />
      <div></div>
    </div>
  );
}

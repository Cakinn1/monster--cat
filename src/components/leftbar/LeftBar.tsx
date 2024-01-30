import { MdHome } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import NavList from "./NavList";
import { useState } from "react";
import { CiMusicNote1 } from "react-icons/ci";
import LibraryHeader from "./LibraryHeader";
import { MusicProps } from "../../constants/typings";
import SongPhoto from "../ui/SongPhoto";

interface LeftBarProps {
  libraryMusic: MusicProps[];
}
export default function LeftBar(props: LeftBarProps) {
  const { libraryMusic } = props;
  const [isSelected, setIsSelected] = useState<string>("");

  const handleSelect = (title: string) => {
    setIsSelected(title);
    if (title === isSelected) {
      setIsSelected("");
    }
  };

  return (
    <div className=" m-2 flex-1 hidden  md:flex -[110px] h-screen space-y-2 flex-col fixed w-[300px]">
      <div className="bg-neutral-900 p-6 space-y-6 rounded-lg">
        <NavList
          isSelected={isSelected}
          handleSelect={handleSelect}
          title="Home"
          icon={<MdHome />}
        />
        <NavList
          isSelected={isSelected}
          handleSelect={handleSelect}
          title="Search"
          icon={<IoIosSearch />}
        />
      </div>
      <div  className="bg-neutral-900  overflow-y-auto space-y-4  flex-col p-6 py-3 rounded-lg flex flex-1">
        <div>
          <LibraryHeader />
        </div>
        <div className="space-y-4 pb-6">
          {libraryMusic.map((data) => (
            <SongPhoto
              artist={data.artist.name}
              image={data.album.cover}
              id={data.id}
              isLikes={false}
              title={data.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

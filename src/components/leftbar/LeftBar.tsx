import { MdHome } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import NavList from "./NavList";
import { useState } from "react";
import { CiMusicNote1 } from "react-icons/ci";
import LibraryHeader from "./LibraryHeader";
export default function LeftBar() {
  const [isSelected, setIsSelected] = useState<string>("");

  const handleSelect = (title: string) => {
    setIsSelected(title);
    if (title === isSelected) {
      setIsSelected("");
    }
  };

  return (
    <div className="flex m-2 flex-1 mb-[110px] space-y-2 flex-col max-w-[300px]">
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
      <div className="bg-neutral-900 flex-col p-6 py-3 rounded-lg flex flex-1">
        <div>
          <LibraryHeader />
        </div>
      </div>
    </div>
  );
}

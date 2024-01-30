import { MdOutlineLibraryMusic } from "react-icons/md";
import { IoAdd } from "react-icons/io5";
export default function LibraryHeader() {
  return (
    <div className="flex text-[#a3a3a3] justify-between flex-1 items-center ">
      <div className="flex  gap-x-2 items-center">
        <MdOutlineLibraryMusic className="text-2xl" />
        <h1>Your Library</h1>
      </div>
      <IoAdd className="text-2xl duration-300 cursor-pointer hover:text-white" />
    </div>
  );
}

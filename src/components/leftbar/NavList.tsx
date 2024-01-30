import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
interface NavListProps {
  icon: ReactElement;
  title: string;
  isSelected: string;
  handleSelect: (value: string) => void;
}

export default function NavList(props: NavListProps) {
  const { icon, title, isSelected, handleSelect } = props;
  return (
    <Link to={`${title === "Home" ? "/" : "search"}`}
      onClick={() => handleSelect(title)}
      className={`${
        isSelected === title ? "text-white" : "text-[#a3a3a3]"
      } gap-x-4 duration-300 cursor-pointer hover:text-white flex items-center`}
    >
      <h1 className="text-2xl">{icon}</h1>
      <h1 className="text-lg">{title}</h1>
    </Link>
  );
}

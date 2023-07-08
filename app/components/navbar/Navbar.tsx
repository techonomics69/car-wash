"use client";
import { SafeUser } from "@/types";
import Container from "../Container";
import Logo from "./Logo";
import { UserMenu } from "./UserMenu";
import { HiMenu } from "react-icons/hi";
import { useState } from "react";
import { Sidebar } from "../sidebar/Sidebar";

interface NavbarProps {
  currentUser?: SafeUser | null;
}

const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
  const [isShown, setIsShown] = useState(false);

  const handleIsShown = () => {
    setIsShown(!isShown);
    console.log("🚀 ~ file: Navbar.tsx:21 ~ handleIsShown ~ isShown:", isShown);
  };

  return (
    <div className="absolute h-24 w-full right-0 -z-5 rounded-l-xl bg-indigo-950	">
      <Sidebar
        currentUser={currentUser}
        handleIsShown={handleIsShown}
        isShown={isShown}
      />
      <div>
        <Container>
          <div
            className="grid
            md:grid-cols-2
            grid-cols-3
            grid-rows-1
            justify-between
            items-center
            gap-3
            md:gap-0
            h-24
                    "
          >
            <HiMenu
              size={38}
              className="block cursor-pointer justify-self-start md:hidden text-white"
              onClick={handleIsShown}
            />
            <Logo />
            <UserMenu currentUser={currentUser} />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;

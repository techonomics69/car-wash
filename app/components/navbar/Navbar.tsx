import { SafeUser } from "@/types";
import Container from "../Container";
import Logo from "./Logo";
import { UserMenu } from "./UserMenu";

interface NavbarProps {
  currentUser?: SafeUser | null;
}

const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
  return (
    <div className="fixed left-0 w-32 h-full z-10 absolute shadow-sm">
      <div
        className="py-1
                   border-b-[1px]
                   relative
                   
                   "
      >
        <div
          className="flex
                      flex-col
                      items-center
                      justify-between
                      gap-3
                      md:gap-0
                    "
        >
          <UserMenu currentUser={currentUser} />
          <Logo />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

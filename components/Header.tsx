import { SiNike } from "react-icons/si";
import NewDropdown from "./NewDropdown";
import RightHeader from "./RightHeader";
import Link from "next/link";
import SubMenu from "./SubMenu";
import { useEffect, useState } from "react";

type Props = {};

const Header = (props: Props) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsScrolled(currentScrollPos > 0);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <div
      className={`flex items-center justify-between px-4 py-3 bg-white fixed w-full z-50 transition-all duration-500 ease-in-out ${
        isScrolled ? "-top-16 shadow-md" : "top-0"
      }`}
    >
      <Link href="/">
        <div>
          <SiNike className="cursor-pointer hover:opacity-50" size={40} />
        </div>
      </Link>
      <div className="hidden md:flex gap-3 items-center justify-center font-semiboldbold text-xl font-popins ">
        <div className="hover:underline">
          <NewDropdown />
        </div>
        <Link href="/shoe/1">
          <p className="cursor-pointer hover:underline">Men</p>
        </Link>
        <p className="cursor-pointer hover:underline">Women</p>
        <p className="cursor-pointer hover:underline">Kids</p>
        <div className="cursor-pointer hover:underline relative">
          <SubMenu />
        </div>
        <p className="cursor-pointer hover:underline">SNKRS</p>
      </div>
      <div className="z-50">
        <RightHeader />
      </div>
    </div>
  );
};

export default Header;

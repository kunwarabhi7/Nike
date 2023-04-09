import { SiNike } from "react-icons/si";
import NewDropdown from "./NewDropdown";
import RightHeader from "./RightHeader";
import Link from "next/link";
import SubMenu from "./SubMenu";


type Props = {};



const Header = (props: Props) => {
  return (
    <div className="mx-4 h-16 flex items-center justify-between z-20 sticky top-0 left-0 right-0">
      <Link href='/'>
      <div>
        <SiNike className="cursor-pointer hover:opacity-50" size={30} />
      </div>
      </Link>
      <div className="hidden md:flex gap-3 items-center justify-center font-semiboldbold text-xs font-popins ">
        <p className="hover:underline"><NewDropdown /></p>
      <p className="cursor-pointer hover:underline">Men</p>
      <p className="cursor-pointer hover:underline">Women</p>
      <p className="cursor-pointer hover:underline">Kids</p>
      <div className="cursor-pointer hover:underline relative"><SubMenu /></div>
      <p className="cursor-pointer hover:underline">SNKRS</p>
      </div>
      <div className="z-50">
        <RightHeader />
      </div>
    </div>
  );
};

export default Header;

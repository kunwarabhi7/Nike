import { SiNike } from "react-icons/si";
import NewDropdown from "./NewDropdown";
import RightHeader from "./RightHeader";


type Props = {};

const Header = (props: Props) => {
  return (
    <div className="mx-4 h-16 flex items-center justify-between z-20 sticky top-0 left-0 right-0">
      <div>
        <SiNike className="cursor-pointer hover:opacity-50" size={30} />
      </div>
      <div className="hidden md:flex space-x-1 items-center justify-center font-semiboldbold text-xs font-popins ">
        <p className="hover:underline"><NewDropdown /></p>
      <p className="cursor-pointer">Men</p>
      <p className="cursor-pointer">Women</p>
      <p className="cursor-pointer">Kids</p>
      <p className="cursor-pointer">Sale</p>
      <p className="cursor-pointer">SNKRS</p>
      </div>
      <div className="z-50">
        <RightHeader />
      </div>
    </div>
  );
};

export default Header;

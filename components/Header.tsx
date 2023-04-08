import { SiNike } from "react-icons/si";
import NewDropdown from "./NewDropdown";
import RightHeader from "./RightHeader";


type Props = {};

const Header = (props: Props) => {
  return (
    <div className="mx-4 flex items-center justify-between">
      <div>
        <SiNike className="cursor-pointer hover:opacity-50" size={30} />
      </div>
      <div className="hidden md:flex space-x-1 items-center justify-center font-semiboldbold text-sm font-popins ">
        <p className="hover:underline"><NewDropdown /></p>
      <p>Men</p>
      <p>Women</p>
      <p>Kids</p>
      <p>Sale</p>
      <p>SNKRS</p>
      </div>
      <div>
        <RightHeader />
      </div>
    </div>
  );
};

export default Header;

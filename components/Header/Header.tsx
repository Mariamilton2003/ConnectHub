'use client'
import Button from "../Button/Button";
import MenuIcon from '@mui/icons-material/Menu';

interface HeaderProps {
  htmlRef: React.RefObject<HTMLDivElement | null>; 
}

const Header:React.FC<HeaderProps> = ({htmlRef}) => {
  return (
    <div className="fixed z-50 w-full flex px-10 py-4 justify-between items-center bg-slate-50/30 backdrop-blur-md rounded-xl" ref={htmlRef}>
      <div className="">
      <div className="text-2xl text-violet-950 font-extrabold items-center sm:flex hidden">
        ConnectHub
      </div>
      <div className="sm:hidden flex">
        CH
      </div>
      </div>
      <div className="gap-8 items-center md:flex hidden">
        <div className="text-lg font-medium hover:text-violet-600">Home</div>
        <div className="text-lg font-medium hover:text-violet-600">Service</div>
        <div className="text-lg font-medium hover:text-violet-600">About</div>
        <div className="text-lg font-medium hover:text-violet-600">Contact</div>
      </div>
      <div className="flex items-center gap-4">
        <Button text="Get Started" varient="primary" className="text-white" />
        <div className="md:hidden flex"><MenuIcon/></div>
      </div>
     {/* TODO: Add a hamburger menu */}
    </div>
  );
};

export default Header;

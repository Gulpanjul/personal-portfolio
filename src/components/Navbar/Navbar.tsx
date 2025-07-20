import Link from "next/link";
import ThemeToggle from "../commons/ThemeToggle";
import navLinks from "./Navbar.contants";
import NavLink from "./NavLink";
import { useState } from "react";
import MenuOverlay from "./MenuOverlay";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-background bg-opacity-90">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2 ">
        <Link
          href="/"
          className="text-lg md:text-5xl text-primary font-semibold"
        >
          LOGO
        </Link>
        <div className="mobile-menu block md:hidden">
          <button
            className="flex flex-col items-center justify-start relative"
            onClick={handleClick}
          >
            <span
              className={`absolute h-0.5 w-6 bg-primary rounded-sm transform transition duration-300 ease-in-out 
        ${isOpen ? "rotate-45 top-1/2" : "-translate-y-2"}`}
            ></span>
            <span
              className={`absolute h-0.5 w-6 bg-primary rounded-sm transform transition duration-300 ease-in-out 
        ${isOpen ? "opacity-0" : "opacity-100"}`}
            ></span>
            <span
              className={`absolute h-0.5 w-6 bg-primary rounded-sm transform transition duration-300 ease-in-out 
        ${isOpen ? "-rotate-45 top-1/2" : "translate-y-2"}`}
            ></span>
          </button>
        </div>
        <div className="menu hidden md:block md:w-auto">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0 items-center">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
            <li>
              <ThemeToggle />
            </li>
          </ul>
        </div>
      </div>
      {isOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;

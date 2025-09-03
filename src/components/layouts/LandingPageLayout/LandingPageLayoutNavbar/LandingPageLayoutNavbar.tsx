import Display from "@/components/ui/Display";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { NAV_ITEMS } from "../LandingPageLayout.constant";
import ThemeToggle from "@/components/commons/ThemeToggle";
import { useState } from "react";
import MenuOverlay from "./MenuOverlay";
import Label from "@/components/ui/Label";

const LandingPageNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="sticky top-0 left-0 right-0 z-50 w-full bg-background/90">
      <div className="flex container h-16 items-center justify-between mx-auto px-6">
        <Link href="/" className="flex items-center gap-2">
          <Display size="sm">Portfolio</Display>
        </Link>

        <div className="mobile-menu block lg:hidden">
          <button
            className="flex flex-col items-center justify-center relative w-6 h-6"
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

        <div className="menu hidden lg:block lg:w-auto">
          <NavigationMenu>
            <NavigationMenuList>
              {NAV_ITEMS.map((item) => (
                <NavigationMenuItem key={item.label}>
                  <Link href={item.href} legacyBehavior passHref>
                    <NavigationMenuLink className="px-3 py-2 font-medium text-muted-foreground hover:text-destructive">
                      <Label size={"large"}>{item.label}</Label>
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
              <NavigationMenuItem>
                <ThemeToggle />
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>

      {isOpen ? <MenuOverlay links={NAV_ITEMS} /> : null}
    </header>
  );
};

export default LandingPageNavbar;

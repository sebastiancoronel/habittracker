import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuList,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Habit Tracker</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink asChild>
                <Link to="/habits/create">Create Habit</Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <Link to="/habits/create">Habit list</Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <Link to="/habits/create">Dashboard</Link>
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
}

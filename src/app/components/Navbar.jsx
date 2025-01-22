
import Link from "next/link";
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";

export function TopNavbar() {
  return (
    <Navbar fluid className="sticky top-0 z-50">
      <NavbarBrand as={Link} href="#">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink as={Link} href="/" active>
          Home
        </NavbarLink>
        <NavbarLink as={Link} href="/blogs">Blogs</NavbarLink>
        <NavbarLink as={Link} href="/profile">Profile</NavbarLink>
        <NavbarLink as={Link} href="/profile">Sign In</NavbarLink>
        <NavbarLink as={Link} href="/profile">Sign Out</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}

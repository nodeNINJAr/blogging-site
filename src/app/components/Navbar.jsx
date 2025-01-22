import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export async function TopNavbar() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
 
  
  return (
    <Navbar fluid className="sticky top-0 z-50">
      <NavbarBrand as={Link} href="#">
        <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white italic">
          Arc Blogs
        </span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink as={Link} href="/" active>
          Home
        </NavbarLink>
        <NavbarLink as={Link} href="/blogs">
          Blogs
        </NavbarLink>
        {user ? (
          <>
            <NavbarLink as={Link} href="/profile">
              Profile
            </NavbarLink>
            <NavbarLink as={Link} href="/api/auth/logout">
              Sign Out
            </NavbarLink>
          </>
        ) : (
          <NavbarLink as={Link} href="/api/auth/login">
            Sign In
          </NavbarLink>
        )}
      </NavbarCollapse>
    </Navbar>
  );
}

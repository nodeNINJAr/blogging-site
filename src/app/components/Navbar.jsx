import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { getKindeServerSession, LoginLink, LogoutLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/server";

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
        <NavbarLink as={Link} href="/">
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
             {/*  */}
            <LogoutLink>Sign Out</LogoutLink>
          </>
        ) : (
          <>
            {/*  */}
            <LoginLink postLoginRedirectURL="/profile">Sign in</LoginLink>
            <RegisterLink postLoginRedirectURL="/profile">Sign up</RegisterLink>
          </>
        )}
      </NavbarCollapse>
    </Navbar>
  );
}

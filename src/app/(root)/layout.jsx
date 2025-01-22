import React from "react";
import { MainFooter } from "../components/MainFooter";
import { TopNavbar } from "../components/Navbar";

const layout = ({ children }) => {
  return (
    <div className="container mx-auto">
      {/* navbar */}
      <TopNavbar />
      {/* main contant */}
      <main className="px-4 min-h-screen">{children}</main>
      {/* footer */}
      <MainFooter />
    </div>
  );
};

export default layout;

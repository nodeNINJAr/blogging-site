import React from "react";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

//
const page = async () => {
  const { isAuthenticated, getUser } = getKindeServerSession();
  const isUserAuthenticated = await isAuthenticated();
  const user = await getUser();

  //
  if (!isUserAuthenticated) {
    return redirect("/api/auth/login");
  }

  return <div className="text-3xl font-semibold text-red-500 text-center mt-10 bg-slate-500 rounded-md py-4">Welcome to your profile! {user?.given_name || "User"}</div>;
};

export default page;

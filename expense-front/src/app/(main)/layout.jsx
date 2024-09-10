"use client";

import { useContext, useEffect } from "react";
import { UserContext } from "../context/user-context";
import { useRouter, redirect } from "next/navigation";
import { Header } from "../components";

const Layout = ({ children }) => {
  const { user, fetchUserData } = useContext(UserContext);
  const router = useRouter();

  useEffect(() => {
    fetchUserData();
  }, []);

  const logOut = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  const addRecord = () => {};
  // if (!user) {
  //   redirect("/login");
  // }

  return (
    <div>
      <Header user={user} logOut={logOut} />
      {children}
    </div>
  );
};

export default Layout;

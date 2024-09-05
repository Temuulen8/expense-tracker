"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-toastify";
import { apiUrl } from "@/utils/util";

const Login = () => {
  const router = useRouter();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const logIn = async () => {
    // ES5
    // const email = userData.email;
    // const password = userData.password
    // ES6 Onject destructing
    const { email, password } = userData;

    try {
      const response = await axios.post(`${apiUrl}/auth/signin`, {
        email,
        password,
      });

      // const response = fetch("http://localhost:8008/auth/signin", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({ email, password }),
      // });

      if (response.status === 200) {
        toast.success("User successfully signed in", { autoClose: 1000 });
        const { token } = response.data;
        localStorage.setItem("token", token);

        router.push("/dashboard");
      }
    } catch (error) {
      console.error("There was an error signing in:", error);
      toast.error("Failed to sign in. Please try again.");
    }
  };

  return (
    <div className="flex">
      <div className="flex flex-col items-center justify-center h-screen gap-10 w-1/2">
        <Image src="/logo.png" width={90} height={25} alt="Logo" />
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-2xl	font-semibold	">Welcome Back</h2>
          <h3 className="text-[#334155]">
            Welcome back, Please enter your details
          </h3>
        </div>
        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Email"
            className="w-[384px] h-[48px] bg-[#F3F4F6] rounded-md pl-4 border"
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
          />
          <input
            type="password"
            placeholder="Password"
            className="w-[384px] h-[48px] bg-[#F3F4F6] rounded-md pl-4 border"
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
          />
          <button
            className="btn bg-[#0166FF] text-white rounded-[20px] w-[384px] h-[48px]"
            onClick={logIn}
          >
            Log in
          </button>
        </div>
        <div>
          <span>Don’t have account? </span>
          <Link href="/signup">
            <button className="btn btn-link text-[#0166FF]">Sign up</button>
          </Link>
        </div>
      </div>

      <div className="bg-[#0166FF] w-1/2"></div>
    </div>
  );
};

export default Login;

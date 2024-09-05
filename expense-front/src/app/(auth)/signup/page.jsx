"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { apiUrl } from "@/utils/util";

const SignUp = () => {
  const router = useRouter();

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    repassword: "",
  });

  const [image, setImage] = useState(null);

  const handleImageUpload = async () => {
    if (!image) return;
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "byurziwm");

    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${process.env.CLOUD_NAME}/image/upload`,
        formData
      );
      return response.data.secure_url;
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const signUp = async () => {
    // const imageUrl = await handleImageUpload();
    // if (!imageUrl) return;

    const { name, email, password, repassword } = userData;

    if (password !== repassword) {
      toast.error("Нууц үг хоорондоо тохирохгүй байна.");
      return;
    }

    try {
      const response = await fetch(`${apiUrl}/auth/signup`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ email, name, password }),
      });

      if (response.status === 201) {
        toast.success("User successfully signed up", { autoClose: 1000 });
        router.push("/login");
      }
    } catch (error) {
      console.error("There was an error signing up:", error);
      toast.error("Failed to sign up. Please try again.");
    }
  };

  return (
    <div className="flex">
      <div className="flex flex-col items-center justify-center h-screen gap-10 w-1/2">
        <Image src="/logo.png" width={90} height={25} alt="Logo" />
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-2xl	font-semibold	">Create Geld account</h2>
          <h3 className="text-[#334155]">
            Sign up below to create your Wallet account
          </h3>
        </div>
        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Name"
            className="w-[384px] h-[48px] bg-[#F3F4F6] rounded-md pl-4 border"
            value={userData.name}
            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Email"
            className="w-[384px] h-[48px]  bg-[#F3F4F6] rounded-md pl-4 border"
            value={userData.email}
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
          />
          <input
            type="password"
            placeholder="Password"
            className="w-[384px] h-[48px] bg-[#F3F4F6] rounded-md pl-4 border"
            value={userData.password}
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
          />
          <input
            type="password"
            placeholder="Re-password"
            className="w-[384px] h-[48px] bg-[#F3F4F6] rounded-md pl-4 border"
            value={userData.repassword}
            onChange={(e) =>
              setUserData({ ...userData, repassword: e.target.value })
            }
          />
          <button
            className="btn bg-[#0166FF] text-white rounded-[20px] w-[384px] h-[48px] "
            onClick={signUp}
          >
            Sign Up
          </button>
        </div>
        <div>
          <span>Already have account? </span>
          <Link href="/login">
            <button className="btn btn-link text-[#0166FF]">Log in</button>
          </Link>
        </div>
      </div>

      <div className="bg-[#0166FF] w-1/2"></div>
    </div>
  );
};

export default SignUp;

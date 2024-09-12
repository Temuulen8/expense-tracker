"use client";
import { apiUrl } from "@/utils/util";
import { useEffect, useState, useContext } from "react";
import { UserContext } from "../../context/user-context";
import axios from "axios";
import { toast } from "react-toastify";
import { IoMdAdd } from "react-icons/io";

const Records = () => {
  const { user } = useContext(UserContext);
  const [categoryName, setCategoryName] = useState([]);

  const fetchCategoryName = async () => {
    const token = localStorage.getItem("token");
    try {
      const res = await axios.get(`${apiUrl}/category`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("aki", res.data.category);
      setCategoryName(res.data.category);
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch category name");
    }
  };

  useEffect(() => {
    fetchCategoryName();
  }, [user]);
  console.log("cn", categoryName);
  return (
    <div className="flex gap-6 justify-center bg-gray-100 p-8">
      <div className="w-[282px]  border rounded-xl flex flex-col gap-6 py-6 pl-4 bg-white">
        <p className="font-semibold text-2xl">Records</p>
        <button className="btn w-[250px] rounded-[20px] bg-[#0166FF] text-white">
          <IoMdAdd />
          <p>Add</p>
        </button>
        <label className="input input-bordered flex items-center gap-2 w-[250px] h-[32px]">
          <input type="text" className="grow" placeholder="Search" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>

        <div className="flex flex-col gap-4">
          <div className="font-semibold">Types</div>
          <div className="flex flex-col gap-2">
            <div className="form-control">
              <label className=" flex gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="radio-10"
                  className="radio"
                  defaultChecked
                />
                <span className="label-text">All</span>
              </label>
            </div>
            <div className="form-control">
              <label className=" flex gap-2 cursor-pointer">
                <input type="radio" name="radio-10" className="radio" />
                <span className="label-text">Income</span>
              </label>
            </div>
            <div className="form-control">
              <label className="flex gap-2 cursor-pointer">
                <input type="radio" name="radio-10" className="radio" />
                <span className="label-text">Expense</span>
              </label>
            </div>
          </div>
        </div>

        <div>
          <div className="font-semibold pb-4">Category</div>
          <div className="flex flex-col gap-3">
            {categoryName?.map((cn) => {
              return (
                <div className="flex gap-2">
                  <img src="/eye.png" alt="" />
                  <p>{cn.name}</p>
                </div>
              );
            })}
          </div>
          <button className="flex items-center pt-4">
            <IoMdAdd />
            <p>Add Category</p>
          </button>
        </div>
      </div>

      <div className="w-[894px]"></div>
    </div>
  );
};

export default Records;

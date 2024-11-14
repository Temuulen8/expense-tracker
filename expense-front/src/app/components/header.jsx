"use client";

import Image from "next/image";
import Link from "next/link";
import { AddIcon } from "@/icons";
import AddRecord from "./dashboard/addRecord";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const Header = ({ user, logOut }) => {
  const router = useRouter();

  const addRecord = async () => {
    router.push("/");
  };

  return (
    <header className="flex items-center max-w-[1200px] mx-auto justify-between py-4">
      <div className="flex gap-6 items-center">
        <Image src="/Vector.png" width={28} height={28} alt="logo" />
        <Link href="/dashboard">
          <p className="font-semibold">Dashboard</p>
        </Link>
        <Link href="/records">
          <p>Records</p>
        </Link>
        <Link href="/records">
          <p>{user?.name}</p>
        </Link>
      </div>
      <div className="flex gap-6 items-center">
        <Dialog>
          <AddIcon />
          <DialogTrigger asChild>
            <Button variant="outline">Add record</Button>
          </DialogTrigger>
          <DialogContent className="flex justify-center">
            <div className="flex justify-center">
              <div className=" h-[512px] w-[792px] rounded-3xl border bg-white">
                <div className="font-semibold text-xl h-[68px] border-b-[1px] flex items-center pl-5 ">
                  Add record
                </div>

                <div className="pl-6 flex">
                  <div className="flex flex-col gap-5  pt-5">
                    <div className="join h-10 ">
                      <input
                        className="join-item btn w-[172px]"
                        type="radio"
                        name="options"
                        aria-label="Expense"
                      />
                      <input
                        className="join-item btn w-[172px]"
                        type="radio"
                        name="options"
                        aria-label="Income"
                      />
                    </div>
                    <div>
                      <label className="form-control w-full max-w-xs">
                        <input
                          type="text"
                          placeholder="₮ 000.00"
                          className="input input-bordered h-[76px] border rounded-lg pl-5 w-[348px]"
                        />
                      </label>
                    </div>
                    <div>
                      <div>Gategory</div>
                      <select className="select select-bordered border rounded-lg h-12 pl-4 w-[348px]">
                        <option disabled selected>
                          Choose
                        </option>
                        <option>EXP</option>
                        <option>INC</option>
                      </select>
                    </div>

                    <div className="flex gap-3">
                      <div>
                        <div>date</div>
                        <select className="select select-bordered max-w-xs border rounded-lg pl h-12 pl-4 w-[168px]">
                          <option disabled selected>
                            Choose
                          </option>
                          <option>EXP</option>
                          <option>INC</option>
                        </select>
                      </div>
                      <div>
                        <div>time</div>
                        <select className="select select-bordered max-w-xs border rounded-lg pl h-12 pl-4  w-[168px]">
                          <option disabled selected>
                            Choose
                          </option>
                          <option>EXP</option>
                          <option>INC</option>
                        </select>
                      </div>
                    </div>
                    <button className="btn bg-[#0166FF] text-white rounded-[20px] h-10 w-[348px]">
                      Add Record
                    </button>
                  </div>

                  <div className="flex flex-col gap-5  pt-5 pl-12">
                    <div>
                      <div>Payee</div>
                      <input
                        type="text"
                        placeholder="Write here"
                        className="input input-bordered h-12 w-[348px]"
                      />
                    </div>
                    <div>
                      <div>Note</div>
                      <input
                        type="text"
                        placeholder="Write here"
                        className="input input-bordered h-[280px] w-[348px] pb-60"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
        <div>
          <div>
            <img src={user?.profile_img} />
          </div>
        </div>
        <button className="btn btn-sm" onClick={logOut}>
          Log out
        </button>
      </div>
    </header>
  );
};

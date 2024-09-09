import { PlusIcon } from "@/icons";
import Image from "next/image";
import Link from "next/link";
import Add_record from "./dashboard/addRecord";

export const Header = ({ user, logOut }) => {
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
        <button
          className="btn bg-[#0166FF] text-white btn-sm flex items-center rounded-[20px] px-3 py-1"
          onClick={Add_record}
        >
          <PlusIcon />
          Records
        </button>
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

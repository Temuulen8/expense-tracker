import { PlusIcon } from "@/icons";
import Image from "next/image";
import Link from "next/link";

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
      </div>
      <div className="flex gap-6 items-center">
        <button className="btn bg-[#0166FF] text-white btn-sm flex items-center rounded-[20px] px-3 py-1">
          <PlusIcon />
          Records
        </button>
        <div className="flex gap-9">
          <div className="avatar w-12 h-12 flex items-center gap-2 font-medium">
            {user.name}
          </div>
          <button className="btn btn-sm" onClick={logOut}>
            Log out
          </button>
        </div>
      </div>
    </header>
  );
};

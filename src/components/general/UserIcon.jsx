import { signOut } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";

import { LuBadgeCheck } from "react-icons/lu";

const UserIcon = ({userInfo}) =>{
  console.log(userInfo);
	return (
		<div className="dropdown dropdown-end pr-5">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-20 rounded-full">
         <Image
           alt="Profile picture"
           src={userInfo?.image}
           width={20}
           height={20}
          />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow flex gap-3">
        <button className="btn">
          <Link href="/dashboard" className="justify-between">
            Panel de usuario
            {userInfo.type === "rescuer" && <span className="badge bg-green-600 text-white"><LuBadgeCheck/> Rescuer</span>}
            {userInfo.type === "shelter" && <span className="badge bg-sky-500 text-white"><LuBadgeCheck /> Shelter</span>}
          </Link>
        </button>
        <button onClick={()=>signOut()} className="btn"><a>Salir de la cuenta</a></button>
      </ul>
    </div>
	);
}

export default UserIcon;
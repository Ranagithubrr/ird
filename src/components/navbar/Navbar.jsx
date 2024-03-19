import { IoIosSettings } from "react-icons/io";
import { FaCaretDown } from "react-icons/fa";
import Image from "next/image";
import UserIcon from "@/img/profile.svg";
import { IoIosSearch } from "react-icons/io";
const Navbar = () => {
    return (
        <div className="lg:flex float-end w-full hidden">
            <div className="border-2 w-5/12 rounded h-14 flex items-center mt-3 focus-within:border-green-500 overflow-hidden bg-white ml-auto">
                <input type="text" placeholder="Search by Dua Name" className="h-full w-full pl-4 border-none outline-none rounded" />
                <div className="bg-gray-100 cursor-pointer hover:bg-gray-200 w-16 h-10 border-2 border-white mr-2 rounded-lg flex items-center justify-center text-lg"><IoIosSearch /></div>
            </div>
            <div className="flex items-center w-3/12 justify-end">
                <div className="flex items-center pr-4 cursor-pointer">
                    <Image src={UserIcon} alt="user" />
                    <span className="text-gray-700 pl-2">
                        <FaCaretDown />
                    </span>
                </div>
                <div>
                    <span className="text-green-700 text-3xl cursor-pointer"><IoIosSettings /></span>
                </div>
            </div>
        </div>
    )
}

export default Navbar
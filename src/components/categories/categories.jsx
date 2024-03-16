import Image from "next/image";
import { IoIosSearch } from "react-icons/io";
import DuaIcon from '@/img/cat-icons/duar_gurutto.svg'

const GetuserData = async () => {
    const res = await fetch('http://localhost:4000/category');
    if (res.ok) {
        return res.json();
    } else {
        console.log('not ok')
    }
}

const Categories = async () => {
    const category = await GetuserData();
    console.log('got category data is', category[0])

    return (
        <div className="p-4">
            <span className="text-2xl">Duas Page</span>
            <div className="relative bg-white mt-4 lg:h-[calc(86vh)] rounded-md">
                <div className="absolute top-0 left-0 right-0 bg-green-600 text-white w-full rounded-t-md rounded-e-md- py-4 text-center">
                    <span>Categories</span>
                </div>
                <div className="absolute w-90 w-full px-4 top-16">
                    <div className="border-2 rounded h-14 flex items-center justify-center mt-3 focus-within:border-green-500">
                        <span className="text-2xl text-gray-500 pr-3"><IoIosSearch /></span>
                        <input type="text" placeholder="Search Categories" className="h-full w-10/12 float-end border-none outline-none" />
                    </div>
                </div>
                <div className="absolute w-full px-4 top-36 overflow-y-scroll h-full">
                    {
                        category && category.length !== 0 && category.map((ele) => {
                            return (
                                <div className="hover:bg-gray-200 rounded-lg px-4 py-3 my-2 cursor-pointer flex" key={ele.cat_id}>
                                    <div className="bg-gray-200 rounded p-1 box-border">
                                        <Image src={DuaIcon} alt="dua icon"></Image>
                                    </div>
                                    <div className="pl-3">
                                        <span className="text-black block">{ele.cat_name_en}</span>
                                        <span className="text-gray-500 block text-xs">Subcategory :{ele.no_of_subcat}</span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Categories





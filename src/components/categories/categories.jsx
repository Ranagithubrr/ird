import { IoIosSearch } from "react-icons/io";

const Categories = () => {
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
                    <input type="text" placeholder="Search Categories" className="h-full w-10/12 float-end border-none outline-none"/>
                </div>                
            </div>
        </div>
    </div>
  )
}

export default Categories
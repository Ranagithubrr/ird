"use client"
import Categories from "@/components/categories/categories";
import Dua from "@/components/dua/Dua";
import Navbar from "@/components/navbar/Navbar";
import Sidebar from "@/components/sidebar/sidebar";
import Image from "next/image";
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from "react";
import 'react-loading-skeleton/dist/skeleton.css';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { Suspense } from "react";

export default function Home() {
  const Parameater = useSearchParams();
  const [duaData, setDuaData] = useState([]);
  const [loading, setLoading] = useState(false);



  const activeCat = Parameater.get('cat') || 1;

  const FetchDuaData = async () => {
    setLoading(true)
    setDuaData([]);
    const duaResponse = await fetch(`https://ird-task-backend.onrender.com/dua?cat=${activeCat}`);
    const duaDataReceived = await duaResponse.json();
    setDuaData(duaDataReceived);
    setLoading(false)
  }
  useEffect(() => {
    FetchDuaData();
    // eslint-disable-next-line
  }, [activeCat]);

  useEffect(() => {
    setLoading(true);
  }, [activeCat]);

  const [activeSubCategoryTitle, setActiveSubCategoryTitle] = useState("The servant is dependent on his Lord");
  console.log(activeSubCategoryTitle)
  return (
    <SkeletonTheme baseColor="#ffffff" highlightColor="#EBEEF2">
      <div className="bg-green-500 h-screen w-screen fixed flex flex-col z-50 items-center justify-center">
        <span className="text-white block">This website is relocated at https://ird-seven.vercel.app/</span>
        <span className="text-white block">To continue Please</span>
        <a href="https://ird-seven.vercel.app/" className="bg-white text-green-500 font-semibold px-4 py-2 rounded mt-4">
          Click Here
        </a>
      </div>
      <div className="hidden relative  lg:gap-6 sm-max:overflow-auto xs:flex xs:flex-col xs:gap-0 sm:gap-0 xl:grid-rows-[46px,1fr] 2xl:grid-rows-[46px,1fr] 3xl:grid-rows-[46px,1fr] z-0 xl:grid-cols-[105px,350px,1fr] 2xl:grid-cols-[105px,350px,1fr,270px] 3xl:grid-cols-[105px,350px,1fr,300px] px-2 lg:p-6">
        <Suspense fallback={<div>Loading...</div>}>
          <div className="">
            <Sidebar />
          </div>
          <div>
            <Categories setActiveSubCategoryTitle={setActiveSubCategoryTitle} />
          </div>
          <div className="">
            <Navbar />
            <Dua loading={loading} duaData={duaData} activeSubCategoryTitle={activeSubCategoryTitle} />
          </div>
        </Suspense>
      </div>
    </SkeletonTheme>
  );
}

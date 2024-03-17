"use client"
import Categories from "@/components/categories/categories";
import Navbar from "@/components/navbar/Navbar";
import Sidebar from "@/components/sidebar/sidebar";
import Image from "next/image";
import { useSearchParams } from 'next/navigation'

export default function Home() {
  const Parameater = useSearchParams()

  const activeCat = Parameater.get('cat')
  // console.log(activeCat)
  return (
    <div className="relative grid gap-6 sm-max:overflow-auto xs:flex xs:flex-col xs:gap-0 sm:gap-0 xl:grid-rows-[46px,1fr] 2xl:grid-rows-[46px,1fr] 3xl:grid-rows-[46px,1fr] z-0 xl:grid-cols-[105px,350px,1fr] 2xl:grid-cols-[105px,350px,1fr,270px] 3xl:grid-cols-[105px,350px,1fr,300px] p-6">
      <div>
        <Sidebar />
      </div>
      <div>
        <Categories activeCat={activeCat}/>
      </div>
      <div>
        <Navbar />
      </div>
    </div>
  );
}

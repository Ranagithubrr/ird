import DuaCard from '@/img/duacard.svg';
import Image from 'next/image';
import { LuCopy } from "react-icons/lu";
import { CiBookmark } from "react-icons/ci";
import { PiLightbulbFilamentLight } from "react-icons/pi";
import { GoShareAndroid } from "react-icons/go";
import { MdReportGmailerrorred } from "react-icons/md";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { useState } from 'react';
const Dua = ({ duaData, activeSubCategoryTitle, loading }) => {    
    return (
        <div className="relative w-full mt-8 lg:h-[calc(86vh)] rounded-md top-2 overflow-y-scroll scroll-smooth">
            <div className="absolute top-2 left-0 right-0 mx-auto">

                <>
                    {
                        loading ? <div className='mt-5'>
                            <div>
                                <Skeleton height={35} />
                                <div className='mt-5'>
                                    <Skeleton height={20} width={450} />
                                </div>
                                <div className='mt-5'>
                                    <Skeleton height={15} count={4} />
                                </div>
                                <div className="mt-5">
                                    <Skeleton height={15} width={150} />
                                    <Skeleton height={15} width={250} />
                                </div>
                                <div className='flex flex-col items-end'>
                                    <Skeleton height={25} width={250} />

                                </div>
                            </div>
                            <div className='mt-5'>
                                <Skeleton height={20} width={450} />
                                <div className='mt-5'>
                                    <Skeleton height={15} count={4} />
                                </div>
                                <div className="mt-5">
                                    <Skeleton height={15} width={150} />
                                    <Skeleton height={15} width={250} />
                                </div>
                                <div className='flex flex-col items-end'>
                                    <Skeleton height={25} width={250} />

                                </div>
                            </div>
                        </div>

                            :
                            duaData && duaData.length !== 0 && duaData.map((ele) => {

                                return (
                                    <section key={ele.id} id={ele.dua_id}>
                                        <div className="bg-white rounded-md pl-5 py-4 mt-5">
                                            <div className="flex items-center">
                                                <Image src={DuaCard} width={34} height={34} alt='dua'></Image>
                                                <span className="text-green-600 pl-4">{ele.dua_id}. {ele.dua_name_en}</span>
                                            </div>
                                            <div>
                                                <p className='font-semibold text-gray-600 pr-4 text-justify py-4 leading-8'>{
                                                    ele.top_en !== null && ele.top_en
                                                }</p>
                                                <p className='text-3xl py-3 leading-loose'>
                                                    {
                                                        ele.dua_arabic !== null && ele.dua_arabic
                                                    }
                                                </p>
                                            </div>
                                            <div className='pt-4'>
                                                <span className="text-green-600 font-semibold">Reference:</span>
                                                <span className='block font-semibold text-lg text-gray-700'>
                                                    {
                                                        ele.refference_en !== null && ele.refference_en
                                                    }
                                                </span>
                                            </div>
                                            <div className='py-4 pt-8 flex justify-end'>
                                                <span className='cursor-pointer text-2xl text-gray-600 mx-3 inline-block'><LuCopy /></span>
                                                <span className='cursor-pointer text-2xl text-gray-600 mx-3 inline-block'><CiBookmark /></span>
                                                <span className='cursor-pointer text-2xl text-gray-600 mx-3 inline-block'><PiLightbulbFilamentLight /></span>
                                                <span className='cursor-pointer text-2xl text-gray-600 mx-3 inline-block'><GoShareAndroid /></span>
                                                <span className='cursor-pointer text-2xl text-gray-600 mx-3 inline-block'><MdReportGmailerrorred /></span>
                                            </div>
                                        </div>
                                    </section>
                                )
                            })
                    }
                </>
            </div>
        </div>
    )
}

export default Dua
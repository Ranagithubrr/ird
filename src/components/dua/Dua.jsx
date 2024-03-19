import DuaCard from '@/img/duacard.svg';
import Image from 'next/image';
import { LuCopy } from "react-icons/lu";
import { CiBookmark } from "react-icons/ci";
import { PiLightbulbFilamentLight } from "react-icons/pi";
import { GoShareAndroid } from "react-icons/go";
import { MdReportGmailerrorred } from "react-icons/md";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import ReactAudioPlayer from 'react-audio-player';
import { FaPlay } from "react-icons/fa";
import { useRef, useState } from 'react';
import { FaPause } from 'react-icons/fa6';
const Dua = ({ duaData, activeSubCategoryTitle, loading }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };
    return (
        <div className="relative w-full lg:mt-8 lg:h-[calc(86vh)] h-screen rounded-md top-[100px] lg:top-2 overflow-y-scroll scroll-smooth">
            <div className="absolute top-2 left-0 right-0 mx-auto">
                <div className="bg-white rounded-md  pl-5 py-4">
                    <span><span className="text-green-600 h-12 font-semibold text-base">Section:</span> {activeSubCategoryTitle}</span>
                </div>
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
                                                {
                                                    ele.top_en !== null &&
                                                    <p className='font-semibold text-gray-600 pr-4 text-justify py-4 leading-8'>{ele.top_en}
                                                    </p>
                                                }
                                                {
                                                    ele.dua_arabic !== null &&
                                                    <p className='text-3xl py-3 leading-loose'>
                                                        {ele.dua_arabic}
                                                    </p>
                                                }
                                            </div>
                                            <div>
                                                {
                                                    ele.translation_en !== null &&
                                                    <p className='font-semibold text-gray-600 pr-4 text-justify py-4 leading-8'> <i className='font-semibold text-lg'>Translation</i> :  {ele.translation_en}
                                                    </p>
                                                }
                                            </div>
                                            <div>
                                                {
                                                    ele.transliteration_en !== null &&
                                                    <p className='font-semibold text-gray-600 pr-4 text-justify py-4 leading-8'> <i className='font-semibold text-lg'>Transliteration</i> : {ele.transliteration_en}
                                                    </p>
                                                }
                                            </div>
                                            <div className='pt-4'>
                                                <span className="text-green-600 font-semibold">Reference:</span>
                                                <span className='block font-semibold text-lg text-gray-700'>
                                                    {
                                                        ele.refference_en !== null && ele.refference_en
                                                    }
                                                </span>
                                            </div>

                                            <div className="flex items-center justify-between pt-4">
                                                {ele.audio && (
                                                    <div>
                                                        <audio ref={audioRef} src={ele.audio}></audio>
                                                        <div className="mb-4">
                                                            <button
                                                                onClick={togglePlay}
                                                                className="bg-green-500 text-white font-bold py-4 px-4 rounded-full"
                                                            >
                                                                {isPlaying ? <FaPause /> : <FaPlay />}
                                                            </button>
                                                        </div>
                                                    </div>
                                                )}
                                                <div className='pt-8 flex justify-end'>
                                                    <span className='cursor-pointer text-2xl text-gray-600 mx-3 inline-block'><LuCopy /></span>
                                                    <span className='cursor-pointer text-2xl text-gray-600 mx-3 inline-block'><CiBookmark /></span>
                                                    <span className='cursor-pointer text-2xl text-gray-600 mx-3 inline-block'><PiLightbulbFilamentLight /></span>
                                                    <span className='cursor-pointer text-2xl text-gray-600 mx-3 inline-block'><GoShareAndroid /></span>
                                                    <span className='cursor-pointer text-2xl text-gray-600 mx-3 inline-block'><MdReportGmailerrorred /></span>
                                                </div>
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
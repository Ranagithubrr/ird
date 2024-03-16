import DuaLogo from '@/img/dua-logo.svg'
import HomeIcon from '@/img/icons/home.svg'
import alldua from '@/img/icons/alldua.svg'
import bookmark from '@/img/icons/bookmark.svg'
import books from '@/img/icons/books.svg'
import duainfo from '@/img/icons/dua-info.svg'
import memorize from '@/img/icons/memorize.svg'
import ruqyah from '@/img/icons/ruqyah.svg'
import Image from 'next/image'
import Link from 'next/link'
import { BiSolidDonateHeart } from "react-icons/bi";
const Sidebar = () => {
    return (
        <div className="row-span-full hidden xl:block xl:z-[-1] 2xl:block 2xl:z-[-1] 3xl:block 3xl:z-[-16] overflow-hidden">
            <div className="w-[100px] flex flex-col gap-y-5 fixed overflow-hidden overflow-y-scroll bg-white rounded-3xl overflow-x-hidden pt-4">
                <div className="bg-white rounded-3xl px-4 dark:bg-dark-bg lg:h-[calc(92vh)] xl:h-[92vh] 2xl:h-[93vh] 3xl:h-[93vh] scrl-left pb-16">
                    <div className='flex items-center justify-center pt-5'>
                        <Link href="/">
                            <Image src={DuaLogo} alt="dkfjkd" />
                        </Link>
                    </div>
                    <div className='pt-14'>
                        <div className='my-5'>
                            <Link href="/">
                                <div className='h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center mx-auto'>
                                    <Image src={HomeIcon} alt='home'></Image>
                                </div>
                            </Link>
                        </div>
                        <div className='my-5'>
                            <Link href="/">
                                <div className='h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center mx-auto'>
                                    <Image src={alldua} alt='home'></Image>
                                </div>
                            </Link>
                        </div>
                        <div className='my-5'>
                            <Link href="/">
                                <div className='h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center mx-auto'>
                                    <Image src={memorize} alt='home'></Image>
                                </div>
                            </Link>
                        </div>
                        <div className='my-5'>
                            <Link href="/">
                                <div className='h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center mx-auto'>
                                    <Image src={bookmark} alt='home'></Image>
                                </div>
                            </Link>
                        </div>
                        <div className='my-5'>
                            <Link href="/">
                                <div className='h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center mx-auto'>
                                    <Image src={ruqyah} alt='home'></Image>
                                </div>
                            </Link>
                        </div>
                        <div className='my-5'>
                            <Link href="/">
                                <div className='h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center mx-auto'>
                                    <Image src={duainfo} alt='home'></Image>
                                </div>
                            </Link>
                        </div>
                        <div className='my-5'>
                            <Link href="/">
                                <div className='h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center mx-auto'>
                                    <Image src={books} alt='home'></Image>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className='flex items-center justify-center pt-10 pb-14'>
                        <Link href="/">
                            <div className='bg-green-700 rounded p-4'>                               
                                <span className='text-white text-2xl'><BiSolidDonateHeart /></span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
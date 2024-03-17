"use client"

import Image from "next/image";
import { IoIosSearch } from "react-icons/io";

// Import SVG icons directly (avoid redundant imports and potential naming conflicts)
import dua_gurutto from '@/img/cat-icons/duar_gurutto.svg';
import dua_kobuler_somoy from '@/img/cat-icons/dua_kobuler_somoy.svg';
import jader_dua_kobul_hoy from '@/img/cat-icons/jader_dua_kobul_hoy.svg';
import kokhon_ki_bolte_hoy from '@/img/cat-icons/kokhon_ki_bolte_hoy.svg';
import zikirer_fozilot from '@/img/cat-icons/zikirer_fozilot.svg';
import sokal_sondha from '@/img/cat-icons/sokal_sondha.svg';
import ghum from '@/img/cat-icons/ghum.svg';
import poshak from '@/img/cat-icons/poshak.svg';
import bari from '@/img/cat-icons/bari.svg';
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSearchParams } from 'next/navigation'

const GetuserData = async () => {
    const res = await fetch('http://localhost:4000/category');
    if (res.ok) {
        return res.json();
    } else {
        console.log('not ok');
    }
};

// Map icon names to imported SVG components for cleaner usage
const iconMap = {
    'duar_gurutto': dua_gurutto,
    'dua_kobuler_somoy': dua_kobuler_somoy,
    'jader_dua_kobul_hoy': jader_dua_kobul_hoy,
    'kokhon_ki_bolte_hoy': kokhon_ki_bolte_hoy,
    'zikirer_fozilot': zikirer_fozilot,
    'sokal_sondha': sokal_sondha,
    'ghum': ghum,
    'poshak': poshak,
    'bari': bari
};

const Categories = ({ }) => {
    const [category, setCategory] = useState([]);
    const [subCategory, setSubCategory] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await GetuserData();
            setCategory(data);
        };
        fetchData();
    }, []);
    const Parameater = useSearchParams()


    const activeCat = Parameater.get('cat')
    const FetchSubCategory = async () => {
        console.log('fetching for:', activeCat)
        const response = await fetch(`http://localhost:4000/subcategory?cat=${activeCat}`)
        const subcategoryData = await response.json();
        setSubCategory(subcategoryData)
    }
    console.log(subCategory)
    useEffect(() => {
        FetchSubCategory();
    }, [activeCat]);
    const updateCategory = (newCatValue) => {
        setSearchParams({ cat: newCatValue });
    };

    return (
        <div className="p-4">
            <span className="text-2xl">Duas Page</span>
            <div className="relative bg-white mt-4 lg:h-[calc(86vh)] rounded-md">
                <div className="absolute top-0 left-0 right-0 bg-green-600 text-white w-full rounded-t-md rounded-e-md py-4 text-center">
                    <span>Categories</span>
                </div>
                <div className="absolute w-90 w-full px-4 top-16">
                    <div className="border-2 rounded h-14 flex items-center justify-center mt-3 focus-within:border-green-500">
                        <span className="text-2xl text-gray-500 pr-3"><IoIosSearch /></span>
                        <input type="text" placeholder="Search Categories" className="h-full w-10/12 float-end border-none outline-none" />
                    </div>
                </div>
                <div className="absolute w-full px-4 top-36 overflow-y-scroll h-full">
                    {category && category.length !== 0 && category.map((ele) => (
                        <div key={ele.cat_id}>
                            <Link href={`http://localhost:3000/?cat=${ele.cat_id}`} onClick={() => FetchSubCategory()}>
                                <div className="hover:bg-gray-200 rounded-lg px-4 py-3 my-2 cursor-pointer flex" >
                                    <div className="bg-gray-200 rounded p-1 box-border">
                                        {/* Use the icon based on the iconMap */}
                                        <Image
                                            src={iconMap[ele.cat_icon] || dua_gurutto} // Use iconMap for dynamic image selection
                                            alt="dua icon"
                                            width={30}
                                            height={30}
                                        />
                                    </div>
                                    <div className="pl-3">
                                        <span className="text-black block">{ele.cat_name_en}</span>
                                        <span className="text-gray-500 block text-xs">Subcategory :{ele.no_of_subcat}</span>
                                    </div>
                                </div>
                            </Link>
                            {
                                activeCat == ele.cat_id &&
                                <div className="border-dotted border-green-600 border-l-2 pl-4">
                                    <ul>
                                        {
                                            subCategory.map((ele, index) => {
                                                return (
                                                    <li key={index} className="text-sm font-semibold py-3 cursor-pointer relative">
                                                        <div className="h-2 w-2 rounded-full bg-green-600 absolute -ml-[21px] z-10"></div>
                                                        {ele.subcat_name_en}</li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>

                            }
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Categories;

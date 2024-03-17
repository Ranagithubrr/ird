"use client"

import Image from "next/image";
import { IoIosSearch } from "react-icons/io";
import { FaAngleRight } from "react-icons/fa6";
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
import { useSearchParams } from 'next/navigation';
import { useRouter } from "next/navigation";

const GetuserData = async () => {
    const res = await fetch('https://ird-task-backend.onrender.com/category');
    if (res.ok) {
        return res.json();
    } else {
        console.log('not ok');
    }
};

// setting icon
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

const Categories = ({ setActiveSubCategoryTitle }) => {
    const [category, setCategory] = useState([]);
    const [subCategory, setSubCategory] = useState([]);
    const [duaData, setDuaData] = useState([]);
    const router = useRouter();
    const [filteredCategories, setFilteredCategories] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const Parameater = useSearchParams()
    let activeCat = Parameater.get('cat');
    let activesubCat = Parameater.get('subcat');


    const handleInputChange = (inputValue) => {        
        activeCat = 2;
        setInputValue(inputValue);
        const filteredCategories = category.filter((cat) =>
            cat.cat_name_en.toLowerCase().includes(inputValue.toLowerCase())
        );
        setFilteredCategories(filteredCategories);
    }

    useEffect(() => {
        const fetchData = async () => {
            // setLoading(true);
            const data = await GetuserData();
            setCategory(data);
            setFilteredCategories(data)
        };
        fetchData();
    }, []);


    const FetchSubCategory = async () => {
        // setLoading(true)
        const response = await fetch(`https://ird-task-backend.onrender.com/subcategory?cat=${activeCat}`);
        const subcategoryData = await response.json();
        setSubCategory(subcategoryData);
        // fetching dua's
        const responsedua = await fetch(`https://ird-task-backend.onrender.com/dua-filter?cat=${activeCat}&scat=${activesubCat}`);
        const duaresdata = await responsedua.json();
        setDuaData(duaresdata);
        // setLoading(false)
    }
    useEffect(() => {
        FetchSubCategory();
        // eslint-disable-next-line
    }, [activeCat, activesubCat]);
    console.log('duas is', duaData);


    return (
        <div className="p-4">
            <span className="text-2xl">Duas Page</span>
            <div className="relative bg-white mt-4 lg:h-[calc(86vh)] rounded-md overflow-hidden">
                <div className="absolute top-0 left-0 right-0 bg-green-600 text-white w-full rounded-t-md rounded-e-md py-4 text-center">
                    <span>Categories</span>
                </div>
                <div className="absolute w-90 w-full px-4 top-16">
                    <div className="border-2 rounded h-14 flex items-center justify-center mt-3 focus-within:border-green-500">
                        <span className="text-2xl text-gray-500 pr-3"><IoIosSearch /></span>
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => handleInputChange(e.target.value)}
                            placeholder="Search Categories"
                            className="h-full w-10/12 float-end border-none outline-none"
                        />
                    </div>
                </div>
                <div className="absolute w-full px-4 top-36 overflow-y-scroll" style={{ height: '70%' }}>
                    {filteredCategories && filteredCategories.length !== 0 && filteredCategories.map((ele) => (
                        <div key={ele.dua_id}>
                            <Link href={`https://ird-task-backend.onrender.com/?cat=${ele.cat_id}`} onClick={() => FetchSubCategory()}>
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
                                <div className=" pl-4">
                                    <ul className="ml-4 border-dotted border-green-600 border-l-2 pl-4">
                                        {
                                            subCategory.map((eletwo, index) => {
                                                return (<>
                                                    <Link key={eletwo.dua_id} href={`?cat=${ele.cat_id}&subcat=${eletwo.subcat_id}`} onClick={() => setActiveSubCategoryTitle(eletwo.subcat_name_en)}>
                                                        <li className="text-sm font-semibold py-3 cursor-pointer relative">
                                                            <div className="h-2 w-2 rounded-full bg-green-600 absolute -ml-[21px] z-10"></div>
                                                            {eletwo.subcat_name_en}</li>
                                                    </Link>
                                                    {
                                                        activeCat == ele.cat_id && activesubCat == eletwo.subcat_id &&

                                                        <ul className="pl-4">
                                                            {
                                                                duaData && duaData.length !== 0 && duaData.map((dua) => {
                                                                    return (
                                                                        <li key={dua.dua_is + dua.subcat_id + dua.cat_id} className="text-sm font-semibold py-3 cursor-pointer relative">
                                                                            <Link href={`#${dua.dua_id}`} spy={true} smooth={true} duration={1000} onClick={() => setActiveSubCategoryTitle(eletwo.subcat_name_en)}>
                                                                                <div className="text-xs flex items-center">
                                                                                    <span className="text-green-500 pr-2"><FaAngleRight /></span> {dua.dua_name_en}
                                                                                </div>
                                                                            </Link>
                                                                        </li>
                                                                    )
                                                                })
                                                            }
                                                        </ul >
                                                    }
                                                </>
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
        </div >
    );
};

export default Categories;

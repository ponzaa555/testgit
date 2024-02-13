import React, { useState } from 'react'
import Logo from "@/src/assets/Logo.png" 
import Linke from './Linke'
import { SelectedPage } from '@/src/share/Type'
import Link from 'next/link'
import LinkButton from '@/src/share/LinkButton'
import queryscreen from '@/src/hook/queryscreen'
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"

type Props = {
    isOntopofpages:boolean
    selectedPage: SelectedPage;
    setSelectedPage: (value:SelectedPage) => void;
}

const Navbar = ({isOntopofpages,selectedPage,setSelectedPage}:Props) =>{
    const isAboveMediumScreens  = queryscreen("(min-width: 1060px)")
    const [toggle,setToggle] = useState<boolean>(false)
    console.log("toggle:",toggle)
    console.log("isabovesreen",isAboveMediumScreens)
    return(
        <nav >
            <div className={`${isOntopofpages ? "":"bg-primary-100 shadow-lg"} py-8  flex  items-center  justify-between w-full fixed top-0 z-30`}>
            <div className=' flex items-center justify-between mx-auto w-5/6 '>
                <div className=' flex items-center justify-between gap-16 w-full '>
                    <img alt='Logo' src={Logo.src} className='h-[24px]'/>
                    {isAboveMediumScreens ? (
                        <div className=' flex items-center justify-between w-full   '>
                        <div className=' flex items-center justify-between gap-8 text-sm '>
                            <Linke page='Home'selectedPage={selectedPage} setselectedPage={setSelectedPage} ></Linke>
                            <Linke page='Benefits'selectedPage={selectedPage} setselectedPage={setSelectedPage} ></Linke>
                            <Linke page='OurClasses'selectedPage={selectedPage} setselectedPage={setSelectedPage}></Linke>
                            <Linke page='Contractus'selectedPage={selectedPage} setselectedPage={setSelectedPage} ></Linke>
                        </div>
                        <div>
                        </div>
                        <div className=' flex items-center justify-between gap-8'>
                            <a>
                                Sign In
                            </a>
                           <LinkButton Word='Become a Member' Selectedpage={selectedPage} setSelectedpage={setSelectedPage}></LinkButton>
                        </div>
                    </div>) : ( 
                        <button 
                            className=' bg-secondary-500 rounded-full py-2 px-2 '
                            onClick={() => (setToggle(!toggle),console.log(toggle))}>
                            <Bars3Icon className=' h-7 text-white '/>
                        </button>
                    )
                    }
                    </div>
                </div>
            </div>
            {toggle && !isAboveMediumScreens ? (
                <div className=' h-full w-[300px] bg-primary-100 fixed right-0 z-40  py-6 drop-shadow-xl'>
                    <div className='flex justify-end p-12'>
                        <button onClick={() => setToggle(!toggle)}>
                            <XMarkIcon className=' h-6 w-6 text-gray-400'/>
                        </button>
                    </div>
                    <div className=' flex flex-col ml-[33%] gap-10 text-2xl font-sans '>
                    <Linke page='Home'selectedPage={selectedPage} setselectedPage={setSelectedPage} ></Linke>
                    <Linke page='Benefits'selectedPage={selectedPage} setselectedPage={setSelectedPage} ></Linke>
                    <Link href='#ourclasses' onClick={() => setSelectedPage(SelectedPage.OurClasses)} className={`${selectedPage === SelectedPage.OurClasses ? "text-primary-500" : ""} hover:text-primary-300 transition duration-300`}>Our Classes</Link>
                    <Link href='#contactus' onClick={() => setSelectedPage(SelectedPage.ContractUs)} className={`${selectedPage === SelectedPage.ContractUs ? " text-primary-500": ""} hover:text-primary-300 transition duration-300`}>Contact Us</Link>
                    </div>
                </div>
            ):("")}
        </nav>
    )
}

export default Navbar;
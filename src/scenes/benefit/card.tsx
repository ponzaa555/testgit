import { SelectedPage } from '@/src/share/Type';
import Link from 'next/link';
import React from 'react'

type Props = {
    icon: JSX.Element;
    header:string;
    paragraph:string;
    setSelectedpage:(valu:SelectedPage) => void;
}
const  Card =({icon,header,paragraph,setSelectedpage}:Props) => {
  return (
    <div className=' border-2 border-gray-100 rounded-md  '>
        <div className=' text-center py-16 space-y-5 px-3 '>
            {/* ICON */}
            <div className=' flex justify-center'>
                <div className=' bg-primary-100 rounded-full p-4 border-2 border-gray-100'>
                    {icon}
                </div>
            </div>
            <div>
                <h1 className=' font-bold text-sm'>{header}</h1>
            </div>
            <div>
                <p>{paragraph}</p>
            </div>
            <div>
                <Link href="#contractus" 
                className=' text-primary-500 text-xs underline font-montserrat hover:text-secondary-500'
                onClick={() => setSelectedpage(SelectedPage.ContractUs)}>Learn More</Link>
            </div>
        </div>
    </div>
  )
}

export default Card
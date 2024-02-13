import React from 'react'
import { SelectedPage } from './Type';
import Link from 'next/link';
 
type Props ={
    Word:string;
    Selectedpage:SelectedPage;
    setSelectedpage:(value:SelectedPage) => void
}
const LinkButton = ({Word,Selectedpage,setSelectedpage}:Props) =>  {
  return (
    <div>
        <Link href={`#${SelectedPage.ContractUs}`}
            className='bg-secondary-500 rounded-xl py-2 px-10 hover:text-white hover:bg-primary-500 transition duration-300'
            onClick={() => setSelectedpage(SelectedPage.ContractUs) }>
                {Word}
        </Link>
    </div>
  )
}

export default LinkButton
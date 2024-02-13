import  { SelectedPage} from '@/src/share/Type';
import Link from 'next/link'
import React from 'react'
type Props ={
    page:string;
    selectedPage:SelectedPage;
    setselectedPage:(value:SelectedPage) => void;
}


function Linke({page,selectedPage,setselectedPage}:Props) {
    const lowercast = page.toLowerCase() as SelectedPage
    // const {selectedpage,setSelectedpage} = useSelected()

    
  return (
    <Link href={`#${lowercast}`} className={`${ selectedPage === lowercast ? "text-primary-500" : "" } hover:text-primary-300 transition duration-500`}  
    onClick={() => setselectedPage(lowercast) } >
      {page}
    </Link>
  )
}

export default Linke
// รวมไปกับหน้า link ได้จะได้ไม่ ต้องยุ่งยากตอนส่งข้อมูล
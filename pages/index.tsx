import Image from 'next/image'
import { Inter } from 'next/font/google'
import Home from "#/scenes/home"
import Navbar from '@/src/scenes/navbar'
import Benefit from "@/src/scenes/benefit"
import Contractus from "@/src/scenes/Contractus"
import OurClasses from "@/src/scenes/ourclasses"
import { useEffect, useState } from 'react'
import { SelectedPage} from '@/src/share/Type'



export default function App() {
  const [selectedpage,setSelectedpage] = useState<SelectedPage>(
    SelectedPage.Home
  )
  const [isOntopofpages,setIsontopofpages] = useState<boolean>(true)
  useEffect(() => {
    const handlescroll = () =>{
      if(window.scrollY === 0){
        setIsontopofpages(true)
        setSelectedpage(SelectedPage.Home)
      }
      if(window.scrollY > 0){
        setIsontopofpages(false)
      }
      console.log("scrollY",scrollY)
      console.log("isopen",isOntopofpages)
    }
    window.addEventListener('scroll',handlescroll)
    return () => window.removeEventListener('scroll',handlescroll)
  },[])
  return (
   <div className='bg-white '>
    {/* <Selected.Provider value={{selectedpage,setSelectedpage}}> */}
      <Navbar selectedPage={selectedpage} setSelectedPage={setSelectedpage} isOntopofpages={isOntopofpages}/>
      <Home selectedpage={selectedpage} setSelectedpage={setSelectedpage}/>
      <Benefit selectedpage={selectedpage} setSelectedpage={setSelectedpage} />
      <OurClasses/>
      {/* <Contractus/> */}
    {/* </Selected.Provider> */}
   </div>
  )
  
}



import Evovle from "@/src/assets/EvolveText.png"
import Graphic from "@/src/assets/HomePageGraphic.png"
import EvovleText from "@/src/assets/HomePageText.png"
import { SelectedPage } from '@/src/share/Type'
import queryscreen from '@/src/hook/queryscreen'
import Forbes from '@/src/assets/SponsorForbes.png'
import Fortune from '@/src/assets/SponsorFortune.png'
import Redbull from "@/src/assets/SponsorRedBull.png"
type Props = {
  selectedpage:SelectedPage
  setSelectedpage:(value:SelectedPage) => void // ส่งเป็น function
}

function Home({selectedpage,setSelectedpage}: Props) {
  const isAboveMediumScreens = queryscreen("(min-width: 1060px)")
  return (
  <section id='home' className=' bg-gray-20 py-10 gap-16 md:pb-0 md:h-full'>
      {/* IMAGE AND MAIN HEADER */}
    <div className='mx-auto w-5/6 items-center justify-center md:flex md:h-5/6'>
      <div className='z-10 mt-32 md:basis-3/5'>
        <div className=" md:-mt-20">
          <div className=' relative'>
            <img src={EvovleText.src}/>
            <div className=' absolute -top-20 z-[-1] -left-20 '>
              <img src={Evovle.src}/>
            </div>
          </div>
          <p className=' mt-8 text-sm '>
            Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
            Studios to get the Body Shapes That you Dream of.. Get Your Dream
            Body Now.
          </p>
        </div>
         {/* join now , learn more */}
         <div className=' flex items-center mt-8 gap-8 '>
            <a href='#contractus'>
              <button className=' bg-secondary-500 rounded-lg px-10 py-2 hover:bg-primary-500 hover:text-white'
                onClick={() =>  setSelectedpage(SelectedPage.ContractUs)}>
                Join Now
              </button>
            </a>
            <a href='#ourclasses' className='flex  items-center'>
              <button className='underline text-primary-500 font-bold text-s  hover:text-secondary-400'
                onClick={() => setSelectedpage(SelectedPage.OurClasses)}>
                Learn More
              </button>
            </a>
          </div>
      </div>
      {/* GraphicPhoto*/}
      <div className=' flex justify-center basis-3/5 md:z-10 md:ml-40 md:mt-16 md:justify-end '>
        <img src={Graphic.src}/>
      </div>
    </div>

    {/* Sponser */}
    <div className=' bg-primary-100 h-[150px] w-full py-10'>
      <div className=' mx-auto w-5/6 '>
        <div className='flex w-3/5  items-center justify-between gap-8'>
          <img src={Redbull.src}/>
          <img src={Forbes.src}/>
          <img src={Fortune.src}/>
        </div>
      </div>
    </div>
  </section>
    
  )
}

export default Home
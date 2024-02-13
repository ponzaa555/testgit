import { SelectedPage } from '@/src/share/Type'
import React from 'react'
import {CardOurclasses} from '@/src/share/Type'
import image1 from '@/src/assets/image1.png'
import image2 from '@/src/assets/image2.png'
import image3 from '@/src/assets/image3.png'
import image4 from '@/src/assets/image4.png'
import image5 from '@/src/assets/image5.png'
import image6 from '@/src/assets/image6.png'
type Props ={
  selectedpage:SelectedPage
  setSelectedpage:(value:SelectedPage) => void
}

const Carddata:Array<CardOurclasses> = [
  {
    imgsrc:image1.src,
    Header:"Weight Training Classes",
    paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    imgsrc:image2.src,
    Header:"Yoga Classes"
  },
  {
    imgsrc:image3.src,
    Header:"Ab Core Classes",
    paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    imgsrc:image4.src,
    Header:"Adventure Classes",
    paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    imgsrc:image5.src,
    Header:"Fitness Classes",
  },
  {
    imgsrc:image6.src,
    Header:"Training Classes",
  }
]



const index = () => {
  const overlayStyles = `p-5 absolute z-30 flex
  h-[380px] w-[450px] flex-col items-center justify-center
  whitespace-normal bg-primary-500 text-center text-white
  opacity-0 transition duration-500 hover:opacity-90`;
  return (
    <div className=' bg-primary-100 py-40' id='ourclasses' >
      <div className='  w-5/6 m-auto  '>
        {/* HEADER */}
        <div className=' text-3xl font-montserrat'>
          <h1>OUR CLASSES</h1>
        </div>
        {/* PARAGRAPH */}
        <div className='mt-5  w-3/5'>
          <p>
            Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est tellus quam porttitor.
             Mauris velit euismod elementum arcu neque facilisi. 
             Amet semper tortor facilisis metus nibh. Rhoncus sit enim mattis odio in risus nunc.
          </p>
        </div>
      </div>
      {/* Map content  add หมุนซ้ายขวา*/}
      <div className='mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden '>
        <div className='whitespace-nowrap'>
          {Carddata.map((Data:CardOurclasses) => (
            <div className=' relative mx-5 inline-block h-[380px] w-[450px]'>
              <div className={overlayStyles}>
                <p className=' text-2xl'>{Data.Header}</p>
                <p className='mt-5'>{Data.paragraph}</p>
              </div>
              <img src={Data.imgsrc} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default index
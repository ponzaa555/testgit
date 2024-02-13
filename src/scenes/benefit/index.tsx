import React from 'react'
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import Card from "@/src/scenes/benefit/card"
import Benefits from "@/src/assets/BenefitsPageGraphic.png"
import Wave from "@/src/assets/AbstractWaves.png"
import Sparkle from "@/src/assets/Sparkles.png"
import { SelectedPage } from '@/src/share/Type';
import LinkButton from '@/src/share/LinkButton';

type Props = {
  selectedpage:SelectedPage;
  setSelectedpage:(value:SelectedPage) => void
}
type Benefit ={
  icon:JSX.Element;
  header:string;
  paragraph:string;
}
const datacard:Array<Benefit> = [
  {
    icon:<HomeModernIcon className=' w-6 h-6'/>,
    header:"State of the Art Facilities",
    paragraph:"Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et."
  },
  {
    icon:<UserGroupIcon className=' w-6 h-6'/>,
    header:"100's of Diverse Classes",
    paragraph:"Eu ipsum id egestas risus tempus enim semper felis quis. Nec consectetur ac venenatis facilisi est. Eget ac turpis id.",
  },
  {
    icon:<AcademicCapIcon className=' w-6 h-6'/>,
    header:"Expert and Pro Trainers",
    paragraph:"Fusce vestibulum aliquam ut cras. Nisl lectus egestas sapien nisl. Lacus at mi sit pellentesque. Congue parturient.",
  },
]
function index({selectedpage,setSelectedpage}: Props) {
  return (
    <section id='benefits' className=' bg-white mx-auto min-h-full w-5/6'>
      <div className=' py-20 mx-auto space-y-7'>
        <div>
          <h1 className=' font-bold text-3xl font-montserrat'>MORE THAN JUST GYM.</h1>
        </div>
        <div className=' w-3/5'>
          <p> We provide world class fitness equipment, trainers and classes to get you to your ultimate fitness goals with ease. We provide true care into each and every member.</p>
        </div>
        <div className=' md:flex gap-8 space-y-2'>
          {datacard.map((benefit:Benefit) => (
            <Card icon={benefit.icon} header={benefit.header} paragraph={benefit.paragraph} setSelectedpage={setSelectedpage}/>
          ))}
        </div>
      </div>
      <div className='   md:flex  gap-20  items-center justify-between '>
        <img src={Benefits.src} className=' mx-auto'/>
        <div className=' items-center '>
          <div className=' w-full space-y-4'>
            <div className=' relative'>
              <img src={Wave.src} className=' absolute -top-20  z-[1] -left-20'/>
              <div className=''>
                <h1 className=' text-3xl font-bold font-montserrat'>
                  MILLIONS OF HAPPY MEMBERS GETTING{" "}
                  <span className=' text-primary-500'>FIT</span>
                </h1>
              </div>
            </div>
            <div>
              <p>
              Nascetur aenean massa auctor tincidunt. Iaculis potenti amet egestas ultrices 
              consectetur adipiscing ultricies enim. Pulvinar fames vitae vitae quis. 
              Quis amet vulputate tincidunt at in nulla nec. Consequat sed facilisis dui sit egestas ultrices tellus. 
              Ullamcorper arcu id pretium sapien proin integer nisl. Felis orci diam odio.
              </p>
            </div>
            <div>
              <p>Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est tellus quam porttitor. Mauris velit euismod elementum arcu neque facilisi. 
                Amet semper tortor facilisis metus nibh. Rhoncus sit enim mattis odio in risus nunc.</p>
            </div>
            <div className=' relative'>
              <img src={Sparkle.src} className=' absolute right-24'/>
              <LinkButton Word='Join Now' setSelectedpage={setSelectedpage} Selectedpage={selectedpage}></LinkButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  ) 
}

export default index
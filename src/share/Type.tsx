// import { createContext, useContext, useState } from "react";

// export type Gobaltype = {
//     selectedpage:string;
//     setSelectedpage:(selected:string) => void; 
// }

// export const  Selected = createContext<Gobaltype>({
//     selectedpage: "home",
//     setSelectedpage: () => {},
// })

// export const useSelected = () => useContext(Selected)

export enum SelectedPage {
    Home = "home",
    Benefits = "benefits",
    OurClasses = "ourclasses",
    ContractUs = "contractus"
}

export type CardOurclasses ={
    imgsrc: string
    Header: string
    paragraph?:string
}
import React, { useEffect, useState } from 'react'

const queryscreen = (query: string) => {
    const [matchs,setMatchs] = useState<boolean>(false)
    useEffect(() => {
        const media = window.matchMedia(query);
        console.log(media)
        if(media.matches !== matchs){
            setMatchs(media.matches);
        }
        const listener = () => setMatchs(media.matches)
        window.addEventListener("resize",listener);
        return () => window.removeEventListener("resize",listener)
    },[matchs,query]);

  return matchs;

}

export default queryscreen
'use client'

import React,{useState} from "react";

import LanContext from "./lanContext";

const LanContextProvider = ({children}) => {
    const [language, setLanguage] = useState("jap");

    const toggleLanguage = () => {
        setLanguage((prevLanguage) =>
          prevLanguage === "EN" ? "jap" : "EN"
        );
      };


    return(
        <LanContext.Provider value={{language, toggleLanguage}}>
            {children}
        </LanContext.Provider>
    )
}

export default LanContextProvider

import styles from "./MakePhoneDisplay.module.css"
import './display.css'

import { useState, useEffect } from 'react'
import { useLocation } from "react-router-dom";


import AppHeader from './sections/AppHeader'
import AppMain from './sections/AppMain'
import AppNav from './sections/AppNav'


function MakePhoneDisplay(){
    let location = useLocation();

    let url = decodeURI(location.pathname);
    const words = url.split('/');
    // const [descriptionNum , setDescriptionNum] = useState('0');
    const descriptionNum = words[5];
    
    // console.log(descriptionNum);

    // useEffect(()=>{
    //   setDescriptionNum(words[5]);
    // },[]);
    

    return (
    <div className={styles.MakePhoneDisplay}>
      <AppHeader />
      <AppMain pathname={descriptionNum}/>
      <AppNav/>
    </div>

  )
}

export default MakePhoneDisplay;
import BasicMain from '../Basic/BasicMain'
import CallAppMain from '../Basic/CallAppMain'
import '../display.css'
import styles from'./AppMain.module.css'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';


function ChoiceMainComponent({pathname}){
  if (pathname == 0) {
    return <BasicMain/>;
  } else if (pathname == 1) {
    return <CallAppMain/>;
  }
  return BasicMain;
}

function AppMain(){
  let location = useLocation();
  let url = decodeURI(location.pathname);
  const words = url.split('/');
  
  const functionName = words[2];
  const descriptionName = words[3];
  
  return (
    <div className={styles.AppMain}>
      <ChoiceMainComponent pathname={descriptionName}/>
    </div>
  )
}

export default AppMain;
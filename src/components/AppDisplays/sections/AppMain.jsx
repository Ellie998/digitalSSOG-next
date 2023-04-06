import BasicMain from '../Basic/BasicMain'
import CallAppMain from '../Basic/CallAppMain'
import KakaoMain from '../Kakaotalk/KakaoMain'
import KakaoAppMain from '../Kakaotalk/KakaoAppMain'
import '../display.css'
import styles from'./AppMain.module.css'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import CallSuccess from '../Basic/CallSuccess'


function ChoiceMainComponent({pathname}){
  if (pathname == 0) {
    return <BasicMain/>;
  } else if (pathname == 1) {
    return <CallAppMain/>;
  } else if (pathname == 2) {
    return <CallSuccess/>;
  } else if (pathname == 3) {
    return <KakaoMain/>;
  } else if (pathname == 4) {
    return <KakaoAppMain/>;
  } else if (pathname == 5) {
    return <CallSuccess/>;
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
    <div >
      <ChoiceMainComponent pathname={descriptionName}/>
    </div>
  )
}

export default AppMain;
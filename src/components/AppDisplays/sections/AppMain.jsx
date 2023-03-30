import BasicMain from '../Basic/BasicMain'
import CallAppMain from '../Basic/CallAppMain'
import '../display.css'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';


function AppMain(){
  
  let location = useLocation();
  let url = decodeURI(location.pathname);
  const words = url.split('/');
  
  const functionName = words[2];
  const descriptionName = words[3];
  
  const [currentURL, setURL] = useState(<></>);
  
  useEffect(()=>{
    switch(descriptionName){
      case 0:
        console.log(descriptionName)
        setURL(<BasicMain/>)        
      case 1:
        console.log(descriptionName)

        setURL(<CallAppMain />)
      }
  },[]);


  return (
    <>
      {
        currentURL
      }
    </>
  )
}

export default AppMain;
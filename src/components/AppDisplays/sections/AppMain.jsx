import BasicMain from '../Basic/BasicMain'
import CallAppMain from '../Basic/CallAppMain'
import KakaoMain from '../Kakaotalk/KakaoMain'
import KakaoAppMain from '../Kakaotalk/KakaoAppMain'
import '../display.css'

import { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import CallSuccess from '../Basic/CallSuccess'


function ChoiceMainComponent({pathname}){
  if (pathname === 0) {
    return <BasicMain/>;
  } else if (pathname === 1) {
    return <CallAppMain/>;
  } else if (pathname === 2) {
    return <CallSuccess/>;
  } else if (pathname === 3) {
    return <KakaoMain/>;
  } else if (pathname === 4) {
    return <KakaoAppMain/>;
  } else if (pathname === 5) {
    return <CallSuccess/>;
  }
  return BasicMain;
}

function AppMain(){
  let location = useLocation();
  // const [locationURL, changeURL] = useState(0);
  // let url = decodeURI(location.pathname);
  // const words = url.split('/');
  
  let descriptionName;

  useEffect(()=>{
    // changeURL(words[5]);
    let url = decodeURI(location.pathname);
    const words = url.split('/');
    descriptionName = words[5];
    // console.log(descriptionName)
  },[location]);


  
  return (
    <div >
      <ChoiceMainComponent pathname={descriptionName}/>
    </div>
  )
}

export default AppMain;
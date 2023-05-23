// import BasicMain from '../Basic/BasicMain'
// import CallAppMain from '../Basic/CallAppMain'
// import KakaoMain from '../Kakaotalk/KakaoMain'
// import KakaoAppMain from '../Kakaotalk/KakaoAppMain'
// import '../display.css'

// import { useEffect } from 'react'
// import { useLocation } from 'react-router-dom';
// import CallSuccess from '../Basic/CallSuccess'


// function ChoiceMainComponent({pathname}){
//   if (pathname === 0) {
//     return <BasicMain/>;
//   } else if (pathname === 1) {
//     return <CallAppMain/>;
//   } else if (pathname === 2) {
//     return <CallSuccess/>;
//   } else if (pathname === 3) {
//     return <KakaoMain/>;
//   } else if (pathname === 4) {
//     return <KakaoAppMain/>;
//   } else if (pathname === 5) {
//     return <CallSuccess/>;
//   }
//   return BasicMain;
// }

// function AppMain(){
//   let location = useLocation();
//   // const [locationURL, changeURL] = useState(0);
//   // let url = decodeURI(location.pathname);
//   // const words = url.split('/');
  
//   // let functionName;
//   let descriptionName;

//   useEffect(()=>{
//     // changeURL(words[5]);
//     let url = decodeURI(location.pathname);
//     const words = url.split('/');
//     // functionName = words[4];
//     descriptionName = words[5];
//     // console.log(descriptionName)
//   },[location]);


  
//   return (
//     <div >
//       <ChoiceMainComponent pathname={descriptionName}/>
//     </div>
//   )
// }

// export default AppMain;

import BasicMain from '../Basic/BasicMain'
import CallAppMain from '../Basic/CallAppMain'
import KakaoMain from '../Kakaotalk/KakaoMain'
import KakaoAppMain from '../Kakaotalk/KakaoAppMain'
import '../display.css'

import CallSuccess from '../Basic/CallSuccess'

import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect, Routes } from 'react-router-dom';


function AppMain(props){
  // console.log(props.pathname)
  // const [pathNum, setPathNum] = useState('0');


  //   useEffect(()=>{
  //     setPathNum(props.pathname);
  //   },[]);
    

    return (
      <Routes>
        
          <Route exact path="/0" component={BasicMain} />
          <Route path="/1" component={CallAppMain} />
          <Route path="/2" component={CallSuccess} />
          <Route path="/3" component={KakaoMain} />
          <Route path="/4" component={KakaoAppMain} />
          <Route path="/5" component={CallSuccess} />
        
      </Routes>
    )

  // if (pathNum === 0) {
  //   return <BasicMain/>;
  // } else if (pathNum === 1) {
  //   return <CallAppMain/>;
  // } else if (pathNum === 2) {
  //   return <CallSuccess/>;
  // } else if (pathNum === 3) {
  //   return <KakaoMain/>;
  // } else if (pathNum === 4) {
  //   return <KakaoAppMain/>;
  // } else if (pathNum === 5) {
  //   return <CallSuccess/>;
  // } else {

  //   return (
  //       <BasicMain/>
  //   )


  }


export default AppMain;
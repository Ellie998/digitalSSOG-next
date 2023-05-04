import styles from "./FunctionDetailIntro.module.css"
import { Link } from "react-router-dom";

// function FunctionDetailIntroInApp({functionName,appName,charateristic,appNames}){
function FunctionDetailIntroInApp({functionName,appName,charateristic,appNames}){
  return(
      <section className={styles.FunctionDetailIntro} >
        <h1>{appName} 어플 <br/>📞 {functionName} 기능 소개</h1>
        <ul>
          <li className={styles.listStyling}>
            <h2> 기능 특징</h2>
            <p>{charateristic}</p>
          </li>
          <li className={styles.listStyling}>
            <h2>기능을 제공하는 어플</h2>
            <ul>
              {
                appNames?.map((appName)=>(
                  <li key={appName}><Link to={'/description/app/'+ appName +'/' + functionName }>{appName}</Link></li>
                ))
              }
            </ul>
          </li>
        </ul>
      </section>    
  )
}

export default FunctionDetailIntroInApp;



// import styles from "./FunctionDetailIntro.module.css"
// import { Link } from "react-router-dom";

// import { functionDataURL } from '../../data';
// import { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";

// // function FunctionDetailIntroInApp({functionName,appName,charateristic,appNames}){
// function FunctionDetailIntroInApp(){
//   let location = useLocation();
//   let url = decodeURI(location.pathname);
//   const words = url.split("/");

//   const appName = words[4];
//   const functionName = words[5];
//   // const descriptionName = words[5];

//   const [detailFunctionObject, setData] = useState([]);

//   const fetchData = () => {
//     fetch(functionDataURL)
//       .then((response) => {
//         return response.json();
//       })
//       .then((data) => {
//         data.map((categoryObject) =>
//           categoryObject.objects.map((ObjectInArray) => {
//             if (ObjectInArray.name === functionName) {
//                   setData(ObjectInArray);                
//             }
//           })
//         );
//       });
//   };
//   useEffect(() => {
//     fetchData();
//   }, []);


//   return(
//       <section className={styles.FunctionDetailIntro} >
//         <h1>{appName} 어플 <br/>📞 {functionName} 기능 소개</h1>
//         <ul>
//           <li className={styles.listStyling}>
//             <h2> 기능 특징</h2>
//             <p>{detailFunctionObject.charateristic}</p>
//           </li>
//           <li className={styles.listStyling}>
//             <h2>기능을 제공하는 어플</h2>
//             <ul>
//               {
//                 detailFunctionObject.app?.map((appObjectName)=>(
//                   <li key={appObjectName}><Link to={'/description/app/'+ appObjectName +'/' + functionName }>{appObjectName}</Link></li>
//                 ))
//               }
//             </ul>
//           </li>
//         </ul>
//       </section>    
//   )
// }

// export default FunctionDetailIntroInApp;
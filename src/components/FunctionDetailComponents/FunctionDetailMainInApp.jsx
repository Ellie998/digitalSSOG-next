import styles from "./FunctionDetailMain.module.css"

import MakeMethodListByApp from './MakeMethodListByApp';
import { Outlet} from "react-router-dom";



function FunctionDetailMainInApp ({functionName,appName, appMethods}){
  return(
    <section className={styles.FunctionDetailMain}>
        <div>
          <h2>{functionName} 기능 사용 방법 정리</h2>
          <MakeMethodListByApp functionMethodObject={appMethods} functionName={functionName} appName={appName}/>

          {/* <MakeMethodListByCategory name={name} functionMethods={functionMethods}/> */}
          <Outlet />
        </div>
      </section>    
  )
}

export default FunctionDetailMainInApp;

//
// import styles from "./FunctionDetailMain.module.css"

// import MakeMethodListByApp from './MakeMethodListByApp';
// import { Outlet} from "react-router-dom";

// import { functionDataURL } from '../../data';
// import { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";

// function FunctionDetailMainInApp (){
// // function FunctionDetailMainInApp ({functionName,appName, appMethods}){
//   let location = useLocation();
//   let url = decodeURI(location.pathname);
//   const words = url.split("/");

//   const appName = words[3];
//   const functionName = words[4];
//   // const descriptionName = words[5];

//   const [detailMethodObject, setMethodData] = useState([]);

//   const fetchData = () => {
//     fetch(functionDataURL)
//       .then((response) => {
//         return response.json();
//       })
//       .then((data) => {
//         data.map((categoryObject) =>
//           categoryObject.objects.map((ObjectInArray) => {
//             if (ObjectInArray.name === functionName) {
//               ObjectInArray.method?.map((methodObject) => {
//                 if (methodObject.methodAppName === appName) {
//                   setMethodData(methodObject);
//                 }
//               });
//             }
//           })
//         );
//       });
//   };
//   useEffect(() => {
//     fetchData();
//   }, []);

//   return(
//     <section className={styles.FunctionDetailMain}>
//         <div>
//           <h2>{functionName} 기능 사용 방법 정리</h2>
//           <MakeMethodListByApp functionMethodObject={detailMethodObject} name={appName}/>

//           {/* <MakeMethodListByCategory name={name} functionMethods={functionMethods}/> */}
//           <Outlet />
//         </div>
//       </section>    
//   )
// }

// export default FunctionDetailMainInApp;
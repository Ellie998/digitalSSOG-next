import { Link } from 'react-router-dom';
import styles from './MakeListInCategory.module.css'


function MakeListInCategory({listObjects}){
  const functionNames = [
    {
      "name":"전화받기",
      "apps" : ["basic","카카오톡"]
    },
    {
      "name":"전화걸기",
      "apps" : ["basic"]
    }
  ];

  return (
    <ol className={styles.MakeListInCategory}>
      {
        
        functionNames?.map(functionName=> (
          <li>
            <Link to={"/description/" + "basic/" + functionName.name}>{functionName.name}</Link>
            <ul>
              {
                functionName.apps?.map(appName => {
                  return <li>
                    <Link to={"/description/" + appName +"/" + functionName.name}>{appName}</Link>
                    </li>
                })
              }
            </ul>
          </li>
        ))
      }
    </ol>
    // <ol className={styles.MakeListInCategory}>
    //   {
        
    //     listObjects.objects?.map(propObject=> (
    //       <li className='animate-scale-up'>
    //         <Link to={"/description/" + "basic/" +propObject.name}>{propObject.name}</Link>
    //       </li>
    //     ))
    //   }
    // </ol>
  )
}

export default MakeListInCategory;

// appname, function name을 받아와 link에 더하기.
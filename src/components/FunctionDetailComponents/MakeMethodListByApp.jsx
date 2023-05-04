import styles from './MakeMethodListByApp.module.css'
import MakeMethodList from './MakeMethodList'

function MakeMethodListByApp({functionMethodObject, functionName, appName}){

  return(
    <ol className={styles.MakeMethodListByApp}>
      {
        functionMethodObject.howto?.map((functionMethod)=>(
          <li key={Math.random()}>
            <p>방법 {functionMethod.methodNum}</p>
            <MakeMethodList functionMethod={functionMethod} functionName={functionName} appName={appName}/>
          </li>
        ))
      }
    </ol>
  )
}

export default MakeMethodListByApp;
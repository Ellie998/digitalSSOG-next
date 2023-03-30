import styles from './MakeMethodListByApp.module.css'
import MakeMethodList from './MakeMethodList'

function MakeMethodListByApp({functionMethodObject, name}){

  return(
    <ol className={styles.MakeMethodListByApp}>
      {
        functionMethodObject.howto?.map((functionMethod)=>(
          <li key={Math.random()}>
            <p>방법 {functionMethod.methodNum}</p>
            <MakeMethodList functionMethod={functionMethod} name={name}/>
          </li>
        ))
      }
    </ol>
  )
}

export default MakeMethodListByApp;
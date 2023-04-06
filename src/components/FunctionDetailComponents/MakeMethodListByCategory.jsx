import styles from './MakeMethodListByCategory.module.css'
import MakeMethodListByApp from './MakeMethodListByApp';

function MakeMethodListByCategory({name, functionMethods}){
  return (
    <ol className={styles.MakeMethodListByCategory}>
      <p>화면을 보고싶은 목차를 click!</p>
      {
        functionMethods?.map((functionMethodObject) => (
          <li key={Math.random()}>
            <details>
              <summary data-tooltip-left="클릭!">{functionMethodObject.methodAppName}</summary>
              <MakeMethodListByApp functionMethodObject={functionMethodObject} name={name}/>
            </details>
          </li>
        ))
        }      
    </ol>
  )
}

export default MakeMethodListByCategory;
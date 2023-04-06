import MakeListInCategory from './MakeListInCategory';
import styles from './MakeList.module.css'




function MakeList({FunctionOrApp,ListObjects}){
  return (
    <ul className={styles.MakeList}>
    {
      ListObjects?.map(ListObject => (
        <li >
        <details>
          <summary data-tooltip="클릭!">{ListObject.category}</summary>
          <MakeListInCategory FunctionOrApp={FunctionOrApp} prop={ListObject.objects}/>
        </details>
      </li>
      ))
    }
  </ul>
    )
}

export default MakeList;
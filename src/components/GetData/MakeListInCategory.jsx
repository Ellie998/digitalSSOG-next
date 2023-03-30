import { Link } from 'react-router-dom';
import styles from './MakeListInCategory.module.css'

function MakeListInCategory({FunctionOrApp, prop}){
  return (
    <ol className={styles.MakeListInCategory}>
      {
        prop?.map(propObject=> (
          <li className='animate-scale-up'>
            <Link to={"/"+ FunctionOrApp +"/"+propObject.name}>{propObject.name}</Link>
          </li>
        ))
      }
    </ol>
  )
}

export default MakeListInCategory;
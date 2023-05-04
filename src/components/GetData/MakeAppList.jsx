import { Link } from 'react-router-dom';
import styles from './MakeListInCategory.module.css'
import './MakeListInCategory.css'

import { useLocation } from 'react-router';


function MakeAppList({FunctionOrApp, listObjects}){
  const location = useLocation(); //바뀐 부분
  const sch= location.search;
  const params=new URLSearchParams(sch);
  let paramName = FunctionOrApp +"Category";
  const keyword=params.get(paramName);
  
  let selectedCategoryObject;

  listObjects?.map(categoryObject => {
    if(categoryObject.category === keyword){
      selectedCategoryObject = categoryObject;
    } 
    return 0;
  })

  if(keyword === null){
    selectedCategoryObject = listObjects[0];
  }

  return (
    <ol className={styles.MakeListInCategory}>
      {/* <li id="categoryIndex">
        <p>앱 이름</p>
        <ul>
          <li><p>기능을 제공하는 앱</p></li>
        </ul>
      </li> */}
      {
        selectedCategoryObject.objects?.map(functionObject => (
          <li class="functionAndAppList" key={Math.random()}>
            <Link to={"/description/app/"+functionObject.name}>{functionObject.name}</Link>
          </li>
        ))
      }
    </ol>
  )
}

export default MakeAppList;

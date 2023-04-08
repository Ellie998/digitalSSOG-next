import { Link } from 'react-router-dom';
import styles from './MakeListInCategory.module.css'
import './MakeListInCategory.css'

import { useLocation } from 'react-router';


function MakeListInCategory({listObjects}){
  const location = useLocation(); //바뀐 부분
  const sch= location.search;
  const params=new URLSearchParams(sch);
  const keyword=params.get('functionCategory');
  
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
      <li id="categoryIndex">
        <p>기능 이름</p>
        <ul>
          <li><p>기능을 제공하는 앱</p></li>
        </ul>
      </li>
      {
        selectedCategoryObject.objects?.map(functionObject => (
          <li class="functionAndAppList" key={Math.random()}>
            <Link to={"/description/function/"+functionObject.name}><p>{functionObject.name}</p></Link>
            <ul>
            {
              functionObject.app?.map(appName => (
                <li key={Math.random()}>
                  <Link to={"/description/app/"+appName+"/"+functionObject.name}>{appName}</Link>
                </li>
              ))
            }
            </ul>
          </li>
        ))
      }
    </ol>
  )
}

export default MakeListInCategory;

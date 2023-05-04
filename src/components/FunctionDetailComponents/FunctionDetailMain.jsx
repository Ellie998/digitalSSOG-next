import styles from "./FunctionDetailMain.module.css"

import MakeMethodListByCategory from './MakeMethodListByCategory';
import { Outlet} from "react-router-dom";



function FunctionDetailMain({name, functionMethods}){
  
  return(
    <section className={styles.FunctionDetailMain}>
        <div>
          <h2>기능 사용 방법 정리</h2>
          <MakeMethodListByCategory name={name} functionMethods={functionMethods}/>
          <Outlet />
        </div>
      </section>    
  )
}

export default FunctionDetailMain;
import styles from '../sections/AppMain.module.css'
import { NavLink } from 'react-router-dom';

function CallAppMain({onChangeMain}){
  return (
    <section  className={styles.AppMain}>
      <div >

      </div>
      <div>
        <ul >
        </ul>
      </div>
      <div>
        <ul>
        <li><NavLink to="../2"><i className="bi bi-telephone" onClick={onChangeMain}></i></NavLink></li>

        </ul>
      </div>
    </section>
  )
}

export default CallAppMain;
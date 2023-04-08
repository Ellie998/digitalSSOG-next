import styles from "./MakePhoneDisplay.module.css"
import './display.css'

import AppHeader from './sections/AppHeader'
import AppMain from './sections/AppMain'
import AppNav from './sections/AppNav'
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react'


function MakePhoneDisplay(){

  return (
    <div className={styles.MakePhoneDisplay}>
      <AppHeader />
      <AppMain/>
      <AppNav/>
    </div>

  )
}

export default MakePhoneDisplay;
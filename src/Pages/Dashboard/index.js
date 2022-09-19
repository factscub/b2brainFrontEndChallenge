import React from 'react'
import '../../Assets/Styles/Dashboard/index.css';
import Main from '../../Layouts/Main/main';
import SideNav from '../../Layouts/SideNav/sideNav';


export default function Index() {
  return (
    <div id='dashboard'>
      
      <SideNav />
      <Main />
    </div>
  )
}

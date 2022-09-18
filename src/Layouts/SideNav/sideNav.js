import React from 'react'
import Options from '../../Components/SideNav/SideNavOptions/options';
import SideNavHeader from '../../Components/SideNav/SideNavHeader/sideNavHeader';
import '../../Assets/Styles/SideNav/sideNav.css';



export default function SideNav() {
  return (
    <div className='sideNav'>

      {/* sidenav header with image and heading. */}
      <SideNavHeader />

      {/* sidenav options */}

      <Options />

    </div>
  )
}

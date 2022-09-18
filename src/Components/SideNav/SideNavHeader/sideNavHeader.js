import React from 'react'
import b2brain from '../../../Assets/Images/Shape.png';
import '../../../Assets/Styles/SideNav/header.css'

export default function SideNavHeader() {
    return (
        <div className='header'>
            <div className='logo'>
                <img srcSet={b2brain} alt="icon" />
            </div>

            <div className='heading' >
                <p>B2Brain</p>
            </div>
        </div>
    )
}

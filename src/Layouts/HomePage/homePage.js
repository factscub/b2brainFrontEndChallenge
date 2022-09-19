import React from 'react'
import '../../Assets/Styles/Main/Homepage/homepage.css'
import im1 from '../../Assets/Images/im1.png'
import im2 from '../../Assets/Images/im2.png'
import im3 from '../../Assets/Images/im3.png'

export default function HomePage() {
    return (
        <div className='dummyBody'>
            <img srcSet={im1} className='image'  alt={'im1'}/>
            <img srcSet={im2} className='image' alt={'im2'}/>
            <img srcSet={im3} className='image' alt={'im3'}/>
        </div>
    )
}

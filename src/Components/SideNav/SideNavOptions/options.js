import React from 'react'
import { Link } from 'react-router-dom'
import optionsData from '../../../RawData/sideNavData'
import '../../../Assets/Styles/SideNav/options.css'

export default function Options() {

    // handler for collapse options.
    function collapseHandler(e) {
    
        const curElement = e.currentTarget.parentElement.parentElement
        if (curElement.nextElementSibling?.classList.contains('collapCont')) {

            if (curElement.nextElementSibling.classList.contains('hide')) {
                curElement.nextElementSibling.classList.remove('hide')
                curElement.children[2].children[0].style = `transform:rotate(180deg)`
            }
            else {
                curElement.nextElementSibling.classList.add('hide')
                curElement.children[2].children[0].style = `transform:rotate(0deg)`
            }
        }

    }

    return (
        <div className='options'>
            {
                optionsData.map((option, index) => {

                    const { text, image, popInfo, toggle, collapse } = option

                    return (<div className='singleOpt' key={index}><div className='optBox' key={index} >
                        <div className='icon'>
                            <img srcSet={require(`../../../Assets/Images/${image}`)} alt='pic' />
                        </div>
                        <div className='text'>
                            <Link to={`#${text}`} onClick={(e) => collapseHandler(e)} className='link textLink'>{text}</Link>
                        </div>

                        {/* popup wrapers indicates any unread or unseen messages. */}
                        {
                            popInfo &&
                            <div className='popInfo'>
                                <p>{popInfo}</p>
                            </div>
                        }

                        {/* arrow logo that indicates that the option has hidden options. */}
                        {
                            toggle &&
                            <div className='toggle' >
                                <img srcSet={require(`../../../Assets/Images/${toggle}`)} alt='pic' />
                            </div>
                        }

                    </div>

                        {/* collapse container */}
                        {
                            collapse &&
                            <div className='collapCont hide'  >
                                <div className='verticalLine'>
                                    <div className='vl'></div>
                                </div>
                                <ul className='collapList'>
                                    {
                                        collapse.map((text, index) => (
                                            <li className='collapTxt ' key={index} ><Link to={`#${text}`} className='link'>{text}</Link></li>
                                        ))
                                    }
                                </ul>
                            </div>
                        }
                    </div>)
                }
                )
            }
        </div>
    )
}

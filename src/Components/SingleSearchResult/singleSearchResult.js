import React, { useRef, useState } from 'react'
import '../../Assets/Styles/Main/SingleSearchResult/singleSearchResult.css'
import spinner from '../../Assets/Images/spinner.png'

export default function SingleSearchResult({ data }) {

  // refs to access dom elements.
  const loader = useRef(null)
  const track = useRef(null)
  const statusColor = useRef(null)


  const { logo, company, website, slug, color } = data
  const [status, setStatus] = useState('Track')
  const [trackClicked, setTrackClicked] = useState(false)


  // set custom logo if no logo is obtained over api call.
  const validLogo = (company, color) => {
    let clr = color
    if (color.indexOf('-') !== -1 && color) {
      clr = color.split('-')[1]

    } else if (!color) {
      clr = 'black'
    }

    const css = {
      'fontWeight': 700,
      'fontSize': '22px',
      'lineHeight': '30px',
      'color': 'white',
      'width': '50px',
      'height': '50px',
      'display': 'flex',
      'justifyContent': 'center',
      'alignItems': 'center',
      'background': clr

    }

    return <div style={css}>{company.charAt(0)}</div>
  }

  // toggle loader on mouseenter and mouseleave.
  const toggleLoader = () => {
    if (!loader.current.srcset && !trackClicked) {
      loader.current.setAttribute('srcset', spinner)
      loader.current.style.marginLeft = '8px'
      return
    }
    loader.current.setAttribute('srcset', '')
    loader.current.style.marginLeft = '0px'

  }

  // print data to the console on clicking the track button.
  const trackAccount = () => {
    setStatus('Tracking')
    setTrackClicked(true)
    statusColor.current.style.color = '#1AAB2B'
    loader.current.setAttribute('srcset', '')
    loader.current.style.marginLeft = '0px'
    track.current.style.border = '2px solid #1AAB2B'

    // data to be printed to the console.
    const timeStamp = new Date().getTime()
    const output = `${company}(${slug}) tracked at ${timeStamp}`
    console.log(output)

  }


  return (
    <div className='singleAccount'>
      {/* account image */}
      <div className='logoBox'>
        {logo ? <img srcSet={logo} alt='pic' /> : validLogo(company, color)}
      </div>

      {/* company's name and webiste */}
      <div className='textBox'>
        <p className='company' >{company}</p>
        <p className='website' >{website}</p>
      </div>

      {/* track button */}
      <div className='trackBox' ref={track} onMouseEnter={toggleLoader} onMouseLeave={toggleLoader} onClick={trackAccount}>
        <div className='loading' >
          <img ref={loader} alt='' />
        </div>
        <div className='tracker' ref={statusColor} >{status}</div>
      </div>

    </div>
  )
}

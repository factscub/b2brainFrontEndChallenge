import React, { useContext, useRef } from 'react'
import '../../Assets/Styles/Main/SearchBar/searchBar.css'
import search from '../../Assets/Images/search.png'
import bell from '../../Assets/Images/bell.png'
import image from '../../Assets/Images/Logo.png'
import cross from '../../Assets/Images/cross.png'
import fakeAccounts from '../../RawData/fakeAccounts'
import UserContext from '../../ContextApi/contextApi'


export default function SearchBar() {

  const { enteredSearch,
    setEnteredSearch,
    fetchData,
    setFetchedResult,
    setShowFakeAccounts
  } = useContext(UserContext)

  // refs to access dom elements.
  const removeText = useRef(null)
  const removeCross = useRef(null)

  // add corss symbol and focus input field.
  const helper = () => {
    removeCross.current.srcset = cross
    removeText.current.focus()
  }

  // indicates that we switched to accounts page, so hardcoded fake data will be shown.
  const inputFocus = () => {
    setEnteredSearch(true)
    setShowFakeAccounts(true)

  }

  // toggle between main page and accounts page.
  const inputToggle = () => {
    if (removeCross.current.srcset === search) {
      helper()
    }
    else {
      removeCross.current.srcset = search
      setEnteredSearch(false)
      removeText.current.value = ''
      setFetchedResult(fakeAccounts)
    }

  }

  return (
    <div className='searchBar'>

      <div className='searchCont' >

        {/* search / cross icon */}
        <div className='searchIcon' onClick={inputToggle} >
          <img ref={removeCross} srcSet={enteredSearch ? cross : search} alt='pic' />
        </div>

        {/* input field container  */}
        <div className='inputCont'>
          <input type='text' placeholder='Search by account name or website'
            ref={removeText} onFocus={inputFocus}
            onInput={(e) => {
              fetchData(e.target.value.trim())
            }} />
        </div>

      </div>

      {/* bell and logo container of the searchBar */}
      <div className='sideBar'>

        {/* bell container */}
        <div className='bellCont'>
          <div className='notf' ></div>
          <div className='bell'>
            <img srcSet={bell} alt='pic' />
          </div>
        </div>

        {/* logo container */}
        <div className='imageCont'>
          <img srcSet={image} alt='pic' />
        </div>

      </div>

    </div>
  )
}

import React, { useContext } from 'react'
import '../../Assets/Styles/Main/ContentBody/contentBody.css'
import AccountsBody from '../AccountsBody/accountsBody'
import HomePage from '../HomePage/homePage'
import UserContext from '../../ContextApi/contextApi'

export default function ContentBody() {

  const { enteredSearch } = useContext(UserContext)

  return (
    <div className='contentBody'>

      {/* only show homepage if the input field is not focused
      i.e, if the user clicks the cross symbol in the search bar.
      */}
      {
        !enteredSearch ? <HomePage /> : <AccountsBody />
      }
    </div>
  )
}

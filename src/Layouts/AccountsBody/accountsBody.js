import React, { useContext } from 'react'
import QuickActions from '../../Components/QuickActions/quickActions'
import '../../Assets/Styles/Main/AccountBody/accountBody.css'
import SearchedAccountsBody from '../SearchedAccountsBody/searchedAccountsBody'
import UserContext from '../../ContextApi/contextApi'

export default function AccountsBody() {

    const { fetchedResult, loading, showFakeAccounts } = useContext(UserContext)

    return (
        <div className='accountBody'>
            <SearchedAccountsBody />
            {
                ((fetchedResult.length !== 0 && !loading) || showFakeAccounts) && <QuickActions />
            }
        </div>
    )
}

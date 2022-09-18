import React, { useContext } from 'react'
import '../../Assets/Styles/Main/SearchedAccountsBody/searchedAccountsBody.css'
import SingleSearchResult from '../../Components/SingleSearchResult/singleSearchResult'
import contextApi from '../../ContextApi/contextApi'

export default function SearchedAccountsBody() {

    const { loading, fetchedResult, hasData } = useContext(contextApi)

    return (
        <div className='searchedAccountsBody'>

            {/* indicates the result is being fetched. */}
            {
                loading && <div className='searchHeading'>Fetching...</div>
            }

            {/* indicates no data is obtained from the given input. */}
            {
                (hasData === false && !loading && fetchedResult.length === 0) && <div className='searchHeading'>Invalid company name or website.</div>
            }

            {/* indicates some data is fetched for the given input. */}
            {
                (fetchedResult.length !== 0 && !loading) && <div className='searchHeading'>Similar accounts</div>
            }


            {/* shows the fetched data from the given api. */}
            <div className='searches' >
                {
                    (fetchedResult.length !== 0 && !loading) && fetchedResult.map((data, index) => <SingleSearchResult data={data} key={index} />)
                }
            </div>
        </div>
    )
}

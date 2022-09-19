import React, { useEffect, useState } from 'react'
import '../../Assets/Styles/Main/main.css'
import SearchBar from '../SearchBar/searchBar'
import ContentBody from '../ContentBody/contentBody'
import axios from 'axios'
import UserContext from '../../ContextApi/contextApi'
import fakeAccounts from '../../RawData/fakeAccounts'
import { url } from '../../URL/url'

let ID;
export default function Main() {
  const [timeout] = useState(600)
  const [enteredSearch, setEnteredSearch] = useState(false)
  const [fetchedResult, setFetchedResult] = useState([])
  const [loading, setLoading] = useState(false)
  const [hasData, setHasData] = useState(null)
  const [showFakeAccounts, setShowFakeAccounts] = useState(false)


  const fetchData = (input) => {

    setLoading(true)
    clearTimeout(ID)
try {
  
      // dont fetch data if the entered input is empty.
      if (input.length !== 0) {
        ID = setTimeout(async () => {
          const { data } = await axios.get(`${url}/?q=${input}`)
  
          setFetchedResult(data)
          setLoading(false)
  
          // if no data is obtained from the server.
          if (data.length !== 0) {
            setHasData(true)
            setShowFakeAccounts(false)
          }
          else {
            setHasData(false)
          }
        }, timeout);
      }
      else {
        setFetchedResult([])
        setLoading(false)
        setHasData(false)
      }
} catch (error) {

  console.log('message'+error)
  
}

  }

  useEffect(() => {

    // show hardcoded fake accounts data
    setFetchedResult(fakeAccounts)
  }, [])


  const contextDetails = {
    enteredSearch,
    setEnteredSearch,
    fetchData,
    setFetchedResult,
    setShowFakeAccounts,
    fetchedResult,
    loading, hasData,
    showFakeAccounts
  }

  return (
    <UserContext.Provider value={contextDetails}>
      <div className='main'>
        <SearchBar />
        <ContentBody />
      </div>
    </UserContext.Provider>
  )
}

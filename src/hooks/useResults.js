import { useEffect, useState } from 'react'
import yelp from '../api/yelp'

export default () => {
  const [results, setResults] = useState([])
  const [errMsg, setErrMsg] = useState('')

  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'san jose'
        }
      })
      setResults(response.data.businesses)
    } catch (err) {
      setErrMsg('Something went amiss')
    }

  }

  useEffect(() => {
    searchApi('coffee')
  }, [])  

  return [searchApi, results, errMsg]
}
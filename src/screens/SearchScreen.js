import React, {useState} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import SearchBar from '../components/SearchBar'
import yelp from '../api/yelp'

const SearchScreen = () => {
  const [term, setTerm] = useState('')
  const [results, setResults] = useState([])
  const [errMsg, setErrMsg] = useState('')

  const searchApi = async (searchTerm) => {
    console.log('hello!')
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


  return (
  <View>

    <SearchBar 
      term={term} 
      onTermChange={setTerm}
      onTermSubmit={() => searchApi(term)}
    />
    { errMsg ? <Text>{errMsg}</Text>: null}
    <Text> We have found {results.length} results </Text>
    
  </View>
  )
}

const styles = StyleSheet.create({})

export default SearchScreen
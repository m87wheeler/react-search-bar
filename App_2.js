import React, { useState, useEffect } from 'react'

import SearchBar from './components/SearchBar'
import Card from './components/Card'

const App = () => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [searchData, setSearchData] = useState([])

  const fetchData = async url => {
    try {
      const res = await fetch(url)
      const data = await res.json()
      setData(data)
      setIsLoading(false)
    } catch (err) {
      console.log('Error:', err)
    }
  }

  useEffect(() => {
    fetchData('https://jsonplaceholder.typicode.com/posts')
  }, [])

  const handleInput = e => {
    let str = e.target.value
    setSearch(str)
    const newArr = data
      .filter(
        item =>
          item.title.toLowerCase().includes(str.toLowerCase()) ||
          item.body.toLowerCase().includes(str.toLowerCase())
      )
      .map(item => {
        let newTitle = item.title.replace(
          new RegExp(str),
          match => `<mark>${match}</mark>`
        )
        let newBody = item.body.replace(
          new RegExp(str),
          match => `<mark>${match}</mark>`
        )
        return {
          ...item,
          title: newTitle,
          body: newBody,
        }
      })

    setSearchData(newArr)
  }

  return (
    <>
      <div>
        <SearchBar onInput={e => handleInput(e)} />
        <span>
          {searchData.length > 0 && searchData.length < data.length
            ? searchData.length
            : null}
        </span>
      </div>
      {isLoading ? (
        <p>Loading...</p>
      ) : search.length > 0 ? (
        searchData.map(post => (
          <Card
            key={post.id}
            user={post.userId}
            title={post.title}
            body={post.body}
          />
        ))
      ) : (
        data.map(post => (
          <Card
            key={post.id}
            user={post.userId}
            title={post.title}
            body={post.body}
          />
        ))
      )}
    </>
  )
}

export default App

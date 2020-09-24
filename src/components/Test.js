import React, { useReducer, useState } from 'react'

const Test = () => {
  // with useState
  const [dataOne, setDataOne] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  // with useReducer
  const initialState = {
    dataTwo: [],
    isLoading: true,
  }

  return <div></div>
}

export default Test

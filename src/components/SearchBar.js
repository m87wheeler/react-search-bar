import React from 'react'
import TextField from '@material-ui/core/TextField'

const SearchBar = props => {
  return (
    <TextField
      label="Search And Highlight"
      onInput={props.onInput}
      placeholder="search"
      style={{ width: '100%' }}
      color="secondary"
    />
  )
}

export default SearchBar

import React from 'react'

const SearchItem = ({search,SetSearch}) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="searcItem"></label>
        <input 
        type="text"
        placeholder='Search Grocery Items'
        value = {search}
        onChange={(e) => SetSearch(e.target.value)}
         />
    </form>
  )
}

export default SearchItem
import React, { useState } from 'react'

export default function SearchBar({onChange}) {
  const [search, setSearch] = useState('')

  const handleChange = (event) => {
    const { value } = event.target;
    setSearch(value);
    onChange(value);
    }
    


  return (
    <form className='flex flex-col'>
      <label htmlFor="search">Search</label>
      <input type='text' id='search' className='border' value={search} onChange={handleChange}></input>
      <div>
        <input type='checkbox' id='checkbox' ></input>
        <label htmlFor='checkbox'>Only show products in stock</label>
      </div>
    </form>
  )


}

  SearchBar.defaultProps = {
    onChange: () => {}
  }
import React, { useState } from 'react'


export default function SearchBar({onChange}) {
  const [search, setSearch] = useState({
    search:"", 
    onlyInStock: false})

    const handleChange = (event) => {
      const { id, type, value, checked } = event.target;
  
      setSearch((prev) => {
        const updatedSearch = {
          ...prev,
          [id]: type === 'checkbox' ? checked : value,
        };
  
        onChange(updatedSearch); 
        return updatedSearch;
      });
    };
    


  return (
    <form className='flex flex-col'>
      <label htmlFor="search">Search</label>
      <input type='text' id='search' className='border' value={search.search} onChange={handleChange}></input>
      <div>
        <input type='checkbox' id='onlyInStock' value={search.onlyInStock} onChange={handleChange}></input>
        <label htmlFor='onlyInStock' >Only show products in stock</label>
      </div>
    </form>
  )


}

  SearchBar.defaultProps = {
    onChange: () => {}
  }
import React, { useEffect, useState } from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'
import ProductsDb from '../../data.json'

export default function ProductsPage() {

  const [products, setProducts] = useState(ProductsDb);


  function search(value) {
    if(!value) {
      setProducts(ProductsDb)
      return;
    }
    setProducts((prev => {
      prev = ProductsDb;
      return prev.filter((product) => product.name.toLowerCase().includes(value.toLowerCase()) )
    }))
  }
  

  return (
    <div className='w-[70%] mx-auto'>
      <SearchBar onChange={(value) => search(value)} />
      <ProductTable products={products}/>
    </div>
  )
}

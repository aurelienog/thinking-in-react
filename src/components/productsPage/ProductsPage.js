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
      console.log(value);
      return prev.filter((product) => 
        value.onlyInStock === true ? (product.inStock && product.name.toLowerCase().includes(value.search.toLowerCase())) : product.name.toLowerCase().includes(value.search.toLowerCase()))
    }))
  }
  

  return (
    <div className='w-[70%] mx-auto'>
      <SearchBar onChange={(value) => search(value)} />
      <ProductTable products={products}/>
    </div>
  )
}

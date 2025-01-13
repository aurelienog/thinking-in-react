import React from 'react'
import ProductRow from './ProductRow'

export default function ProductTable({products}) {

  
  
  return (
    <table className='border w-full'>
      <thead className='border'>
        <tr>
          <th></th>
          <th scope="col">Name</th>
          <th></th>
          <th scope="col">Price</th>
        </tr>
      </thead>
      <tbody>
      {products.map((product => <ProductRow key={product.id} {...product}/> ))}
      </tbody>
    </table>
  )
}

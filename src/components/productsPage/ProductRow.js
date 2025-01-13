import React from 'react'

export default function ProductRow({name, price, inStock}) {

  return (
    
    <tr>
        <th scope="row"></th>
        <td style={inStock ? {  } : {color: '#ff0000'}}>{name}</td>
        <td></td>
        <td>{price}</td>
    </tr>
  )
}

import React from 'react'
import './Footer.css'
export default function Footer({total}) {
  return (
    <div className='footer'>
        <h3>Total:</h3>
        <div className='totale'>{total}</div>
         
    </div>
  )
}

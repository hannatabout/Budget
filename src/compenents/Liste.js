import React from 'react'
import Items from './items'
import './Listes.css'

export default function Liste({ wallets, setWallet }) {
  const removeIncome = i => {
    let temp = wallets.filter((v, index) => index !== i);
    setWallet(temp);
  }

  const sortByDate = (a, b) => {
    return a.date - b.date;
  }

  return (
    <div className='list'>
      {
        wallets.sort(sortByDate).map((value, index) => (
          <Items
            key={index}
            wallets={value}
            index={index}
            removeIncome={removeIncome}
          />
        ))
      }


    </div>
  )
}

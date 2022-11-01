import React from 'react'
import './items.css'
import logo3 from '../images/calendar3.png'
import logo4 from '../images/shopping3.png'
import logo5 from '../images/wallet1.png'


export default function Items({wallets,index,removeIncome}) {
    let date = new Date(wallets.date);
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    const removeHandle = i => {
        removeIncome(i);
    }

    return (
        <div className='items'>
            <img src={logo3} alt='logo' /><div className='Date'>{day + "/" + month + "/" + year}</div>
            <img src={logo4} alt='logo' /><div className='wallets'>{wallets.wallet}</div>
            <img src={logo5} alt='logo' /> <div className='price'>{wallets.price}</div>
            <button className='remove' onClick={() => removeHandle(index)} ></button>
        </div>
    )
}

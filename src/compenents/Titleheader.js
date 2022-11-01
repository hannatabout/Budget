
import './Titleheader.css';
import logo from '../images/calendar3.png'
import logo1 from '../images/shopping3.png'
import logo2 from '../images/wallet1.png'
import { useRef } from 'react';



export default function Titleheader({wallets,setWallet}) {
  const date = useRef()
  const wallet = useRef(null)
  const price = useRef(null);



  const addWallet = e => {
    e.preventDefault();
    let d = date.current.value
    let newD = new Date(d[0], d[1] , d[2])


    setWallet([...wallets, {
      'date': newD.getTime(),
      'wallet': wallet.current.value,
      'price': price.current.value
    }]);

    date.current.value = '';
    wallet.current.value = '';
    price.current.value = '';



  }



  return (
    <div  >
      <form className='titleheader' onSubmit={addWallet}  >
        <div className='date'>
          <div className='dt'>
            <img src={logo} alt='logo' />
            <input type='date' name='date' id='date' ref={date} ></input>
          </div>

        </div>

        <div className='wallet'>
          <div className='wall'>
            <img src={logo1} alt='logo1' />
            <input type='text' placeholder='Wallet' name='wallet' id='wallet' ref={wallet} ></input>
          </div>

        </div>

        <div className='budget'>
          <div className='budg'>
            <img src={logo2} alt='logo2' />
            <input type='number' placeholder='Budget' name='price' id='price' ref={price} min={0}></input>
          </div>

        </div>
        <button className='btn' type='submit' />
        <button type='submit'   onClick={() => setWallet([])}  className='remove' ></button>
        
    

      </form>

     
    
    </div>
  )
}

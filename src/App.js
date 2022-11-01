

import { useEffect, useState } from 'react';
import './App.css';

import Title from './compenents/Title';
import Titleheader from './compenents/Titleheader';
import Footer from './compenents/Footer';
import Liste from './compenents/Liste';



function App() {
  const [wallets, setWallet] = useState([]);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    let temp = 0;
    for (let i = 0; i < wallets.length; i++) {
      temp += parseInt(wallets[i].price);
    }
    setTotal (temp);


  },[wallets])

  return (
    <div className="App">
      < Title />
      <Titleheader wallets={wallets}  setWallet={setWallet}/>
      <Liste  wallets={wallets}  setWallet={setWallet}  />
      <Footer total={total}/>
      



    </div>
  );
}

export default App;

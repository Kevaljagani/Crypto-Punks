import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import CollectionCard from './components/CollectionCard';
import { useState, useEffect } from 'react';
import axios from 'axios';
import PunkList from './components/PunkList';
import Main from './components/Main'

function App() {
const [punkListData, setPunkListData] = useState([])
const [selectedPunk, setSelectedPunk] = useState([1])
useEffect(() => {
  const getMyNfts = async () => {
    const openSeaData = await axios.get('https://testnets-api.opensea.io/assets?asset_contract_address=0xb96ed3E683E9EFC6BA5Ee87a97c185f1051ee2DF&order_direction=asc');
    console.log(openSeaData.data.assets, "hello")
    setPunkListData(openSeaData.data.assets)
  }

  return getMyNfts()
}, [])

  return (
    <div className='app'>
      <Header />
      {
        punkListData.length > 0 && ( 
        <>
        <Main punkListData={punkListData} selectedPunk={selectedPunk}/>
        <PunkList punkListData={punkListData} setSelectedPunk={setSelectedPunk} 
          />
        </>
      )}
   </div>
  )
}

export default App;

import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import CollectionCard from './components/CollectionCard';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
const [punkListData, setPunkListData] = useState([])

useEffect(() => {
  const getMyNfts = async () => {
    const openSeaData = await axios.get('https://testnets-api.opensea.io/assets?asset_contract_address=0xb96ed3E683E9EFC6BA5Ee87a97c185f1051ee2DF&order_direction=asc');
    console.log(openSeaData.data.assets)
    setPunkListData(openSeaData.data.assets)
  }

  return getMyNfts()
}, [])
  return (
    <div className='app'>
      <Header />
      <CollectionCard id={0} name={'bandana punk'} traits={[{'value': 7}]} image={'https://ipfs.thirdweb.com/ipfs/bafybeigqkficum3anns36jid3dxvc4yfauyuvqjulbg43n23qxn3ce3tyu'}/>
      </div>
  );
}

export default App;

import { useState } from 'react'
import { useEffect } from 'react'

const storeUrl = 'https://fakestoreapi.com/products';

//esempio oggetto prodotto {"id":1,
// "title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
// "price":109.95,
// "description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
// "category":"men's clothing",
// "image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
// "rating":{"rate":3.9,"count":120}}

function App() {
  const [productList, setProductList] = useState([])

  useEffect(() => {
    fetch(storeUrl)
    .then(resp => resp.json())
    .then(json => setProductList(json))
    .catch(error => `Errore nel download dei dati, ${error}`)
    
  }, [])


  return <>
    <button className='btn btn-primary'>click</button>
    <div>{JSON.stringify(productList)}</div>
  </>;
}

export default App

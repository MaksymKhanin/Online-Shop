import './App.css';
import {useEffect, useState} from 'react';
import PurchaseForm from './PurchaseForm.jsx';

function App() {
  const [items, setItems] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(()=>{
    fetchItems();
  },[]);

  async function fetchItems() {
    const response = await fetch("https://fakestoreapi.com/products");
    const json = await response.json();

    setItems([...items, ...json]);
  }

  const handleBuy = (event) => {
    event.preventDefault();
    togglePopup();
  }

  function togglePopup(){
    setShowForm(!showForm);
  }

  return (
    <>
      <header>
        <h2 id='nav-title'>
          E-Shop
        </h2>
        <nav>
          <ul>
            <li><a href='#'>About</a></li>
            <li><a href='#'>Services</a></li>
            <li><a href='#'>Contact</a></li>
          </ul>
        </nav>
      </header>
      <div className='main_block'>
      {items && items.map((item, index) => (
        <div key={index} className='shopping_card'>
          <img className='image' src={item.image} alt="Denim Jeans"></img>
          <h3>{item.title.split(' ').slice(0,3).join(' ')}</h3>
          <p className="price">${item.price}</p>
          <p><button onClick={(e) => handleBuy(e)}>Add to Cart</button></p>
      </div>
      ))}

      {showForm && 
        <PurchaseForm toggle={togglePopup}></PurchaseForm>}
        
      </div>
    </>
  );
}

export default App;

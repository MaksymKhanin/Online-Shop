import React, { useState } from 'react';
import './PurchaseForm.css';

function PurchaseForm(props) {
  const [card, setCard] = useState('')
  const [cvi, setCvi] = useState('')
  const [expDate, setExpDate] = useState('')
  const [promocode, setPromocode] = useState('')

  const knownCards = [{
    card: '1576 9012 7490 7832',
    expDate:'2024-01-01',
    cvi: '456'
  },
  {
    card: '1111111111111111',
    expDate:'2024-01-01',
    cvi: '456'
  }];

  function handlePurchase(e) {
    e.preventDefault()
    

    if(knownCards.some(e=>e.card === card && e.cvi === cvi && e.expDate === expDate.toString())){
      alert('Purchased');
      props.toggle()
    }
    
    
}

  return (
    <div className="popup">
        <div className="popup-inner">
            <h2>Purchase</h2>
            <form onSubmit={handlePurchase}>
                <label>
                    Card number:
                    <input type="card" value={card} onChange={e=> setCard(e.target.value)}/>
                </label>
                <label>
                    Expiry date:
                    <input type="date" value={expDate} onChange={e=> setExpDate(e.target.value)}/>
                </label>
                <label>
                    CVI:
                    <input type="password" value={cvi} onChange={e=> setCvi(e.target.value)}/>
                </label>
                <label>
                    Promocode:
                    <input type="text" value={promocode} onChange={e=> setPromocode(e.target.value)}/>
                </label>
                <button type="submit" onClick={e=>handlePurchase(e)}>Purchase</button>
            </form>
            <button onClick={props.toggle}>Close</button>
        </div>
    </div>
)
}

export default PurchaseForm;
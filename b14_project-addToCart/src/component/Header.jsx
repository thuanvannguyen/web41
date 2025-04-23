import React from 'react'
import { useSelector } from 'react-redux'

const Header = ({toggleCheckout}) => {
  const cartStore = useSelector(state => state.cartBuys);

  // Tinh bang tay
  const data = Object.values(cartStore);
  // console.log(data);

  let count = 0;

  data.forEach(product => {
    count += product.quantity;
  })

  return (
    <div className='header'>
      <button onClick={toggleCheckout}>Cart {count}</button>
    </div>
  )
}

export default Header
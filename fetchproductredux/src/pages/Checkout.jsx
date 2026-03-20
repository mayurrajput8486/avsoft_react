import React from 'react'
import { useSelector } from 'react-redux'

const Checkout = () => {

  const {totalAmount} = useSelector((state)=>state.cart)
  return (
    <div style={{height : '650px'}}>
      <h3>Total Amount : {totalAmount}</h3>
      <button>Proceed to Payment</button>
    </div>
  )
}

export default Checkout
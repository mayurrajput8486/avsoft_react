/* import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increaseQty, decreaseQty, removeFromCart } from '../features/cart/cartSlice'
const Cart = () => {
  const dispatch = useDispatch()
  const {cartItems} = useSelector((state)=>state.cart)
  return (
    <div style={{height : '650px'}} className='text-center'>
      {
        cartItems.length === 0 && (
          <h3 className='border-2 w-100 mx-auto mt-40 p-3 rounded-2xl text-center font-bold'>Cart is Empty <br/> Add at least one product from product page</h3>
        )
      }

      {
        cartItems.map((item)=>{
          return(
            <div key={item.id} className='mt-10 border-2 w-100 p-4 mx-auto rounded-2xl'>
                <h4 className='font-bold text-2xl mb-3'> {item.title}</h4>

                <button className='bg-black text-white text-xl p-2 w-10 rounded-l-lg' onClick={()=>dispatch(decreaseQty(item.id))}>-</button>
                <button className='bg-black text-white text-xl p-2 w-10'>{item.qty}</button>
                <button className='bg-black text-white text-xl p-2 w-10 rounded-r-lg' onClick={()=>dispatch(increaseQty(item.id))}>+</button>
              
                <button className='ml-5' onClick={()=>dispatch(removeFromCart(item.id))}>❌</button>
            </div>
          )
        })
      }
    </div>
  )
}

export default Cart */

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increaseQty, decreaseQty, removeFromCart } from "../features/cart/cartSlice";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const { cartItems, totalAmount } = useSelector((state) => state.cart);
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col items-center">
      <h2 className="text-4xl font-bold mb-6">🛒 Your Cart</h2>

      {/* Empty Cart */}
      {cartItems.length === 0 && (
        <div className="bg-white shadow-lg p-6 rounded-2xl text-center w-full max-w-lg mt-20">
          <h3 className="text-2xl font-semibold">Cart is Empty ❗</h3>
          <p className="text-gray-600 mt-2">
            Add at least one product from product page.
          </p>
        </div>
      )}

      {/* Cart Items */}
      <div className="w-full max-w-3xl">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-md rounded-xl p-5 mt-6 flex flex-col md:flex-row md:items-center justify-between"
          >
            {/* Left Section */}
            <div>
              <h4 className="text-2xl font-semibold">{item.title}</h4>
              <p className="text-gray-600 mt-1">Price: ₹{item.price}</p>
              <p className="text-gray-600 mt-1">Total: ₹{item.qty * item.price}</p>
            </div>

            {/* Quantity Controls */}
            <div className="flex items-center gap-3 mt-4 md:mt-0">
              <button
                onClick={() => dispatch(decreaseQty(item.id))}
                className="bg-gray-800 text-white px-3 py-2 rounded-lg hover:bg-gray-900 transition"
              >
                -
              </button>

              <span className="font-bold text-xl bg-gray-800 text-white px-4 py-2 rounded-lg">
                {item.qty}
              </span>

              <button
                onClick={() => dispatch(increaseQty(item.id))}
                className="bg-gray-800 text-white px-3 py-2 rounded-lg hover:bg-gray-900 transition"
              >
                +
              </button>

              {/* Remove Button */}
              <button
                onClick={() => dispatch(removeFromCart(item.id))}
                className="ml-4 text-red-500 hover:text-red-700 text-2xl transition"
              >
                ❌
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Total Price */}
      {cartItems.length > 0 && (
        <div className="mt-10 p-6 bg-white shadow-lg rounded-xl w-full max-w-3xl text-center">
          <h3 className="text-3xl font-bold">Total Amount: ${totalAmount.toFixed(2)}</h3>

          <button
            className="mt-5 w-full bg-blue-600 text-white py-3 rounded-xl text-lg font-semibold hover:bg-blue-700 transition transform hover:scale-[1.02]"
            onClick={()=>navigate('/checkout')}
          >
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
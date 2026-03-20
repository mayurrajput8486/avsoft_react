import React from 'react'
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

export default Cart
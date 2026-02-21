import React from 'react'

const Foods = ({foodOrder, item_price, myOrder}) => {

    
  return (
    <div>
        <h1>Todays Menu</h1>
        <div>
            {foodOrder.mainCourse} - Rs.{item_price[0]} <br/> 
            {foodOrder.bread} - Rs. {item_price[1]}<br/>
            {foodOrder.deserts} - Rs. {item_price[2]}
        </div>
        <button onClick={myOrder}>Update on Order</button>
    </div>
  )
}

export default Foods
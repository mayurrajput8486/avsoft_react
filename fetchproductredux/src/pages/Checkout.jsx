/* import React from 'react'
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

export default Checkout */

import React from "react";
import { useSelector } from "react-redux";

const Checkout = () => {
  const { totalAmount } = useSelector((state) => state.cart);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10 px-4">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-3xl">

        {/* Header */}
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Checkout
        </h2>

        {/* Summary Section */}
        <div className="bg-gray-50 p-6 rounded-lg border mb-8">
          <h3 className="text-xl font-semibold mb-3">Order Summary</h3>

          <div className="flex justify-between py-2 border-b">
            <span className="text-gray-700">Subtotal:</span>
            <span className="font-medium">₹{totalAmount.toFixed(2)}</span>
          </div>
          <div className="flex justify-between py-2 border-b">
            <span className="text-gray-700">GST (18%):</span>
            <span className="font-medium">₹{(totalAmount * 0.18).toFixed(2)}</span>
          </div>
          <div className="flex justify-between py-3 text-lg font-bold">
            <span>Total Payable:</span>
            <span>₹{(totalAmount * 1.18).toFixed(2)}</span>
          </div>
        </div>

        {/* Payment Options */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-3">Choose Payment Method</h3>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <button className="p-4 rounded-lg border hover:bg-blue-600 hover:text-white transition">
              💳 Credit Card
            </button>
            <button className="p-4 rounded-lg border hover:bg-blue-600 hover:text-white transition">
              🏦 Net Banking
            </button>
            <button className="p-4 rounded-lg border hover:bg-blue-600 hover:text-white transition">
              📱 UPI / GPay
            </button>
            <button className="p-4 rounded-lg border hover:bg-blue-600 hover:text-white transition">
              💼 Wallet
            </button>
            <button className="p-4 rounded-lg border hover:bg-blue-600 hover:text-white transition">
              💳 Debit Card
            </button>
          </div>
        </div>

        {/* Proceed Button */}
        <button
          className="w-full py-4 bg-blue-600 text-white rounded-xl text-lg font-semibold 
                     hover:bg-blue-700 transition transform hover:scale-105"
        >
          Proceed to Payment
        </button>
      </div>
    </div>
  );
};

export default Checkout;
/* import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../features/products/productSlice'
import { addToCart } from '../features/cart/cartSlice'
const ProductList = () => {
    const dispatch = useDispatch()

    const {items, loading} = useSelector((state)=> state.products)

    useEffect(()=>{
        dispatch(fetchProducts())
    },[dispatch])

    if(loading) return <h2 className='text-center font-bold text-xl'>Loading......</h2>

  return (
    <div className='text-center mb-2'>
        <h2 className='text-center text-3xl font-bold mt-3'>Products</h2>
        <div className='grid grid-cols-3 gap-4 mx-3 mt-3 '>
            {
                items.map((product)=>{
                    return(
                        <div key={product.id} className='border-2 rounded-2xl p-4 '>
                            <h3 className='font-bold text-xl'>{product.title}</h3>
                            
                            <img src={product.thumbnail} alt={product.title} loading='lazy' className='mx-auto w-50'/>

                            <h3 className='font-bold border-2 rounded-2xl bg-black text-white p-2 w-60 text-center mx-auto'>
                                Price - ${product.price}
                            </h3>

                            <button className='bg-amber-950 text-white text-xl mt-3 p-2 rounded-xl'
                            onClick={()=>dispatch(addToCart(product))}
                            >
                                Add to Cart
                            </button>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default ProductList */

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/products/productSlice";
import { addToCart } from "../features/cart/cartSlice";

const ProductList = () => {
  const dispatch = useDispatch();
  const { items, loading } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading)
    return (
      <h2 className="text-center font-bold text-2xl py-10 animate-pulse text-purple-400">
        Loading...
      </h2>
    );

  return (
    <div className="px-6 py-10 bg-gradient-to-br from-gray-900 via-slate-900 to-black min-h-screen">
      {/* Heading */}
      <h2 className="text-center text-4xl font-extrabold mb-10 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
        Featured Products
      </h2>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
        {items.map((product) => (
          <div
            key={product.id}
            className="rounded-3xl p-5 bg-gradient-to-br from-white/10 to-white/5 border border-white/10 shadow-xl hover:shadow-purple-500/20 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between backdrop-blur-lg"
          >
            {/* Image Section */}
            <div className="flex justify-center items-center h-52 bg-gray-800/60 rounded-xl p-3">
              <img
                src={product.thumbnail}
                alt={product.title}
                loading="lazy"
                className="object-contain h-full w-full"
              />
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold mt-4 text-gray-200 text-center">
              {product.title.length > 35
                ? product.title.substring(0, 35) + "..."
                : product.title}
            </h3>

            {/* Price */}
            <div className="mt-3 flex justify-center">
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold px-4 py-2 rounded-full text-lg shadow-lg">
                ₹ {product.price}
              </span>
            </div>

            {/* Button */}
            <button
              className="w-full mt-5 bg-gradient-to-r from-purple-600 to-pink-500 text-white py-3 rounded-2xl text-lg font-semibold shadow-lg hover:scale-105 active:scale-95 transition-all"
              onClick={() => dispatch(addToCart(product))}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;

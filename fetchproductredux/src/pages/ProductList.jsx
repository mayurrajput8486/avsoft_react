import React, { useEffect } from 'react'
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

export default ProductList
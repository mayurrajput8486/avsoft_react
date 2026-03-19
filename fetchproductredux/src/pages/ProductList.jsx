import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../features/products/productSlice'

const ProductList = () => {
    const dispatch = useDispatch()

    const {items, loading} = useSelector((state)=> state.products)

    useEffect(()=>{
        dispatch(fetchProducts())
    },[dispatch])

    if(loading) return <h2 className='text-center font-bold text-xl'>Loading......</h2>

  return (
    <div className='text-center'>
        <h2 className='text-center text-3xl font-bold mt-3'>Products</h2>
        <div className='grid grid-cols-3 gap-4 mx-3 mt-3 '>
            {
                items.map((product)=>{
                    return(
                        <div key={product.id} className='border-2 rounded-2xl p-4 '>
                            <h3>{product.title}</h3>
                            <h3>{product.price}</h3>
                            <img src={product.thumbnail} alt={product.title} loading='lazy'/>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default ProductList
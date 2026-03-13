import axios from 'axios'
import React, { useEffect, useState } from 'react'

const useProductDetails = (id) => {

    const API_URL = `https://dummyjson.com/products/${id}`

    const [products,setProducts] = useState(null) //for products
    const [loading,setLoading] = useState(false)   //loading
    const [error,setError] = useState('')   //error

    const getProductDetail = async() =>{
        try {
            setLoading(true)
            setError('')

            const {data} = await axios.get(API_URL)
            setProducts(data)

        } catch (error) {
            setError('Failed to get product details',error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(()=>{
        if(id){
            getProductDetail()
        }
    },[id])

  return {products, loading, error}
}

export default useProductDetails
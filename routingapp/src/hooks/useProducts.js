import axios from "axios"
import { useState, useEffect } from "react"

const useProducts = () => {
    const API_URL = "https://dummyjson.com/products"

    const [products,setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const getProducts = async() =>{
        try {
          setLoading(true)
          setError('')  

          const { data } = await axios.get(API_URL)
          setProducts(data.products)

        } catch (error) {
            setError('Failed to get Product details',error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(()=>{
        getProducts()
    }, [])

  return { products, loading, error }  
}

export default useProducts
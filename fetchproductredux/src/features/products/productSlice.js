import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const ProductAPI = 'https://dummyjson.com/products'

export const fetchProducts = createAsyncThunk(
    "products/fetchProducts",
    async () =>{
        const response = await axios.get(ProductAPI)
        return response.data.products
    }
)

const productSlice = createSlice({
    name : "products",
    initialState : {
        items : [],         //const [product, setProduct] = useState([])
        loading : false,    //const [loading, setLoading] = useState(false)
        error : null        //const [error, setError] = useState(null)
    },
    /* A callback that receives a builder object to define case reducers via calls to builder.addCase(actionCreatorOrType, reducer). */
    extraReducers : (builder) =>{
        builder.addCase(fetchProducts.pending, (state)=>{
            state.loading = true
        }).addCase(fetchProducts.fulfilled, (state,action)=>{
            state.loading = false,
            state.items = action.payload
        }).addCase(fetchProducts.rejected, (state)=>{
            state.loading = false,
            state.error ="Error while fetching products"
        })
    }
})

export default productSlice.reducer


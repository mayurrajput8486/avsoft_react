import { createSlice } from "@reduxjs/toolkit";

const initialState = {
        value : 0
}
// createSlice() accept initialState, slice name, object of reducers
const counterSlice = createSlice({
    initialState,
    name : "counter",
    reducers : {
        increment : (state)=>{state.value += 1},
        decrement : (state)=>{state.value -= 1}
    }
})
export const {increment, decrement} = counterSlice.actions
export default counterSlice.reducer;


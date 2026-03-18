import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counterSlicer'
const store = configureStore({
    reducer : {
        counter : counterReducer 
    }
})
export default store
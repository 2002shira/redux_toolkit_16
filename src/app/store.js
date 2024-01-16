import { configureStore } from "@reduxjs/toolkit";
import bookSlice from "../Features/Book/BookSlice";

const store= configureStore({
    reducer:{bookSlice:bookSlice},
})
export default store;
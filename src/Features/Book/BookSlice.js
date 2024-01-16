import { createSlice } from "@reduxjs/toolkit"
const initialState = {
    arr: [
        { name: "The secret garden", code: 4, price: 50, author: "Frances Hodgson Burnett", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEpdZ4YIQqCZY7KkBZAtoXW3In6NckcmV0lOXQz4FOjvcVeHK3n3F6fSAtCqTlSZj2mqw&usqp=CAU" },
        { name: "Charlotte's Web", code: 6, price: 75, author: "E.B White", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg5vOCXX8NEPIK0fAAm6hNOYqMjYQmzbYUQw&usqp=CAU" },
        { name: "Wonder", code: 8, price: 75, author: "R.J Palacio", src: "https://bookshelf.ca/i/size/o/product_images--3--9781524720193/w/250" }
    ],
    selectBook: null,
    selectBookForEdit: null,
    bookAdd: false
}
export const bookSlice = createSlice({
    name: "bookSlice",
    initialState,
    reducers: {
        addBook: (state, action) => {
            action.payload.code = state.arr.length;
            state.arr.push(action.payload)
            state.bookAdd = false;
        },
        deleteBook: (state, action) => {
            let code = action.payload;
            let index = state.arr.findIndex(item => item.code === code);
            state.arr.splice(index, 1);
            state.bookAdd = false;
        },
        selectedBook: (state, action) => {
            state.selectBook = action.payload;
            state.bookAdd = false;
        },
        editBook: (state, action) => {
            state.selectBookForEdit = action.payload;
            state.bookAdd = false;
        },
        saveEditedBook:(state,action)=>{
            let copy = state.arr.map(item => {
                if (item.code !== action.payload.code)
                    return item;
                return action.payload;
            })
            return {
                selectBook: state.selectBook,
                selectBookForEdit: null,
                arr: copy,
                bookAdd:false
            }
        }
    }
})
export const {addBook,deleteBook,selectedBook,saveEditedBook,editBook}=bookSlice.actions;
export default bookSlice.reducer
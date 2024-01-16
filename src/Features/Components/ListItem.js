import { useDispatch, useSelector } from "react-redux";
import { deleteBook,editBook,selectedBook } from "../Book/BookSlice";
import BookDetails from "./BookDetails"

const ListItem = ({ book }) => {
    let dispatch = useDispatch();
    let selected=useSelector(state=>state.bookSlice.selectBook)
  
    return (<div>
        <h2>{book.name}</h2>
        <h2>{book.code}</h2>
        <input onClick={() => { dispatch(deleteBook(book.code)) }} type="button" value="delete" />
        <input onClick={() => { dispatch(editBook(book)) }} type="button" value="edit" />
        <input onClick={() => {  dispatch(selectedBook(book)) }} type="button" value="present" />
        {selected&&selected.code===book.code&&<BookDetails/>}
    </div>
    );
}

export default ListItem;
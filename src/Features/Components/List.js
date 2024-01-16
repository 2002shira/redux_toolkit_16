import { useDispatch, useSelector } from "react-redux";
import {addBook,} from "../Book/BookSlice"
import ListItem from "./ListItem"
import EditBook from "./EditBook";
const List = () => {
    let arr = useSelector((state) => { return state.bookSlice.arr });
    let selectEdit=useSelector(state=>state.bookSlice.selectBookForEdit)
    let dispatch=useDispatch();
    return (<>
        <h1>shelf of books</h1>
        <ul>
            {arr.map(item => <li key={item.code}  ><ListItem book={item} /></li>)}
        </ul>
        <input onClick={() => { dispatch(addBook()) }} type="button" value="add a New Book" />
        {selectEdit&&<EditBook/>}
    </>);
}

export default List;
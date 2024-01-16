import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../Book/BookSlice";

const AddBook = () => {
let dispatch=useDispatch();
    const [details, setDetails] = useState({
        name: "",
        code: "",
        price: "",
        author: "",
        src: "",
    });
    const change = (event) => {
        let name = event.target.name;
        let value = event.target.value
        setDetails({ ...details, [name]: value })
    }
    const submit = (event) => {
        event.preventDefault();
        dispatch(addBook(details));
        
    }
    return (<form onSubmit={submit}>
        <label>name</label>
        <input type="text" name="name" value={details.name} onChange={change} />
        <label>code</label>
        <input type="text" name="code" value={details.code} onChange={change}/>
        <label>price</label>
        <input type="text" name="price" value={details.price} onChange={change}/>
        <label>author</label>
        <input type="text" name="author" value={details.author} onChange={change}/>
        <label>image-src</label>
        <input type="text" name="src" value={details.src} onChange={change}/>
        <button type="submit">add Book to shelf</button>
    </form>);
}

export default AddBook;
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {saveEditedBook} from "../Book/BookSlice.js"

const EditBook = () => {

    let forEdit = useSelector(state => state.bookSlice.selectBookForEdit);
    let dispatch = useDispatch({ ...forEdit })
    const [details, setDetails] = useState({ ...forEdit });
    const change = (event) => {
        let name = event.target.name;
        let value = event.target.value
        setDetails({ ...details, [name]: value })
    }
    const submit = (event) => {
        event.preventDefault();
        dispatch(saveEditedBook(details));
    }
    return (<form onSubmit={submit}>
        editing book detials
        <lable>name</lable>
        <input type="text" value={details.name} name="name" onChange={change} />
        <lable>Author</lable>
        <input type="text" value={details.author} name="author" onChange={change} />
        <input type="submit" />
    </form>);
}

export default EditBook;
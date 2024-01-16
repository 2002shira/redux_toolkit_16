import { useSelector } from "react-redux";

const BookDetails = () => {
    const selected = useSelector(state => state.bookSlice.selectBook)
    return (
        <div> 
            details of selected book
            <h2>writer: <span style={{color:"blue"}}>{selected.author}</span></h2>
            <h2>price: <span style={{color:"blue"}}>{selected.price}</span></h2>
            <img src={selected.src}/>

        </div>
    );
}

export default BookDetails;
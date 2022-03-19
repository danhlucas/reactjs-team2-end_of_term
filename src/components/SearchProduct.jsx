

function SearchProduct(props) {
    return ( 
        <div className="mt-5 mx-4">
        <input 
        type="text" 
        placeholder="Search..."
        style={{width: "30%", marginLeft: "8px", border: "2px solid black"}}
        className="form-control " 
        value={props.titleSearch} 
        onChange={(e)=>{props.handleChangeTitleSearch(e.target.value)}} />
        </div>

     );
}

export default SearchProduct;
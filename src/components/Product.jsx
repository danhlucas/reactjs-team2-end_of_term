import React, {useState} from 'react'
import { NavLink } from 'react-router-dom';
import DATA from '../Data'
import SearchProduct from './SearchProduct';


const Product = () => {
    let products = []
    const [titleSearch, setTitleSearch] = useState("");
    const handleChangeTitleSearch = (text)=>{
        setTitleSearch(text)
        console.log(titleSearch)
    }
    products = DATA.filter((product)=>{
        if(product.title.toLowerCase().includes(titleSearch.toLowerCase())){
            return product
        }else return null
    })
    
    

    const cardItem = (item) => {
        return (
            <div class="card my-5 py-4" key={item.id} style={{ width: "18rem" }}>
                <img src={item.img} class="card-img-top" alt={item.title} />
                <div class="card-body text-center">
                    <h5 class="card-title">{item.title}</h5>
                    <p className="lead">${item.price}</p>
                    <NavLink to={`/products/${item.id}`} class="btn btn-outline-dark">Buy Now</NavLink>
                </div>
            </div>
        );
    }

    return (
        <div>
            <div className="container py-2">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1 className='titles'>Product</h1>
                        <hr style={{width: "94%"}} className="mx-auto"/>
                        <SearchProduct titleSearch={titleSearch} handleChangeTitleSearch={handleChangeTitleSearch}/>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row justify-content-around">
                    {products.map(cardItem)}
                </div>
            </div>
        </div>
    )
}

export default Product

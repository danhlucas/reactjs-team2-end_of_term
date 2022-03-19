import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import CartBtn from './buttons/CartBtn'
import Login from './buttons/Login'



const Header = () => {
    const dispatch = useDispatch()
    const user = useSelector((state) => state.user)
    const handleLogout = (e)=>{
        dispatch({
            type: "USER-LOGOUT" 
        })
    }



    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid py-2">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <NavLink className="navbar-brand mx-5 fw-bold  logo-nav-web" to="/">ELECTRONIC WORLD</NavLink>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link navhome" style={{ color: '#b0170c'}} aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/products">Product</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">Contact</NavLink>
                            </li>
                        </ul>
                        
                        {
                            user.email === null?<div><Login /> </div>
                            : <div ><p style={{display: "inline"}} className='mt-3 mx-2 '>Hi {user.email}</p> 
                            <button type="button" class="btn btn-outline-dark " onClick={handleLogout}>LOGOUT</button>
                            </div>         
                            

                        }
                        <CartBtn />
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header

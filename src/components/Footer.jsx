import React from 'react'
import { NavLink } from 'react-router-dom'
const Footer = () => {
    return (
        <div className='fixed-bottom'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='bg-dark text-white p-1'>
                        <div className='col-md-7 col-lg-8 float-start mt-3'>
                            <p className='conact m-0'>Contact us by phone number:
                                <NavLink to="/" className='number text-decoration-none' >
                                    <strong className='text-warning'> 0123456789</strong>
                                </NavLink>
                            </p>
                        </div>

                        <div className='col-md-5 col-lg-4 float-end'>
                            <div className='text-center text-md-end'>
                                <ul className='list-unstyled list-inline'>
                                    <li className='list-inline-item'>
                                        <a href="https://www.facebook.com/" className='footericons btn btn-sm text-white ms-2' >
                                            <i className='fa fa-facebook'></i>
                                        </a>
                                    </li>
                                    <li className='list-inline-item'>
                                        <a href='https://www.youtube.com/' className='footericons btn btn-sm text-white ms-2' >
                                            <i className='fa fa-youtube-play'></i>
                                        </a>
                                    </li>
                                    <li className='list-inline-item'>
                                        <a href='https://www.linkedin.com/' className='footericons btn btn-sm text-white ms-2' >
                                            <i className='fa fa-linkedin'></i>
                                        </a>
                                    </li>
                                    <li className='list-inline-item'>
                                        <a href='https://mail.google.com/mail/u/0/?tab=wm#inbox' className='footericons btn btn-sm text-white ms-2' >
                                            <i className='fa fa-envelope-o'></i>
                                        </a>
                                    </li>
                                    <li className='list-inline-item'>
                                        <a href='https://github.com/' className='footericons btn btn-sm text-white ms-2' >
                                            <i className='fa fa-github'></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer

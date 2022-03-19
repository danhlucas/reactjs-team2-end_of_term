import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <div className="container py-5 my-5">
                <div className="row">
                    <div className="col-md-5">
                        <h1 className="text-dark fw-bold mb-4 titles">About Us</h1>
                        <p className="lead mb-4">
                            We are from Team 2. We are studying in class IT19A2A, Dong A University. Thanks to the guidance of the teacher, the knowledge learned along with online materials. We created this website, to strengthen our knowledge, improve our skills and understand more about the React library.
                            The project of my team still has a lot of shortcomings, I hope everyone can give us feedback so that we can improve. Sincerely thank.
                        </p>
                        <NavLink to="/contact" className="btn btn-outline-dark px-3">Contact Us</NavLink>
                    </div>
                    <div className="col-md-7 d-flex justify-content-center">
                        <img src="/assets/images/about.jpg" alt="About Us" height="500px" width="800px"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About

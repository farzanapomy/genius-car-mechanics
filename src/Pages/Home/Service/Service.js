import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { name, img, description, price, id } = service;
    return (
        <div className="service">
            <img src={img} alt="" />
            <h3>Name : {name}</h3>
            <h5>Price : {price}</h5>
            <p className='p-3'>Details : {description}</p>

            <Link to={`/booking/${id}`}>
                <button className='btn btn-warning'>Book {name.toLowerCase()}</button>
            </Link>
        </div>
    );
};

export default Service;



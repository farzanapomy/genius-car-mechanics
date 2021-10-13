import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../images/notFound.jpg'
const NotFound = () => {
    return (
        <div>
            <h2>This page is not found</h2>
            <img style={{width:'100%' }} src={notFound} alt="" />
            <Link to='/'>
                <button>Go Back</button>
            </Link>
        </div>
    );
};

export default NotFound;
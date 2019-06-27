import React from 'react';
import { Link } from 'react-router-dom';

const err404=()=>{
    
    return (
        <div className='tc'>
            <h1 className='text-success'>Oops... </h1>
            <p className='f3'>We don't have the page you are looking for</p>
            <Link to='/' className='text-success'> <small>Return to Homepage</small></Link>
        </div>
    )
}

export default err404;
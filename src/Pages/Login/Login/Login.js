import React from 'react';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const {singInUingGoole}=useAuth()
    
    return (
        <div>
                <h2>Please log in</h2>
                <button onClick={singInUingGoole} className='btn btn-primary'>Google Sign In</button>
        </div>
    );
};

export default Login;
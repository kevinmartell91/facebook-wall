import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../../redux/actions/authActions"
import { Redirect } from 'react-router-dom';


const Signup = () => {

    const [ postCredentials, setPostCredentials ]  = useState({
        email: '',
        password: ''
    })
    
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch (createUser(postCredentials));
    }

    const handleChange = (e) => {
        setPostCredentials({
            ...postCredentials,
            [e.target.id] : e.target.value
        });
    }

    const auth  =  useSelector((state)=> state.auth);  

    return (
        ( auth && auth.success ) 
        ? 
            <Redirect to='/signin' /> 
        :
            <div className="container form white">
                <form onSubmit={handleSubmit}>

                    <h5 className="gray-text text-darken-3">Regístrese</h5>

                    <div className="input-field">
                        <label htmlFor="email">Correo electrónico</label>
                        <input type="email" id="email" onChange={handleChange}/>
                    </div>

                    <div className="input-field">
                        <label htmlFor="password">Contraseña</label>
                        <input type="password" id="password" onChange={handleChange}/>
                    </div>

                    <div className="input-field">
                        <button className="btn blue lighten-1 z-depth-0">Crear cuenta</button>
                    </div>
                </form>
            </div> 
    )
}

export default Signup;
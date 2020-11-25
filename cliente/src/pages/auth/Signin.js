import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { authentication } from '../../redux/actions/authActions'
import { Redirect } from 'react-router-dom';

const Signin = () => { 
    
    const [ postCredentials, setPostCredentials ]  = useState({
        email: '',
        password: ''
    })
    
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(authentication(postCredentials));
    }

    const handleChange = (e) => {
        setPostCredentials({
            ...postCredentials,
            [e.target.id] : e.target.value
        })
    }

    const auth = useSelector((state) =>state.auth);

    return (

        (auth && auth.success )
        ? <Redirect to="/dashboard" />
        : (
            <div className="container form white">
                <form onSubmit={handleSubmit}>

                    <h5 className="gray-text text-darken-3">Ingrese</h5>

                    <div className="input-field">
                        <label htmlFor="email">Correo electrónico</label>
                        <input type="email" id="email" onChange={handleChange}/>
                    </div>

                    <div className="input-field">
                        <label htmlFor="password">Contraseña</label>
                        <input type="password" id="password" onChange={handleChange}/>
                    </div>

                    <div className="input-field">
                        <button className="btn blue lighten-1 z-depth-0">Ingrese</button>
                    </div>
                    {(auth && auth.success ) ? auth.message : ''}
                </form>

            </div>
        )


    )
}

export default Signin;

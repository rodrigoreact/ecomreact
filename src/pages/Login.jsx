import axios from 'axios';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const {register, handleSubmit} = useForm();    
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate();
    const token = useSelector(state => state.token)

    console.log(token);
    const submit = (data) => {
       axios.post(`https://e-commerce-api-v2.academlo.tech/api/v1/users/login`, data)
        .then(res => {
            localStorage.setItem("token", res.data.token);
            navigate("/")
        })
        .catch(error => {
            if(error.response.status === 401){
                alert("Credenciales Incorrectas")
            }
    
        })
      };

    return (
        <div className='form'>
            <Form onSubmit={handleSubmit(submit)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <h2>You must log in first.</h2>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" 
                    placeholder="Ingresar email" value={email} 
                    onChange={e => setEmail(e.target.value)} 
                    {...register("email")}/>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" 
                    placeholder="Password" value={password} 
                    onChange={e => setPassword(e.target.value)}
                    {...register("password")}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Ingresar
                </Button>
                <br />
                <br />
                <p>Credentials to enter.<br /><br />
                Email: john@gmail.com<br />
                password: john1234<br />
                </p>

            </Form>
        </div>
    );
};

export default Login;
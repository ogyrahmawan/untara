import React, {useEffect, useState} from 'react'
import Logo from '../assets/logo.png'
import { useHistory } from 'react-router-dom'
import axios from "axios"

const Login = (props) => {
    const history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const handleChange = (e) => {
        if(e.target.name === 'email') {
            setEmail(e.target.value)
        } else if (e.target.name === 'password'){
            setPassword(e.target.value)
        }
    }

    useEffect(() => {
        if(localStorage.access_token){
            history.push('/product')
        }
    }, [history])
    const handleSubmit = (e) => {
        e.preventDefault()
        const payload = {
            email,
            password
        }
        axios({
            url: "/login",
            method: "POST",
            data: {
                email: payload.email,
                password: payload.password
            }
        })
        .then(res => {
            localStorage.setItem('access_token', res.data.access_token)
            history.push('/')
        })
        .catch(err => {
            console.log(err)
        })
    
    }
    return (
        <div className="container mt-5 d-flex align-items-center">
            <div className="container p-0 shadow" style={{height: "35vw", width: "40vw"}}>
                <div className="container d-flex justify-content-center align-items-center">
                    <img style={{width: "10vw"}} src={Logo} alt="logo"></img>
                </div>
                <div className="container text-dark text-aligns-center d-flex justify-content-center">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group mt-2">
                            <label>Email</label>
                            <input name="email" onChange={handleChange} className="form-control" type="email"></input>
                        </div>
                        <div className="form-group mt-2">
                            <label >Password</label>
                            <input name="password" onChange={handleChange} className="form-control" type="password"></input>
                        </div>
                        <button type="submit" class="mt-2 btn btn-primary btn-block">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
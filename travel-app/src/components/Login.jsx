import React, { createContext, useContext, useState } from 'react'
import axios from 'axios'
import { UserContext } from '../utils/MyContext'

const Login = () => {


    const [user, setUser] = useState({ userName: '', password: '' })

    const ctx = useContext(UserContext)

    const handleChange = (event) => {

        const name = event.target.name
        const value = event.target.value

        setUser(values => ({ ...values, [name]: value }))

        console.log(value)

    }

    const handleSubmit = (event) => {

        event.preventDefault()

        console.log('on submit called', user)

        sessionStorage.setItem('currentUser', user.userName)

        ctx.setUser(user.userName)

        axios.post("http://localhost:3000/users", user)
            .then(response => console.log('user Added'))


    }


    return (

        <>

            <form action="" onSubmit={handleSubmit}>

                <div>
                    <label htmlFor="userName">User Name</label>
                    <input type="text" name="userName" id="userName"
                        value={user.userName} onChange={handleChange}></input>
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" autoComplete='autocomplete' name="password"
                        id="password" value={user.password} onChange={handleChange} />

                </div>
                <div>
                    <input type='submit' value='Submit'></input>
                </div>

            </form>
        </>
    )
}

export default Login
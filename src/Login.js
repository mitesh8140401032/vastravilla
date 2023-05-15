import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Login() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [alldata, setAlldata] = useState([])



    const handlename = (e) => {
        setName(e.target.value)
    }
    const handleemail = (e) => {
        setEmail(e.target.value)
    }
    const handlepassword = (e) => {
        setPassword(e.target.value)
    }
    const ok = () => {
        let obj = {
            name: name,
            email: email,
            password: password
        }
        setAlldata([...alldata, obj])
        console.log(alldata)

    }
    return (
        <>
            <div className="mitesh">
                <div class="main">
                    <input type="checkbox" id="chk" aria-hidden="true" />

                    <div class="signup"></div>
                    <div class="login">
                        <form>
                            <label for="chk" >Login</label>
                            <input type="text" value={name} onChange={handlename} placeholder="User name" />
                            <input type="email" value={email} onChange={handleemail} placeholder="Email" />
                            <input type="password" value={password} onChange={handlepassword} placeholder="Password" />
                            <button onClick={ok} ><Link to="/Data">Sign up</Link> </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Login = () => {
    let erremail = useRef()
    let [input, setInput] = useState({ email: "", password: "" })
    let handleInput = (e) => {
        let key = e.target.name
        let val = e.target.value
        setInput({
            ...input,
            [key]: val
        })
    }
    let credential = {
        mail: "r@gmail.com",
        pwd: "123"
    }

    let { mail, pwd } = credential
    let { email, password } = input

    let succesBorder = "solid 2px green"
    let errorBorder = "solid 2px red"

    let handleSubmit = (e) => {
        e.preventDefault()

        if (mail === email) {
            e.target[0].style.border = succesBorder
            if (pwd === password) {
                e.target[1].style.border = succesBorder
                alert("Login success")
                setInput({ email: "", password: "" })
                navigate(`/`)
            } else {
                e.target[1].style.border = errorBorder
                alert(`Invalid password`)
                setInput({ password: "" })
            }

        } else {
            erremail.current.innerText = "Invalid email"
            e.target[0].style.border = errorBorder
            setInput({ email: "" })
        }

    }

    let navigate = useNavigate()
    let close = () => {
        navigate(`/`)
    }
    return (
        <>
            <div className="login">

                <div className="container">
                    <form action="" onSubmit={handleSubmit}>
                        <div className="close">
                            <p>Fill Credential</p>
                            <div className="closesymbol" onClick={close} title='Back to product page'>✖️</div>
                        </div>
                        <div className="label">
                            <label htmlFor="">email</label>
                            <input
                                type="email"
                                placeholder='enter email'
                                onChange={handleInput}
                                name='email'
                                value={input.email}
                                required
                            />
                            <p style={{ color: "red", marginTop: "5px", textAlign: "end" }} ref={erremail}></p>
                        </div>
                        <div className="label">
                            <label htmlFor="">password</label>
                            <input
                                type="password"
                                placeholder='enter password'
                                onChange={handleInput}
                                name='password'
                                value={input.password}
                                required
                            />
                        </div>
                        <button>Continue</button>
                        <p>By continuing, you agree to our <br />
                           <span style={{color:"brown"}} onClick={()=>navigate(`/termsconditions`)}> Terms & Conditions</span></p>
                    </form>

                </div>
            </div>
        </>
    )
}

export default Login





/**
 * Requirements:
 * The login button should trigger login() action
 * disable login button when email is empty or the password.length<6
 * disable login button when the login is processing
 * 
 * show error message when login failed
 * show alert box when login success
 * 
 */

import { useState } from "react"

function loginUtil({email, password}){
    const delay = 100;
    return new Promise((resolve, reject)=>{
            setTimeout(() => {
                if(password==="1234567" && !!email){
                    resolve();
                }else{
                    reject(new Error("invalid email or password"))
                }
            }, delay);
        }
    )

}

export default function Login(){


    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [pending, setPending] = useState(false);
    const [err, setErr] = useState("")

    const disableButton = !email || password.length<6 || pending

    const handleLogin = async ()=>{
        setErr(null)
        setPending(true)
        try{
            await loginUtil({email, password})
            alert("login success")
            setPending(false)
        }catch(e){
            setErr(e.message)
            setPending(false)
        }

    }

    const emailChange = (e)=>{
        let thisEmail = e.target.value
        setEmail(thisEmail)
    }

    const passwordChange = (e)=>{
        let thisPassword = e.target.value
        setPassword(thisPassword)
    }

    return (
        <div>

            <h3>
                Here are the requirement of this task
                <br/>
                1: when there is no email, or password.length shorter than 6, disable submit button
                <br/>
                2:When press the submit button, execute login handler. wait for the designed delay time
                <br/>
                3: during the waiting time, disable sumbit button
                <br/>
                4: if login success, have a alert, if error, display error message
            </h3>
            <br></br>
            <input 
                id={"email"} 
                type={"email"} 
                placeholder="enter email"
                value={email}
                onChange={emailChange }
            />
            <br/>
            <input 
                id={"password"} 
                type={"password"} 
                placeholder="enter password"
                value={password}
                onChange={passwordChange}
            />


            {pending == true ? 
                <div className="error message"> Pending is true</div>: 
                <div className="error message"> Pending is false</div>
            }
            <button
                onClick={handleLogin}
                disabled={disableButton}
            >login</button>

            <h2>{err}</h2>

            <br/>
            <br/>
            <br/>
            <br/>
            <p>email is : {email}</p>
            <p>password is : {password}</p>


        </div>
    )
}
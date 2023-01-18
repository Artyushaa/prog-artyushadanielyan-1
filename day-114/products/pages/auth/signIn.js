import SignInEmail from "./signInEmail";
import { useState } from "react";
import SignInPassword from "./signInPassword";

export default function SignIn() {
    const [email, setEmail] = useState('');
    // const [response, setResponse] = useState('')
    const [password, setPassword] = useState('');

    function handleClick(e) {
        e.preventDefault();
        let data = {
            email: email,
            password: password,
        }

        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        let raw = JSON.stringify(data);

        let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
        };

        fetch("https://420.canamaster.net/customer/auth/signin", requestOptions)
            .then(response => response.json())
            .then(result => {
                if(result) {
                    console.log(result,'result')
                    localStorage.setItem('token', result.token)
                    localStorage.setItem('expires', result.expires)
                }
            })
            .catch(error => console.log('error', error));
    }

    return (
        <>
            <SignInEmail type='emill' placeholder='Email' email={email} setEmail={setEmail} />
            <SignInPassword type='password' placeholder='Password' password={password} setPassword={setPassword} />
            <button onClick={handleClick}>Submit</button>
        </>
    )
}
import ConfirmPassword from "./ConfirmPassword";
import Emileinput from "./Emailinput";
import Password from "./Password";
import Username from "./Username";
import { useState } from "react";
import Link from "next/link";

export default function Register() {

    const [userName, setUserName] = useState({ value: '' });
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [response, setResponse] = useState('')

    function handleSubmit(e) {
        e.preventDefault();
        const data = {
            email: email,
            password: password
        }
        console.log(data)

        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        let raw = JSON.stringify(data);
        let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
        };
        fetch("https://420.canamaster.net/customer/auth/signup", requestOptions)
            .then(response => response.json())
            .then(result => setResponse([...response, result]))
            .catch(error => console.log('error', error));
    }



    return (
        <>
            <div className="create-account">
                <p className="create-account__header">Create an Account</p>
                <p className="create-account__have-account">Already have account? <span className="create-account--primary-color">Login</span></p>

                <form action="#" className="create-account__item" onSubmit={handleSubmit}>
                    <Username type='text' placeholder='Username' userName={userName} setUserName={setUserName} />
                    <Emileinput type='emill' placeholder='Email' email={email} setEmail={setEmail} />
                    <Password type='password' placeholder='Password' password={password} setPassword={setPassword} />
                    <ConfirmPassword type='password' placeholder='Confirm password' />
                    <p className="create-account__security-number">8 6 7 5</p>
                    <div className="create-account__job-title-container" >
                        {/* <RegisterField type='radio' name='traider' id='create-account__job-title1' label='I am a customer' />
                        <RegisterField type='radio' name='traider' id='create-account__job-title2' label='I am a vendor' /> */}
                    </div>
                    <button>Submit</button>
                    <button><Link href="/auth/signIn">SignIn</Link></button>
                </form>
            </div>
        </>
    )
}

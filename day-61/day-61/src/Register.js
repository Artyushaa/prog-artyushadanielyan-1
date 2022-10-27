import ConfirmPassword from "./ConfirmPassword";
import Emileinput from "./Emailinput";
import Password from "./Password";
import Username from "./Username";
import { useState } from "react";

export default function Register() {

    const [userName, setUserName] = useState({value: ''});
    const [email, setEmail] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        const a = {
            userName: userName.value
        }

        console.log(a.userName)
    }

    


return (
    <>
        <div className="create-account">
            <p className="create-account__header">Create an Account</p>
            <p className="create-account__have-account">Already have account? <span className="create-account--primary-color">Login</span></p>

            <form action="#" className="create-account__item" onSubmit={handleSubmit}>
                <Username type='text' placeholder='Username' userName={userName} setUserName={setUserName} />
                <Emileinput type='emill' placeholder='Email' email={email} setEmail={setEmail}/>
                <Password type='password' placeholder='Password' />
                <ConfirmPassword type='password' placeholder='Confirm password' />
                <p className="create-account__security-number">8 6 7 5</p>
                <div className="create-account__job-title-container" >
                    {/* <RegisterField type='radio' name='traider' id='create-account__job-title1' label='I am a customer' />
                        <RegisterField type='radio' name='traider' id='create-account__job-title2' label='I am a vendor' /> */}
                </div>
                <button>add</button>
            </form>
        </div>
    </>
)
}

import { useState } from "react"

export default function ConfirmPassword({ type, placeholder }) {

    const [password, setPassword] = useState('');
    const [err, setErr] = useState('');


    function handlePassword(e) {
        setPassword(e.target.value);
    }
    return (
        <>
            <input
                className="create-account__register"
                type={type}
                value={password}
                placeholder={placeholder}
                onChange={handlePassword}
            />
            {
                <div>{err}</div>
            }
        </>
    )
}
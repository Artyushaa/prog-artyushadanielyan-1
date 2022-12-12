import { useState } from "react"

export default function Password(props) {
    
    const [err, setErr] = useState('');

    const {
        type, placeholder, password, setPassword
    } = props;

    function handlePassword(e) {
        setPassword(e.target.value);
        if (e.target.value[0] !== e.target.value[0].toUpperCase()) {
            setErr('First letter must be capitalized')
        } else {
            setErr('')
        }
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
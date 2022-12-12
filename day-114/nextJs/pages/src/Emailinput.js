import { useEffect, useState } from "react"

export default function Emileinput({ type, placeholder, email, setEmail }) {

    
    const [err, setErr] = useState('');
    function handleEmail(e) {
        setEmail(e.target.value);
        for (let i = 0; i < e.target.value.length; i++) {
            if (e.target.value[i] === "@") {
                setErr('')
                break;
            } else {
                setErr("Put an @ sign");
            }
        }
    }

    return (
        <>
            <input
                className="create-account__register"
                type={type}
                value={email}
                placeholder={placeholder}
                onChange={handleEmail}
            />
            {
                <div>{err}</div>
            }
        </>
    )
}
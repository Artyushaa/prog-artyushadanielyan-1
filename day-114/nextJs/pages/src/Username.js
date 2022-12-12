import { useState } from "react"

export default function Username(props) {

    const {
        type, placeholder, userName, setUserName
    } = props;

    const [err, setErr] = useState('');

    function handleInput(e) {
        setUserName({ value: e.target.value })
        if (e.target.value.length < 5) {
            setErr('Write at least 5 letters')
        } else {
            setErr('')
        }
    }


    return (
        <>
            <input
                className="create-account__register"
                type={type}
                value={userName.value}
                placeholder={placeholder}
                onChange={handleInput}
            />
            {
                <div>{err}</div>
            }
        </>
    )
}
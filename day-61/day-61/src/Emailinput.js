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

    async function fetchIp (url) {
        const res = await fetch(url)
        const body = await res.json()
    
    
        return  {
            body, status: res.status
        }
        
    }

    useEffect(() => {
        let handle = setTimeout(() => {
            async function a () {
                let res = await fetchIp(`http://192.168.0.110:5000/check/${email}`)
                if (res.status === 409) {
                    setErr('aaaaaaa') 
            }
            }
            a()
        }, 500)
        return () => {
            clearTimeout(handle)
        }

    }, [email])

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
import Register from './src/Register';
import Link from 'next/link';

export default function App() {
    return (
        <>
            <Register />
            <Link href='auth/signIn'>Sign In</Link>
        </>
    )
}




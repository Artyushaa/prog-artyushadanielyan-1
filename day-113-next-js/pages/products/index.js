import Link from 'next/link';
import { useRouter } from 'next/router';


function HomePage() {
    const router = useRouter()
    const id = router.query.id

    return (
        <>
            <p>{id}</p>
            <Link href={`/products/Milk`}>Milk</Link>
            <br/>
            <Link href={`/products/Apple`}>Apple</Link>
        </>
    )
}

export default HomePage
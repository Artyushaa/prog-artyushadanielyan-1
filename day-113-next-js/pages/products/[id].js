import { useRouter } from "next/router"

export default function Id() {
    const router = useRouter()
    const id = router.query.id
    
    return (
        <>
            <h1>id: {id}</h1>
        </>
    )
}
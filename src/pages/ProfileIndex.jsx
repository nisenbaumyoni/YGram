import { useSearchParams } from "react-router-dom"

export function ProfileIndex() {

    const [searchParams,setSearchParams] = useSearchParams()

    return (
        <section className="home">
            <h1>ProfileIndex</h1>
        </section>
    )
}

import { useSearchParams } from "react-router-dom"

export function ProfileIndex() {

    const [searchParams,setSearchParams] = useSearchParams()

    return (
        <section className="indexpage">
            <h1>ProfileIndex</h1>
        </section>
    )
}

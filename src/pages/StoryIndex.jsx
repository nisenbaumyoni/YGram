import { useSearchParams } from "react-router-dom"

export function StoryIndex() {

    const [searchParams,setSearchParams] = useSearchParams()

    return (
        <section className="home">
            <h1>StoryIndex</h1>
        </section>
    )
}

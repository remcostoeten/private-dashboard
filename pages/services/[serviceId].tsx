import { useRouter } from "next/router"
import ArticleWithPicture from "../components/ArticleWIthPicture"

export default function ServicePage() {
    const router = useRouter()
    const { serviceId } = router.query

    return (
        <div>
            <ArticleWithPicture title="Loading..." description="Loading..." />
        </div>
    )
}

export async function getServerSideProps(context) {
    const { serviceId } = context.params
    const res = await fetch(`http://localhost:3000/data/services.json`)
    const services = await res.json()
    const service = services.find((s) => s.serviceId === serviceId)

    return {
        props: {
            ...service,
        },
    }
}

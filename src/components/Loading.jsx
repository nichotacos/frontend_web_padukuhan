import { Spinner } from "@nextui-org/react"

export default function Loader() {
    return (
        <div className="h-screen flex flex-col justify-center align-middle items-center">
            <Spinner size="lg" color="warning">Loading...</Spinner>
        </div>
    )
}
import { Appbar } from "../components/Appbar"
import { Balance } from "../components/Balance"
import Users from "../components/Users"

export default function Dashboard() {
    return (
        <div className="min-h-screen bg-zinc-900">
            <Appbar />
            <div className="max-w-6xl mx-auto px-4 py-8 pt-24">
                <div className="grid gap-8">
                    <Balance />
                    <Users />
                </div>
            </div>
        </div>
    )
}

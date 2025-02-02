import { Appbar } from "../components/Appbar"
import { Balance } from "../components/Balance"
import { Users } from "../components/Users"
import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react"

export default function Dashboard() {
    const location = useLocation();
    const [showSuccess, setShowSuccess] = useState(false);

    useEffect(() => {
        if (location.state?.transferSuccess) {
            setShowSuccess(true);
            // Remove the success message after 3 seconds
            const timer = setTimeout(() => {
                setShowSuccess(false);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [location]);

    return (
        <div className="min-h-screen bg-zinc-900">
            <Appbar />
            <div className="max-w-6xl mx-auto px-4 py-8 pt-24">
                {/* Success Toast */}
                {showSuccess && (
                    <div className="fixed top-20 right-4 bg-green-500/10 border border-green-500/20 text-green-500 px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 animate-fade-in-down">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        Payment Successful!
                    </div>
                )}
                <div className="grid gap-8">
                    <Balance />
                    <Users />
                </div>
            </div>
        </div>
    )
}

import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import { ArrowLeft } from "lucide-react";

export default function SendMoney() {
    const [searchParams] = useSearchParams();
    const [amount, setAmount] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const recipientId = searchParams.get("id");
    const recipientName = searchParams.get("name");

    const handleTransfer = async () => {
        if (!amount || isNaN(amount) || amount <= 0) {
            setError("Please enter a valid amount");
            return;
        }

        try {
            setLoading(true);
            setError("");
            
            await axios.post("http://localhost:3000/api/v1/account/transfer", {
                to: recipientId,
                amount: parseFloat(amount)
            }, {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token")
                }
            });

            navigate("/dashboard");
        } catch (error) {
            console.error("Transfer error:", error);
            setError(error.response?.data?.message || "Failed to transfer money");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-zinc-900 flex items-center justify-center p-4">
            <div className="max-w-md w-full bg-zinc-800/30 backdrop-blur-sm rounded-lg border border-zinc-700/50 shadow-lg">
                <div className="p-6">
                    {/* Header */}
                    <button
                        onClick={() => navigate("/dashboard")}
                        className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-6"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        <span>Back to Dashboard</span>
                    </button>

                    <div className="space-y-6">
                        {/* User Info */}
                        <div className="flex items-center gap-4">
                            <div className="h-16 w-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                                <span className="text-2xl font-medium text-white">
                                    {recipientName?.[0]?.toUpperCase()}
                                </span>
                            </div>
                            <div>
                                <h2 className="text-xl font-semibold text-white">
                                    Send Money to {recipientName}
                                </h2>
                                <p className="text-zinc-400">
                                    Transfer money instantly
                                </p>
                            </div>
                        </div>

                        {/* Amount Input */}
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-zinc-300">
                                Amount (in ₹)
                            </label>
                            <input
                                type="number"
                                value={amount}
                                onChange={(e) => {
                                    setAmount(e.target.value);
                                    setError("");
                                }}
                                placeholder="Enter amount"
                                className="w-full px-4 py-2 rounded-lg bg-zinc-900 text-white border border-zinc-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors placeholder-zinc-400"
                            />
                        </div>

                        {/* Error Message */}
                        {error && (
                            <div className="text-red-500 text-center py-2 px-4 bg-red-500/10 rounded-lg border border-red-500/20">
                                {error}
                            </div>
                        )}

                        {/* Transfer Button */}
                        <button
                            onClick={handleTransfer}
                            disabled={loading}
                            className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl text-white py-2 px-4 rounded-lg transition-all hover:shadow-lg hover:shadow-blue-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? "Processing..." : "Transfer Money"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
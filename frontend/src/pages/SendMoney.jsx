import { useSearchParams, useNavigate } from 'react-router-dom';
import axios from "axios";
import { useState, useEffect } from 'react';

const SendMoney = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");
    const name = searchParams.get("name");
    const [amount, setAmount] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        if (!id || !name) {
            navigate('/dashboard');
            return;
        }
    }, [id, name, navigate]);

    const handleTransfer = async (e) => {
        e.preventDefault(); // Prevent form submission
        if (!amount || amount <= 0) {
            setError("Please enter a valid amount");
            return;
        }
        setLoading(true);
        setError("");
        
        try {
            await axios.post("http://localhost:3000/api/v1/account/transfer", {
                to: id,
                amount: parseInt(amount)
            }, {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token")
                }
            });
            
            setSuccess(true);
            setTimeout(() => {
                navigate("/dashboard");
            }, 2000);
        } catch (err) {
            setError(err.response?.data?.message || "Transfer failed");
        } finally {
            setLoading(false);
        }
    };

    if (!id || !name) {
        return null;
    }

    return (
        <div className="flex justify-center h-screen bg-zinc-900">
            <div className="h-full flex flex-col justify-center relative">
                <button 
                    onClick={() => navigate('/dashboard')}
                    className="absolute top-4 left-4 text-white hover:text-gray-300 flex items-center gap-2"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                    </svg>
                    Back to Dashboard
                </button>

                <form onSubmit={handleTransfer} className="border h-min text-card-foreground max-w-md p-4 space-y-8 w-96 bg-zinc-800 shadow-lg rounded-lg">
                    <div className="flex flex-col space-y-1.5 p-6">
                        <h2 className="text-3xl font-bold text-center text-white">Send Money</h2>
                    </div>
                    <div className="p-6">
                        <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
                                <span className="text-2xl text-white">{name[0].toUpperCase()}</span>
                            </div>
                            <h3 className="text-2xl font-semibold text-white">{name}</h3>
                        </div>
                        <div className="space-y-4 mt-6">
                            <div className="space-y-2">
                                <label
                                    className="text-sm font-medium leading-none text-white"
                                    htmlFor="amount"
                                >
                                    Amount (in Rs)
                                </label>
                                <input
                                    onChange={(e) => {
                                        setAmount(e.target.value);
                                        setError("");
                                    }}
                                    type="number"
                                    className="flex h-10 w-full rounded-md border border-zinc-600 bg-zinc-700 px-3 py-2 text-sm text-white focus:outline-none focus:border-green-500"
                                    id="amount"
                                    placeholder="Enter amount"
                                    value={amount}
                                    disabled={loading || success}
                                    required
                                />
                                {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
                                {success && <p className="text-green-500 text-sm mt-1">Transfer successful! Redirecting...</p>}
                            </div>
                            <button 
                                type="submit"
                                disabled={loading || success}
                                className={`justify-center rounded-md text-sm font-medium ring-offset-background transition-colors h-10 px-4 py-2 w-full bg-green-500 text-white hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed`}
                            >
                                {loading ? "Processing..." : success ? "Transfer Complete" : "Initiate Transfer"}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SendMoney
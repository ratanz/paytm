import { useEffect, useState } from 'react';
import axios from 'axios';
import { Wallet } from 'lucide-react';

export function Balance() {
    const [balance, setBalance] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBalance = async () => {
            try {
                const response = await axios.get("http://localhost:3000/api/v1/account/balance", {
                    headers: {
                        Authorization: "Bearer " + localStorage.getItem("token")
                    }
                });
                setBalance(response.data.balance);
            } catch (error) {
                console.error("Error fetching balance:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchBalance();
    }, []);

    return (
        <div className="bg-zinc-800/50 rounded-lg border border-zinc-700 p-6">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                        <Wallet className="h-6 w-6 text-blue-500" />
                    </div>
                    <div>
                        <h2 className="text-lg font-medium text-white">
                            Your Balance
                        </h2>
                        <p className="text-sm text-zinc-400">
                            Available funds in your account
                        </p>
                    </div>
                </div>
                <div className="text-2xl font-bold text-white">
                    {loading ? (
                        <div className="text-zinc-400 text-lg">Loading...</div>
                    ) : (
                        <div className="flex items-baseline gap-1">
                            <span className="text-lg text-zinc-400">₹</span>
                            <span>{balance?.toLocaleString('en-IN') || '0'}</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
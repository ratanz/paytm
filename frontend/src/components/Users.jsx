import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Search } from "lucide-react";

export default function Users() {
    const [users, setUsers] = useState([]);
    const [filter, setFilter] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const token = localStorage.getItem("token");
                if (!token) {
                    navigate("/signin");
                    return;
                }

                setLoading(true);
                setError("");
                const response = await axios.get("http://localhost:3000/api/v1/user/bulk?filter=" + filter, {
                    headers: {
                        Authorization: "Bearer " + token
                    }
                });

                // Safely get current user ID
                let currentUserId;
                try {
                    const userData = localStorage.getItem("userData");
                    currentUserId = userData ? JSON.parse(userData)._id : null;
                } catch (e) {
                    console.warn("Error parsing userData:", e);
                    currentUserId = null;
                }

                // Filter out current user if we have their ID
                const filteredUsers = currentUserId 
                    ? response.data.user.filter(user => user._id !== currentUserId)
                    : response.data.user;
                
                setUsers(filteredUsers);
            } catch (error) {
                console.error("Error fetching users:", error);
                if (error.response?.status === 403) {
                    navigate("/signin");
                } else {
                    setError("Failed to load users. Please try again.");
                }
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, [filter, navigate]);

    return (
        <div className="bg-zinc-800/50 rounded-lg border border-zinc-700 p-6">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-medium text-white">
                    Users
                </h2>
                <div className="relative w-72">
                    <input 
                        onChange={(e) => {
                            setFilter(e.target.value);
                            setLoading(true);
                        }} 
                        type="text" 
                        placeholder="Search users..." 
                        className="w-full px-4 py-2 pl-10 rounded-lg bg-zinc-900 text-white border border-zinc-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                    />
                    <Search className="absolute left-3 top-2.5 h-5 w-5 text-zinc-400" />
                </div>
            </div>

            {error && (
                <div className="text-red-500 text-center py-4 bg-red-500/10 rounded-lg border border-red-500/20">
                    {error}
                </div>
            )}

            <div className="space-y-4">
                {loading ? (
                    <div className="text-zinc-400 text-center py-8">Loading users...</div>
                ) : users.length === 0 ? (
                    <div className="text-zinc-400 text-center py-8">No users found</div>
                ) : (
                    users.map(user => <UserCard key={user._id} user={user} />)
                )}
            </div>
        </div>
    )
}

function UserCard({ user }) {
    const navigate = useNavigate();

    return (
        <div className="flex justify-between items-center p-4 rounded-lg hover:bg-zinc-700/30 transition-colors border border-zinc-700/50">
            <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                    <span className="text-lg font-medium text-white">
                        {user.firstName[0].toUpperCase()}
                    </span>
                </div>
                <div>
                    <h3 className="text-white font-medium">
                        {user.firstName} {user.lastName}
                    </h3>
                    <p className="text-sm text-zinc-400">
                        {user.username}
                    </p>
                </div>
            </div>

            <button
                onClick={() => {
                    navigate("/send-money?id=" + user._id + "&name=" + user.firstName);
                }}
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl text-white px-4 py-2 rounded-lg transition-all hover:shadow-lg hover:shadow-blue-500/20"
            >
                Send Money
            </button>
        </div>
    )
}

import { useEffect, useState } from "react"
import { Button } from "./Button"
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Users = () => {
    const [users, setUsers] = useState([]);
    const [filter, setFilter] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get("http://localhost:3000/api/v1/user/bulk?filter=" + filter, {
                    headers: {
                        Authorization: "Bearer " + localStorage.getItem("token")
                    }
                });
                setUsers(response.data.user.filter(user => 
                    user._id !== JSON.parse(localStorage.getItem("userData"))?._id
                ));
            } catch (error) {
                console.error("Error fetching users:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, [filter]);

    return (
        <div className="bg-zinc-800/30 p-6 rounded-lg shadow-lg mt-6">
            <div className="text-white font-semibold text-lg mb-4">
                Users
            </div>
            <div className="mb-4">
                <input 
                    onChange={(e) => {
                        setFilter(e.target.value);
                        setLoading(true);
                    }} 
                    type="text" 
                    placeholder="Search users..." 
                    className="w-full px-4 py-2 rounded-lg bg-zinc-900 text-white border border-zinc-600 focus:outline-none focus:border-blue-500"
                />
            </div>
            <div className="space-y-4">
                {loading ? (
                    <div className="text-gray-400 text-center py-4">Loading users...</div>
                ) : users.length === 0 ? (
                    <div className="text-gray-400 text-center py-4">No users found</div>
                ) : (
                    users.map(user => <User key={user._id} user={user} />)
                )}
            </div>
        </div>
    )
}

function User({user}) {
    const navigate = useNavigate();

    return (
        <div className="flex justify-between items-center p-3 rounded-lg hover:bg-zinc-700/30 transition-colors">
            <div className="flex items-center">
                <div className="rounded-full h-12 w-12 bg-slate-700 flex justify-center items-center">
                    <div className="text-xl text-white">
                        {user.firstName[0]}
                    </div>
                </div>
                <div className="ml-4">
                    <div className="text-white">
                        {user.firstName} {user.lastName}
                    </div>
                </div>
            </div>

            <button
                onClick={() => {
                    navigate("/send-money?id=" + user._id + "&name=" + user.firstName);
                }}
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors"
            >
                Send Money
            </button>
        </div>
    )
}
export default Users

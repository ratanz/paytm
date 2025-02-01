import { useEffect, useState } from "react";
import axios from "axios";

export const Appbar = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:3000/api/v1/user/bulk?filter=")
            .then(response => {
                // Assuming the first user is the logged-in user
                setUser(response.data.user[0])
            })
    }, [])

    return (
        <div className="fixed top-2 left-0 right-0 z-50">
            <div className="backdrop-blur-sm shadow-lg h-14 flex justify-between border- border-zinc-700/90">
                <div className="flex flex-col justify-center h-full ml-6">
                    <span className="text-white text-xl font-semibold">PayTM</span>
                </div>
                <div className="flex">
                    <div className="flex flex-col justify-center h-full mr-4">
                        <span className="text-gray-300 text-md">
                            Hello, {user ? `${user.firstName} ${user.lastName}` : 'User'}
                        </span>
                    </div>
                    <div className="rounded-full h-10 w-10 bg-zinc-700/80 backdrop-blur-sm flex justify-center mt-2 mr-6">
                        <div className="flex flex-col justify-center h-full text-xl text-white">
                            {user ? user.firstName[0] : 'U'}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
import { useNavigate } from 'react-router-dom';
import { LogOut } from 'lucide-react';

export function Appbar() {
    const navigate = useNavigate();
    const userData = JSON.parse(localStorage.getItem("userData") || "{}");

    return (
        <div className="fixed top-0 left-0 right-0 bg-zinc-800/50 backdrop-blur-sm border-b border-zinc-700/50 z-50">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <button 
                        onClick={() => navigate("/dashboard")}
                        className="text-xl font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
                    >
                        PayEase
                    </button>

                    {/* User Info & Logout */}
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-3">
                            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                                <span className="text-sm font-medium text-white">
                                    {userData.firstName?.[0]?.toUpperCase() || 'U'}
                                </span>
                            </div>
                            <div className="hidden sm:block">
                                <div className="text-sm font-medium text-white">
                                    {userData.firstName} {userData.lastName}
                                </div>
                                <div className="text-xs text-zinc-400">
                                    {userData.username}
                                </div>
                            </div>
                        </div>

                        <button
                            onClick={() => {
                                localStorage.clear();
                                navigate("/signin");
                            }}
                            className="flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-zinc-700/50 text-zinc-400 hover:text-white transition-colors"
                        >
                            <LogOut className="h-4 w-4" />
                            <span className="text-sm hidden sm:block">Logout</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
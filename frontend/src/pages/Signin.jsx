import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Heading } from '../components/Heading'
import { SubHeading } from '../components/SubHeading'
import { InputBox } from '../components/InputBox'
import { Button } from '../components/Button'
import { ButtonWarning } from '../components/ButtonWarning'

export default function Signin() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    return (
        <div className="bg-zinc-900 min-h-screen flex items-center justify-center p-4">
            <div className="max-w-md w-full bg-zinc-800/30 backdrop-blur-sm rounded-lg border border-zinc-700/50 shadow-lg">
                <div className="p-6 space-y-4">
                    <Heading label="Sign In" />
                    <SubHeading label="Welcome back to Pay-Ease App" />

                    <div className="mt-6 space-y-4">
                        <InputBox
                            onChange={e => setUsername(e.target.value)}
                            label="Email"
                            placeholder="johndoe@example.com"
                            type="email"
                        />
                        <InputBox
                            onChange={e => setPassword(e.target.value)}
                            label="Password"
                            placeholder="********"
                            type="password"
                        />

                        <div className="pt-2">
                            <Button
                                label="Sign In"
                                onClick={async () => {
                                    try {
                                        const response = await axios.post("http://localhost:3000/api/v1/user/signin", {
                                            username,
                                            password
                                        });
                                        localStorage.setItem("token", response.data.token);
                                        localStorage.setItem("userData", JSON.stringify(response.data.user));
                                        navigate("/dashboard");
                                    } catch (error) {
                                        console.error("Sign in failed:", error);
                                    }
                                }}
                            />
                        </div>

                        <ButtonWarning
                            label="Don't have an account?"
                            buttonText="Sign Up"
                            onClick={() => navigate("/signup")}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}


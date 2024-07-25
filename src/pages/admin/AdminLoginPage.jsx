import { Button, Input } from "@nextui-org/react";
import { useState } from "react"
import { useNavigate } from "react-router";
import { toast } from "sonner";
import { LoginAuth } from "../../api/ApiAuth";

export default function AdminLoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();

        if (email === "" || password === "") {
            toast.error("Email dan password harus diisi");
            return;
        }

        const formData = new FormData();
        formData.append("email", email);
        formData.append("password", password);

        try {
            const response = await LoginAuth(formData);
            console.log(response);

            if (response.message === 'Wrong credentials') {
                toast.error("Email atau password salah");
                return;
            } else if (response.message) {
                toast.success(response.message);
            }

            if (response.token && response.token.plainTextToken && response.data) {
                localStorage.setItem("token", response.token.plainTextToken);
                localStorage.setItem("user", JSON.stringify(response.data));
                navigate("/admin");
            } else {
                toast.error("Unexpected response structure");
                console.error("Unexpected response structure:", response);
            }
        } catch (error) {
            toast.error("Terjadi kesalahan saat login");
            console.error("Login error:", error);
        }
    };

    return (
        <div className="flex flex-row" style={{
            backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(/img/gk_landscape.jpg)",
            backgroundSize: "cover",
            height: "100vh",
        }}>
            <div className="basis-2/3 h-screen">
                <div className="h-full flex flex-col justify-center ml-48">
                    <p className="font-roboto text-5xl text-white font-bold">Selamat Datang di Halaman Admin</p>
                </div>
            </div>
            <div className="bg-duwet-main-bg basis-1/3 h-screen flex flex-col justify-center items-center">
                <div className="border-2 border-black rounded-large p-8 w-3/5 flex flex-col">
                    <p className="font-roboto font-bold text-center text-3xl pb-8 pt-4">Login</p>
                    <form onSubmit={handleLogin}>
                        <Input
                            label="Email"
                            type="email"
                            placeholder="Masukkan email anda"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="pb-4"
                            name="email"
                        />
                        <Input
                            label="Password"
                            type="password"
                            placeholder="Masukkan password anda"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="pb-4"
                            name="password"
                        />
                        <Button color="warning" variant="solid" type="submit">
                            Login
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    )
}
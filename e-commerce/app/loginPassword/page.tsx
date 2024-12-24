"use client";
import React, { useState } from "react";
import { Input } from "../components/ui/input";
import { auth } from "../firebase/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter, useSearchParams } from "next/navigation";

export default function LoginScreen() {
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();
    const searchParams = useSearchParams();
    const email = searchParams.get("email");

    const handleLoginSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            // E-posta kontrolü
            if (!email) {
                setError("Geçerli bir e-posta adresi bulunamadı.");
                return;
            }

            // Kullanıcıyı şifre ile oturum aç
            await signInWithEmailAndPassword(auth, email, password);
            console.log("Başarılı giriş");
            router.push("/"); // Ana sayfaya yönlendirme
        } catch (error: unknown) {
            if (error instanceof Error) {
                setError("Giriş hatası: " + error.message);
            } else {
                setError("Bilinmeyen bir hata oluştu.");
            }
        }
    };

    return (
        <div className="max-w-md w-full mx-auto p-4 md:p-8 bg-white dark:bg-black rounded-lg shadow-lg">
            <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200 text-center">
                Şifrenizi Girin
            </h2>
            <form className="my-8" onSubmit={handleLoginSubmit}>
                <div className="mb-4">
                    <label
                        htmlFor="password"
                        className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1"
                    >
                        Şifre
                    </label>
                    <Input
                        id="password"
                        placeholder="••••••••"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <button
                    className="bg-gradient-to-br from-black to-neutral-600 w-full text-white rounded-md h-10 mt-4 hover:bg-neutral-800 transition-all duration-300"
                    type="submit"
                >
                    Giriş Yap &rarr;
                </button>

                {error && (
                    <p className="text-red-500 mt-2 text-center font-medium">
                        {error}
                    </p>
                )}
            </form>
        </div>
    );
}

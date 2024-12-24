"use client";
import React, { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "../../lib/utils";
import { auth } from "../../firebase/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from 'next/navigation';

// ✅ FirebaseError Tipi
import { FirebaseError } from "firebase/app";

const SignupFormDemo = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            await signInWithEmailAndPassword(auth, email, password);
            console.log("Kullanıcı başarıyla giriş yaptı.");
            router.push("/");
        } catch (error: unknown) {
            if (error instanceof FirebaseError) {
                console.error("Giriş sırasında hata oluştu:", error.message);
                switch (error.code) {
                    case "auth/user-not-found":
                        setError("Bu e-posta ile kayıtlı bir kullanıcı bulunamadı.");
                        break;
                    case "auth/wrong-password":
                        setError("E-posta veya şifre hatalı.");
                        break;
                    case "auth/too-many-requests":
                        setError("Çok fazla başarısız giriş denemesi. Lütfen daha sonra tekrar deneyin.");
                        break;
                    default:
                        setError("Giriş sırasında bir hata oluştu. Lütfen tekrar deneyin.");
                        break;
                }
            } else {
                setError("Bilinmeyen bir hata oluştu.");
            }
        }
    };

    return (
        <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
            <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
                Giriş Yap
            </h2>
            <form className="my-8" onSubmit={handleSubmit}>
                {error && <p className="text-red-500">{error}</p>}

                <LabelInputContainer className="mb-4">
                    <Label htmlFor="email">E-posta adresi</Label>
                    <Input
                        id="email"
                        placeholder="e-posta*"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </LabelInputContainer>

                <LabelInputContainer className="mb-4">
                    <Label htmlFor="password">Şifre</Label>
                    <Input
                        id="password"
                        placeholder="••••••••"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </LabelInputContainer>

                <button
                    className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                    type="submit"
                >
                    Giriş Yap &rarr;
                    <BottomGradient />
                </button>

                <br />
                <button
                    className="mt-4 bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                    type="button"
                    onClick={() => window.location.href = "/loginRegister"}
                >
                    Kayıt Ol
                    <BottomGradient />
                </button>
            </form>
        </div>
    );
};

const BottomGradient = () => {
    return (
        <>
            <span
                className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
            />
            <span
                className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent"
            />
        </>
    );
};

const LabelInputContainer = ({
                                 children,
                                 className,
                             }: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn("flex flex-col space-y-2 w-full", className)}>
            {children}
        </div>
    );
};

export default SignupFormDemo;

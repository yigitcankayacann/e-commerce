"use client";
import React, { useState } from "react";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { cn } from "../lib/utils";
import { auth, db } from "../firebase/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";

export default function LoginRegisterPage() {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            // Kullanıcı kaydı oluştur
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Firestore'a ek bilgiler kaydet
            await setDoc(doc(db, "users", user.uid), {
                firstname,
                lastname,
                email,
                uid: user.uid,
            });

            console.log("Kullanıcı başarıyla kaydedildi ve Firestore'a bilgiler eklendi.");
            window.location.href = "/login";
        } catch (error: unknown) {
            if (error instanceof Error) {
                setError("Kayıt hatası: " + error.message);
            } else {
                setError("Bilinmeyen bir hata oluştu.");
            }
        }
    };

    return (
        <div className="max-w-md w-full mx-auto rounded-lg p-4 md:p-8 shadow-lg bg-white dark:bg-black mt-40">
            <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200 text-center">
                Seni Üye Yapalım
            </h2>
            <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300 text-center">
                Bilgilerinizi doldurarak üye olun.
            </p>
            <form className="my-8" onSubmit={handleSubmit}>
                {error && <p className="text-red-500 mb-4 text-center">{error}</p>}

                {/* İsim ve Soyisim */}
                <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                    <LabelInputContainer>
                        <Label htmlFor="firstname">İsim</Label>
                        <Input
                            id="firstname"
                            type="text"
                            value={firstname}
                            onChange={(e) => setFirstname(e.target.value)}
                        />
                    </LabelInputContainer>
                    <LabelInputContainer>
                        <Label htmlFor="lastname">Soyisim</Label>
                        <Input
                            id="lastname"
                            type="text"
                            value={lastname}
                            onChange={(e) => setLastname(e.target.value)}
                        />
                    </LabelInputContainer>
                </div>

                {/* E-posta */}
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="email">E-posta Adresi</Label>
                    <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </LabelInputContainer>

                {/* Şifre */}
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="password">Şifre</Label>
                    <Input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </LabelInputContainer>

                {/* Kayıt Ol Butonu */}
                <button
                    type="submit"
                    className="bg-gradient-to-br from-black to-neutral-600 w-full text-white rounded-md h-10 mt-4 hover:bg-neutral-800 transition-all duration-300"
                >
                    Üye Ol &rarr;
                </button>
            </form>
        </div>
    );
}

// ✅ Yardımcı Bileşen: Label ve Input Wrapper
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

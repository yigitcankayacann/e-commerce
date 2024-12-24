"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";

const ProfilePage = () => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true); // Yüklenme durumu
    const router = useRouter();
    const auth = getAuth(); // Firebase auth

    useEffect(() => {
        // Firebase onAuthStateChanged ile oturum durumunu kontrol et
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser); // Kullanıcı oturum açmışsa set et
            } else {
                // Kullanıcı oturum açmamışsa login sayfasına yönlendir
                router.push("/login");
            }
            setLoading(false); // Oturum durumu belirlendiğinde loading false
        });

        // Temizleme işlemi
        return () => unsubscribe();
    }, [auth, router]);

    if (loading) {
        return <div>Yükleniyor...</div>; // Yüklenme durumu
    }

    // Eğer kullanıcı yoksa ve loading durumu false ise (yönlendirme zaten yapılacak)
    if (!user) {
        return null;
    }

    return (
        <div>
            <h1>Merhaba, {user.email}</h1> {/* Kullanıcı email adresini göster */}
        </div>
    );
};

export default ProfilePage;

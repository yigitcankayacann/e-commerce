"use client";
import React, { createContext, useContext, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BsFillBasket2Fill } from "react-icons/bs";
import { useCart } from "@/app/context/CartContext";
import { notification } from "antd"; // Ant Design'dan notification API'si

// Modal Context oluşturuluyor
const ModalContext = createContext(undefined);

// Modal sağlayıcısı
export const ModalProvider = ({ children }) => {
    const [open, setOpen] = useState(false);

    return (
        <ModalContext.Provider value={{ open, setOpen }}>
            {children}
        </ModalContext.Provider>
    );
};

export const useModal = () => {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error("useModal must be used within a ModalProvider");
    }
    return context;
};

// Modal ana bileşeni
export function Modal({ children }) {
    return <ModalProvider>{children}</ModalProvider>;
}

// Modal tetikleyici buton bileşeni (dışarı çıkartıldı)
export const ModalTrigger = ({ children, className, onClick }) => {
    const { setOpen } = useModal();
    return (
        <button
            className={`px-4 py-2 rounded-md text-black dark:text-white text-center relative overflow-hidden ${className}`}
            onClick={(e) => {
                if (onClick) onClick(e); // handleClick fonksiyonunu çağırır
                setOpen(true); // Modal'ı açar
            }}
        >
            {children}
        </button>
    );
};

// Sepete Ekle butonu ve modal tetikleyicisi
export function SepeteEkleButonu({ product }) {
    const { addToCart } = useCart(); // useCart'tan addToCart fonksiyonunu alıyoruz
    const [api, contextHolder] = notification.useNotification(); // Notification API'sini kullanıyoruz

    // Bildirimi açan fonksiyon (her bildirim için unique key oluşturuyoruz)
    const openNotification = (type, message) => {
        const key = `${product.title}-${Date.now()}`; // Unique key based on product title and current time

        api.info({
            key, // Her bildirim için benzersiz bir key
            message: message, // Bildirim başlığı
            description: type === 'success' ? '' : 'Ürün sepete eklenemedi. Lütfen tekrar deneyin.',
            placement: 'bottomRight', // Sağ alt köşede gösterilecek
            duration: 4, // 4 saniye sonra kaybolacak
        });
    };

    // handleClick fonksiyonu sepete ürün ekleme işlemi için
    const handleClick = () => {
        try {
            addToCart(product); // Sepete ekle
            openNotification('success', 'Ürün başarıyla sepete eklendi!');
        } catch {
            openNotification('error', 'Ürün sepete eklenemedi. Lütfen tekrar deneyin.');
        }
    };


    return (
        <div>
            {contextHolder} {/* Notification API'nin çalışması için gerekli */}
            <Modal>
                <ModalTrigger
                    className="bg-white text-black px-4 py-2 rounded-md border border-black transition duration-500 flex justify-center group/modal-btn ml-0"
                    onClick={handleClick} // handleClick fonksiyonunu çağırıyoruz
                >
                    <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
                        Sepete Ekle
                    </span>
                    <div
                        className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-black z-20"
                    >
                        <BsFillBasket2Fill className="text-black h-6 w-6" />
                    </div>
                </ModalTrigger>
            </Modal>
        </div>
    );
}

// Modal gövdesi bileşeni
export const ModalBody = ({ children, className }) => {
    const { open } = useModal();

    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [open]);

    const modalRef = useRef(null);
    const { setOpen } = useModal();
    useOutsideClick(modalRef, () => setOpen(false));

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, backdropFilter: "blur(10px)" }}
                    exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
                    className="fixed inset-0 h-full w-full flex items-center justify-center z-50"
                >
                    <Overlay />
                    <motion.div
                        ref={modalRef}
                        className={`min-h-[50%] max-h-[90%] md:max-w-[40%] bg-white dark:bg-neutral-950 border border-transparent dark:border-neutral-800 md:rounded-2xl relative z-50 flex flex-col flex-1 overflow-hidden ${className}`}
                        initial={{ opacity: 0, scale: 0.5, rotateX: 40, y: 40 }}
                        animate={{ opacity: 1, scale: 1, rotateX: 0, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, rotateX: 10 }}
                        transition={{ type: "spring", stiffness: 260, damping: 15 }}
                    >
                        <CloseIcon />
                        {children}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

// Modal içerik bileşeni
export const ModalContent = ({children, className}) => {
    return <div className={`flex flex-col flex-1 p-8 md:p-10 ${className}`}>{children}</div>;
};

// Modal alt kısmı bileşeni
export const ModalFooter = ({children, className}) => {
    return (
        <div className={`flex justify-end p-4 bg-gray-100 dark:bg-neutral-900 ${className}`}>
            {children}
        </div>
    );
};

// Modal arkaplan (overlay) bileşeni
const Overlay = ({className}) => {
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1, backdropFilter: "blur(10px)"}}
            exit={{opacity: 0, backdropFilter: "blur(0px)"}}
            className={`fixed inset-0 h-full w-full bg-black bg-opacity-50 z-50 ${className}`}
        ></motion.div>
    );
};

// Modal kapat butonu
const CloseIcon = () => {
    const {setOpen} = useModal();
    return (
        <button onClick={() => setOpen(false)} className="absolute top-4 right-4 group">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-black dark:text-white h-4 w-4 group-hover:scale-125 group-hover:rotate-3 transition duration-200"
            >
                <path d="M18 6l-12 12"/>
                <path d="M6 6l12 12"/>
            </svg>
        </button>
    );
};

// Modal dışında tıklama algılayıcısı
export const useOutsideClick = (ref, callback) => {
    useEffect(() => {
        const listener = (event) => {
            if (!ref.current || ref.current.contains(event.target)) {
                return;
            }
            callback(event);
        };

        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);

        return () => {
            document.removeEventListener("mousedown", listener);
            document.removeEventListener("touchstart", listener);
        };
    }, [ref, callback]);
};

"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

// Sepet Context'i oluşturma
const CartContext = createContext();

export const CartProvider = ({ children }) => {
    // Başlangıçta localStorage'dan sepet verilerini çekiyoruz
    const [cartItems, setCartItems] = useState(() => {
        if (typeof window !== 'undefined') {
            const savedCart = localStorage.getItem('cart');
            return savedCart ? JSON.parse(savedCart) : [];
        }
        return [];
    });

    // Sepet verileri değiştiğinde, localStorage'a kaydediyoruz
    useEffect(() => {
        if (cartItems.length > 0) {
            localStorage.setItem('cart', JSON.stringify(cartItems));
        } else {
            localStorage.removeItem('cart');
        }
    }, [cartItems]);

    // Sepete ürün ekleme fonksiyonu
    const addToCart = (item) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find((i) => i.title === item.title);
            if (existingItem) {
                return prevItems.map((i) =>
                    i.title === item.title ? { ...i, quantity: i.quantity + 1 } : i
                );
            }
            return [...prevItems, { ...item, quantity: 1 }];
        });
    };

    // Sepetten ürün kaldırma fonksiyonu
    const removeFromCart = (title) => {
        setCartItems((prevItems) =>
            prevItems.filter((item) => item.title !== title)
        );
    };

    // Sepetteki ürünlerin miktarını güncelleme fonksiyonu
    const updateCartItemQuantity = (title, quantity) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.title === title ? { ...item, quantity } : item
            )
        );
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateCartItemQuantity }}>
            {children}
        </CartContext.Provider>
    );
};

// Sepet Context'ini kullanmak için özel bir hook
export const useCart = () => {
    return useContext(CartContext);
};
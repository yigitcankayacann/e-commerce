import React from "react";
import { useCart } from "../context/CartContext";

export default function QuantitySelector({ item }) {
    const { updateCartItemQuantity } = useCart();

    const increment = () => {
        updateCartItemQuantity(item.title, item.quantity + 1);
    };

    const decrement = () => {
        if (item.quantity > 1) {
            updateCartItemQuantity(item.title, item.quantity - 1);
        }
    };

    return (
        <div className="flex items-center border bg-gray-100 rounded-full overflow-hidden">
            <button
                onClick={(e) => {
                    e.stopPropagation();
                    decrement();
                }}
                className="px-4 py-2 text-sm font-bold text-black hover:text-white hover:bg-red-500"
            >
                -
            </button>
            <div className="px-4 py-2 text-sm font-bold text-black text-center">
                {item.quantity}
                <div className="text-xs text-gray-500">Adet</div>
            </div>
            <button
                onClick={(e) => {
                    e.stopPropagation();
                    increment();
                }}
                className="px-4 py-2 text-sm font-bold text-black hover:text-white hover:bg-green-500"
            >
                +
            </button>
        </div>
    );
}

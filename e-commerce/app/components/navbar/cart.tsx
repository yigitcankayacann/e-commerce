"use client";
import { BsFillBasket2Fill } from 'react-icons/bs';
import { useRouter } from 'next/navigation';

const Cart = () => {
    const router = useRouter();

    const handleBasketClick = () => {
        router.push('/sepet');
    };

    return (
        <div
            onClick={handleBasketClick}
            style={{ position: 'fixed', top: '20px', right: '16px', cursor: 'pointer', zIndex: 50 }}
            className="flex items-center justify-center sm:w-[40px] sm:h-[40px] md:w-[50px] md:h-[50px] lg:w-[60px] lg:h-[60px] bg-white rounded-full border border-black/[0.2] shadow-md"
        >
            <BsFillBasket2Fill size="32" className="text-black" />
        </div>
    );
};

export default Cart;

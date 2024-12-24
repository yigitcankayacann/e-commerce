import { GiHamburgerMenu } from "react-icons/gi";
import {BsFillBasket2Fill} from "react-icons/bs";

const HamburgerMenu = () => {
    return (
        <>
            {/* İlk Hamburger Menüsü */}
            <div className="fixed top-4 right-4 flex md:hidden z-50 p-2 bg-white rounded-full">
                <GiHamburgerMenu size="24" className="text-black" />
            </div>

            {/* İkinci Hamburger Menüsü */}
            <div className="fixed top-16 right-4 flex md:hidden z-50 p-2 bg-white rounded-full">
                <BsFillBasket2Fill size="24" className="text-black" />
            </div>
        </>
    );
};

export default HamburgerMenu;

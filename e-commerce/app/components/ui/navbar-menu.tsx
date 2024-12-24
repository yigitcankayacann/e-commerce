"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const transition = {
    type: "spring",
    mass: 0.5,
    damping: 11.5,
    stiffness: 100,
    restDelta: 0.001,
    restSpeed: 0.001,
};

export const MenuItem = ({
                             setActive,
                             active,
                             item,
                             onClick,
                             children,
                         }) => {
    return (
        <div
            onMouseEnter={() => setActive(item)}
            onMouseLeave={() => setActive(null)}
            onClick={onClick}
            className="relative cursor-pointer transform transition duration-200 hover:-translate-y-1"
        >
            <motion.p
                transition={{ duration: 0.3 }}
                className="text-black dark:text-white"
            >
                {item}
            </motion.p>
            {active === item && (
                <motion.div
                    onClick={(event) => event.stopPropagation()}
                    initial={{ opacity: 0, scale: 0.85, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.85, y: 10 }}
                    transition={transition}
                    className="absolute top-full left-0 pt-2"
                >
                    <motion.div
                        transition={transition}
                        layoutId="active"
                        className="bg-white dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-xl"
                    >
                        <motion.div layout className="w-max h-full p-4">
                            {children}
                        </motion.div>
                    </motion.div>
                </motion.div>
            )}
        </div>
    );
};

export const Menu = ({ setActive, children }) => {
    return (
        <nav
            onMouseLeave={() => setActive(null)}
            className="relative rounded-full border border-gray-400 dark:border-gray-600 bg-white dark:bg-black shadow-lg flex justify-center space-x-4 px-8 py-6"
        >
            {children}
        </nav>
    );
};

export const HoveredLink = ({ children, ...rest }) => {
    return (
        <Link
            {...rest}
            className="text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white transform transition duration-200 hover:-translate-y-1"
        >
            {children}
        </Link>
    );
};

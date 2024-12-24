"use client";

import { PlaceholdersAndVanishInput } from "../ui/placeholders-and-vanish-input";

export function PlaceholdersAndVanishInputDemo() {
    const placeholders = [
        "Tahin helvası çeşitleri",
        "Özel üretim helvalar",
        "El yapımı tahin helvaları",
        "Hediyelik Helva  setleri",

    ];

    const handleChange = (e) => {
        console.log(e.target.value);
    };
    const onSubmit = (e) => {
        e.preventDefault();
        console.log("submitted");
    };
    return (
        (<div className="h-[40rem] flex flex-col justify-center  items-center px-4 ">

            <PlaceholdersAndVanishInput placeholders={placeholders} onChange={handleChange} onSubmit={onSubmit} />
        </div>)
    );
}
export default PlaceholdersAndVanishInputDemo;

import { cn } from "../../lib/utils";

export const BentoGrid = ({
                              className,
                              children,
                          }) => {
    return (
        <div
            className={cn(
                "grid grid-cols-2 md:grid-cols-3 gap-4 max-w-7xl mx-auto auto-rows-auto", // auto-rows-[18rem] yerine auto-rows-auto
                className
            )}
        >
            {children}
        </div>
    );
};


export const BentoGridItem = ({
                                  className,
                                  title,
                                  description,
                                  header,
                                  icon,
                              }) => {
    return (
        <div
            className={cn(
                "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent flex flex-col space-y-4 h-auto min-h-[20rem]", // min-h ile minimum yükseklik ayarlanır
                className
            )}
        >
            {header}
            <div className="group-hover/bento:translate-x-2 transition duration-200 flex-1 flex flex-col">
                {icon}
                <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
                    {title}
                </div>
                <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300 flex-1">
                    {description}
                </div>
            </div>
        </div>
    );
};



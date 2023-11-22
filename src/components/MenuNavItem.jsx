import { twMerge } from "tailwind-merge"

export default function MenuNavItem({className, children, ...props}) {

    const styles = twMerge("w-full flex justify-center   h-btn rounded-lg flex items-center px-8 hover:cursor-pointer transition-colors dark:bg-dark-secondary dark:text-dark-txt dark:hover:text-dark-secondary dark:hover:bg-dark-txt", className)

    return(
        <li 
        {...props}
        className={styles}
        >{children}</li>
    ) 
}
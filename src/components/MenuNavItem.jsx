import { twMerge } from "tailwind-merge"

export default function MenuNavItem({className, children, href, ...props}) {

    const styles = twMerge("w-full flex justify-center h-btn rounded-lg font-jetbrains uppercase flex items-center px-11 hover:cursor-pointer transition-colors bg-light-secondary text-light-txt hover:text-light-secondary hover:bg-light-txt dark:bg-dark-secondary dark:text-dark-txt dark:hover:text-dark-secondary dark:hover:bg-dark-txt", className)

    return(
        <li className="w-full">
            <a 
            {...props}
            href={href}
            className={styles}>{children}</a>
        </li>
    ) 
}
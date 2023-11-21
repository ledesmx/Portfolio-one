import { twMerge } from "tailwind-merge"

export default function Button({color, bg, className, children, ...props}) {

    console.log(color)

    const brakets = "before:content-['{'] before:transition-transform before:hover:translate-x-[-10px] after:content-['}'] after:transition-transform after:hover:translate-x-[10px]"

    const styles = twMerge(`border-[2px] rounded-lg uppercase font-jetbrains flex items-center justify-center  dark:text-dark-${color} border-dark-${color} ${brakets}`, className)
    
    return(
        <button
        className={styles}
        {...props}
        >{children}</button>
    )
}
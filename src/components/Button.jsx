import { twMerge } from "tailwind-merge"

export default function Button({color, bg, className, children, link, ...props}) {
    const textColor = () => {
        let tcolor;
        switch(color) {
            case "txt": tcolor = "text-light-txt hover:text-light-txt-l active:text-light-txt-a dark:text-dark-txt dark:hover:text-dark-txt-l dark:active:text-dark-txt-a";
            break;
            case "secondary": tcolor = "text-light-secondary dark:text-dark-secondary";
            break;
            case "coral": tcolor = "text-light-accent-coral hover:text-light-accent-coral-l active:text-light-accent-coral-a dark:text-dark-accent-coral dark:hover:text-dark-accent-coral-l dark:active:text-dark-accent-coral-a";
            break;
            case "turquoise": tcolor = "text-light-accent-turquoise hover:text-light-accent-turquoise-l active:text-light-accent-turquoise-a dark:text-dark-accent-turquoise dark:hover:text-dark-accent-turquoise-l dark:active:text-dark-accent-turquoise-a";
            break;
            case "purple": tcolor = "text-light-accent-purple hover:text-light-accent-purple-l active:text-light-accent-purple-a dark:text-dark-accent-purple dark:hover:text-dark-accent-purple-l dark:active:text-dark-accent-purple-a";
            break;
            default: tcolor = "";
        }
        return tcolor
    }
    const borderColor = () => {
        let bcolor = "border-[2px] ";
        switch(color) {
            case "txt": bcolor += "border-light-txt hover:border-light-txt-l active:border-light-txt-a dark:border-dark-txt dark:hover:border-dark-txt-l dark:active:border-dark-txt-a";
            break;
            case "coral": bcolor += "border-light-accent-coral hover:border-light-accent-coral-l active:border-light-accent-coral-a dark:border-dark-accent-coral dark:hover:border-dark-accent-coral-l dark:active:border-dark-accent-coral-a";
            break;
            case "turquoise": bcolor += "border-light-accent-turquoise hover:border-light-accent-turquoise-l active:border-light-accent-turquoise-a dark:border-dark-accent-turquoise dark:hover:border-dark-accent-turquoise-l dark:active:border-dark-accent-turquoise-a";
            break;
            case "purple": bcolor += "border-light-accent-purple hover:border-light-accent-purple-l active:border-light-accent-purple-a dark:border-dark-accent-purple dark:hover:border-dark-accent-purple-l dark:active:border-dark-accent-purple-a";
            break;
            default: bcolor = "";
        }
        return bcolor
    }
    const backgroundColor = () => {
        let bgcolor;
        switch(bg) {
            case "secondary": bgcolor = "bg-light-secondary dark:bg-dark-secondary";
            break;
            case "coral": bgcolor = "bg-light-accent-coral hover:bg-light-accent-coral-l active:bg-light-accent-coral-a dark:bg-dark-accent-coral dark:hover:bg-dark-accent-coral-l dark:active:bg-dark-accent-coral-a";
            break;
            case "turquoise": bgcolor = "bg-light-accent-turquoise hover:bg-light-accent-turquoise-l active:bg-light-accent-turquoise-a dark:bg-dark-accent-turquoise dark:hover:bg-dark-accent-turquoise-l dark:active:bg-dark-accent-turquoise-a";
            break;
            case "purple": bgcolor = "bg-light-accent-purple hover:bg-light-accent-purple-l active:bg-light-accent-purple-a dark:bg-dark-accent-purple dark:hover:bg-dark-accent-purple-l dark:active:bg-dark-accent-purple-a";
            break;
            default: bgcolor = "";
        }
        return bgcolor
    }

    const brakets = "before:content-['{'] before:transition-transform before:hover:translate-x-[-10px] before:active:translate-x-[-7px] after:content-['}'] after:transition-transform after:hover:translate-x-[10px] after:active:translate-x-[7px]"

    const styles = twMerge(`rounded-lg uppercase font-jetbrains flex items-center justify-center transition-colors ${brakets}`, className)
    
    return(
        link ?
        <a 
        className={`${textColor()} ${borderColor()} ${backgroundColor()} ${styles}`}
        target="_blank"
        href={link}>{children}</a> 
        : (
        <button
        className={`${textColor()} ${borderColor()} ${backgroundColor()} ${styles}`}
        {...props}
        >{children}</button> 
        )
    )
}
import { twMerge } from "tailwind-merge"

export default function Button({color, bg, className, children, ...props}) {
    const textColor = () => {
        let tcolor;
        switch(color) {
            case "txt": tcolor = "text-dark-txt hover:text-dark-txt-l active:text-dark-txt-a";
            break;
            case "secondary": tcolor = "text-dark-secondary";
            break;
            case "coral": tcolor = "text-dark-accent-coral hover:text-dark-accent-coral-l active:text-dark-accent-coral-a";
            break;
            case "turquoise": tcolor = "text-dark-accent-turquoise hover:text-dark-accent-turquoise-l active:text-dark-accent-turquoise-a";
            break;
            case "purple": tcolor = "text-dark-accent-purple hover:text-dark-accent-purple-l active:text-dark-accent-purple-a";
            break;
            default: tcolor = "";
        }
        return tcolor
    }
    const borderColor = () => {
        let bcolor = "border-[2px] ";
        switch(color) {
            case "txt": bcolor += "border-dark-txt hover:border-dark-txt-l active:border-dark-txt-a";
            break;
            case "coral": bcolor += "border-dark-accent-coral hover:border-dark-accent-coral-l active:border-dark-accent-coral-a";
            break;
            case "turquoise": bcolor += "border-dark-accent-turquoise hover:border-dark-accent-turquoise-l active:border-dark-accent-turquoise-a";
            break;
            case "purple": bcolor += "border-dark-accent-purple hover:border-dark-accent-purple-l active:border-dark-accent-purple-a";
            break;
            default: bcolor = "";
        }
        return bcolor
    }
    const backgroundColor = () => {
        let bgcolor;
        switch(bg) {
            case "secondary": bgcolor = "bg-dark-secondary";
            break;
            case "coral": bgcolor = "bg-dark-accent-coral hover:bg-dark-accent-coral-l active:bg-dark-accent-coral-a";
            break;
            case "turquoise": bgcolor = "bg-dark-accent-turquoise hover:bg-dark-accent-turquoise-l active:bg-dark-accent-turquoise-a";
            break;
            case "purple": bgcolor = "bg-dark-accent-purple hover:bg-dark-accent-purple-l active:bg-dark-accent-purple-a";
            break;
            default: bgcolor = "";
        }
        return bgcolor
    }

    const brakets = "before:content-['{'] before:transition-transform before:hover:translate-x-[-10px] before:active:translate-x-[-7px] after:content-['}'] after:transition-transform after:hover:translate-x-[10px] after:active:translate-x-[7px]"

    const styles = twMerge(`rounded-lg uppercase font-jetbrains flex items-center justify-center transition-colors ${brakets}`, className)
    
    return(
        <button
        className={`${textColor()} ${borderColor()} ${backgroundColor()} ${styles}`}
        {...props}
        >{children}</button>
    )
}
import { twMerge } from "tailwind-merge"

export default function Button({color, bg, className, children, ...props}) {
    const textColor = () => {
        let tcolor;
        switch(color) {
            case "txt": tcolor = "text-dark-txt";
            break;
            case "secondary": tcolor = "text-dark-secondary";
            break;
            case "coral": tcolor = "text-dark-accent-coral";
            break;
            case "turquoise": tcolor = "text-dark-accent-turquoise";
            break;
            case "purple": tcolor = "text-dark-accent-purple";
            break;
            default: tcolor = "";
        }
        return tcolor
    }
    const borderColor = () => {
        let bcolor;
        switch(color) {
            case "txt": bcolor = "border-dark-txt";
            break;
            case "secondary": bcolor = "border-dark-secondary";
            break;
            case "coral": bcolor = "border-dark-accent-coral";
            break;
            case "turquoise": bcolor = "border-dark-accent-turquoise";
            break;
            case "purple": bcolor = "border-dark-accent-purple";
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
            case "coral": bgcolor = "bg-dark-accent-coral";
            break;
            case "turquoise": bgcolor = "bg-dark-accent-turquoise";
            break;
            case "purple": bgcolor = "bg-dark-accent-purple";
            break;
            default: bgcolor = "";
        }
        return bgcolor
    }

    const brakets = "before:content-['{'] before:transition-transform before:hover:translate-x-[-10px] after:content-['}'] after:transition-transform after:hover:translate-x-[10px]"

    const styles = twMerge(`border-[2px] rounded-lg uppercase font-jetbrains flex items-center justify-center ${brakets}`, className)
    
    return(
        <button
        className={`${textColor()} ${borderColor()} ${backgroundColor()} ${styles}`}
        {...props}
        >{children}</button>
    )
}
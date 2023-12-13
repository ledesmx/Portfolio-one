import { useContext } from "react"
import { MobileMenuContext } from "./MenuContext"
import { FaBars } from "react-icons/fa6"

export default function MenuButton() {
    const {toggleMenu} = useContext(MobileMenuContext)


    return(
        <div 
        className="fixed w-[50px] h-btn text-4xl flex items-center justify-center rounded-lg z-20 hover:cursor-pointer bg-light-txt text-light-secondary dark:bg-dark-txt dark:text-dark-secondary lg:hidden"
        onClick={toggleMenu}>
            <FaBars />
        </div>
    )
}
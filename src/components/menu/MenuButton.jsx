import { useContext } from "react"
import { MobileMenuContext } from "./MenuContext"
import { FaBars } from "react-icons/fa6"

export default function MenuButton() {
    const {toggleMenu} = useContext(MobileMenuContext)


    return(
        <div 
        className="fixed w-[50px] h-btn text-4x flex items-center justify-center rounded-lg z-10 hover:cursor-pointer bg-light-secondary text-light-txt dark:bg-dark-secondary dark:text-dark-txt lg:hidden"
        onClick={toggleMenu}>
            <FaBars />
        </div>
    )
}
import { useContext } from "react"
import { MobileMenuContext } from "./MenuContext"
import { FaBars } from "react-icons/fa6"

export default function MenuButton() {
    const {toggleMenu} = useContext(MobileMenuContext)


    return(
        <div 
        className="fixed bg-dark-secondary w-[50px] h-btn text-4xl text-dark-txt flex items-center justify-center rounded-lg z-10 hover:cursor-pointer lg:hidden"
        onClick={toggleMenu}>
            <FaBars />
        </div>
    )
}
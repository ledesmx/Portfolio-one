import { useContext } from "react"
import { MobileMenuContext } from "./MenuContext"
import Button from "../Button"
import MenuNavItem from "../MenuNavItem"

export default function Menu() {
    const {mobileMenuOn} = useContext(MobileMenuContext)

    return(
        <div className={`fixed flex-col w-[86%] left-[7%] top-[100px] bg-dark-secondary rounded-lg p-8 font-bold z-10 lg:flex-row lg:flex lg:p-0 lg:bg-transparent lg:static ${mobileMenuOn ? `flex` : `hidden`}`}>
            <Button
                color="txt"
                bg="secondary"
                className="order-2 h-btn lg:border-none lg:w-[120px]"
            >Spanish</Button>
            <nav className="order-1 lg:order-2 lg:mx-auto">
                <ul className="flex flex-col items-center space-y-1 lg:flex-row lg:items-center lg:space-y-0 lg:rounded-lg lg:dark:bg-dark-secondary">
                    <MenuNavItem>Home</MenuNavItem>
                    <MenuNavItem>About</MenuNavItem>
                    <MenuNavItem>Work</MenuNavItem>
                    <MenuNavItem>Contact</MenuNavItem>
                </ul>
            </nav>
            <div className="h-[1px] my-6 w-full bg-dark-primary order-1 opacity-50 lg:hidden"></div>
        </div>
    )
}
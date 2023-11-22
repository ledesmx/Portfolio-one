import { useContext } from "react"
import { MobileMenuContext } from "./MenuContext"
import Button from "../Button"
import MenuNavItem from "../MenuNavItem"

export default function Menu() {
    const {mobileMenuOn} = useContext(MobileMenuContext)

    return(
        <div className={`fixed flex-col w-[86%] left-[7%] top-[100px] bg-dark-secondary rounded-lg p-8 font-bold z-10 lg:flex-row ${mobileMenuOn ? `flex` : `hidden`}`}>
            <Button
                color="txt"
                bg="secondary"
                className="order-2 h-btn lg:border-none lg:w-[120px]"
            >Spanish</Button>
            <nav className="order-1 lg:order-2">
                <ul className="flex flex-col items-center space-y-1 lg:rounded-lg lg:overflow-hidden lg:items-center lg:dark:bg-dark-secondary">
                    <MenuNavItem>Home</MenuNavItem>
                    <MenuNavItem>About</MenuNavItem>
                    <MenuNavItem>Work</MenuNavItem>
                    <MenuNavItem>Contact</MenuNavItem>
                </ul>
            </nav>
            <div className="h-[1px] my-6 w-full bg-dark-primary order-1 opacity-50"></div>
        </div>
    )
}
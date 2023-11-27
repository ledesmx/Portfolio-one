import { useContext } from "react"
import { MobileMenuContext } from "./MenuContext"
import Button from "../Button"
import MenuNavItem from "../MenuNavItem"

export default function Menu() {
    const {mobileMenuOn} = useContext(MobileMenuContext)

    return(
        <div className={`fixed flex-col w-[86%] left-[7%] max-w-[400px] top-[100px] rounded-lg p-8 font-bold z-10 shadow-xl shadow-dark-txt40 transition-colors bg-light-secondary dark:bg-dark-secondary lg:shadow-none lg:flex-row lg:flex lg:p-0 lg:w-full lg:max-w-none lg:bg-transparent lg:dark:bg-transparent lg:static ${mobileMenuOn ? `flex` : `hidden`}`}>
            <Button
                color="txt"
                bg="secondary"
                className="order-2 h-btn lg:border-none lg:w-[130px]"
            >Spanish</Button>
            <nav className="order-1 lg:order-2 lg:fixed lg:left-nav-middle">
                <ul className="flex flex-col items-center space-y-1 transition-colors lg:flex-row lg:items-center lg:space-y-0 lg:rounded-lg lg:bg-light-secondary lg:dark:bg-dark-secondary lg:shadow-xl-wide  lg:shadow-light-txt65 lg:dark:shadow-dark-txt65">
                    <MenuNavItem>Home</MenuNavItem>
                    <MenuNavItem>About</MenuNavItem>
                    <MenuNavItem>Work</MenuNavItem>
                    <MenuNavItem>Contact</MenuNavItem>
                </ul>
            </nav>
            <div className="h-[1px] my-6 w-full order-1 opacity-50 bg-light-primary dark:bg-dark-primary lg:hidden"></div>
        </div>
    )
}
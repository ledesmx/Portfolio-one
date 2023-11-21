import Button from "./Button"
import MenuNavItem from "./MenuNavItem"

export default function Menu() {
    return(
        <div className="flex">
            <Button
                color="txt"
                bg="secondary"
                className="w-[120px] h-[50px] border-none"
            >Spanish</Button>
            <nav>
                <ul className="flex rounded-lg overflow-hidden items-center dark:bg-dark-secondary">
                    <MenuNavItem>Home</MenuNavItem>
                    <MenuNavItem>About</MenuNavItem>
                    <MenuNavItem>Work</MenuNavItem>
                    <MenuNavItem>Contact</MenuNavItem>
                </ul>
            </nav>
        </div>
    )
}
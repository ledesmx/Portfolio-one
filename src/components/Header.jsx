import Button from "./Button"
import Menu from "./menu/Menu"
import MenuButton from "./menu/MenuButton"
import MenuContext from "./menu/MenuContext"

export default function Header() {
    return(
        <header className="min-h-[100vh] flex flex-col items-center justify-center dark:text-dark-primary">
            <div className="mb-auto mt-[20px] flex w-[86%]">
                <MenuContext>
                    <MenuButton />
                    <Menu />    
                </MenuContext>
               
                <Button
                    color="txt"
                    className="w-[120px] h-[50px] ml-auto"
                >Theme</Button>
            </div>
            {/* <h1 className="font-koulen text-9xl flex flex-col space-y-14">
                <span>
                Hey, I’m <span className="font-fira font-light dark:text-dark-txt">{`=>`}</span>
                </span>
                <span>
                <span className="font-fira font-light dark:text-dark-txt">{`{`}</ span>Alberto Ledesma<span className="font-fira font-light dark:text-dark-txt">{`}`}</span>  
                </span>
            </h1> */}
            <p className="font-jetbrains text-2xl tracking-wide mt-20 mb-auto opacity-80 dark:text-dark-primary">Front-End Developer</p>
        </header>
    )
}
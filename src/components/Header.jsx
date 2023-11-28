import Button from "./Button"
import Menu from "./menu/Menu"
import MenuButton from "./menu/MenuButton"
import MenuContext from "./menu/MenuContext"

export default function Header(props) {
    return(
        <header className="min-h-[100vh] flex flex-col items-center justify-center text-light-primary dark:text-dark-primary">
            <div className="mb-auto mt-[20px] flex w-[86%] max-w-[1100.8px]">
                <MenuContext>
                    <MenuButton />
                    <Menu />    
                </MenuContext>
                <Button
                color="txt"
                className="w-[120px] h-[50px] ml-auto"
                onClick={props.toggleDarkTheme}
                >Theme</Button>
            </div>
            <h1 className="w-[86%] max-w-[1100.8px] text-center font-koulen text-6xl sm:text-9.1xl lg:text-9xl lg:text-left xl:text-13xl">
                <span className="flex flex-col lg:w-[875.483px] lg:mx-auto xl:w-auto xl:mx-0">
                    <span>
                    Hey, I’m <span className="font-fira font-light text-light-txt dark:text-dark-txt">{`=>`}</span>
                    </span>
                    <span>
                    <span className="font-fira font-light text-light-txt dark:text-dark-txt">{`{`}</ span>Alberto Ledesma<span className="font-fira font-light text-light-txt dark:text-dark-txt">{`}`}</span>  
                    </span>
                </span>
                
            </h1>
            <p className="font-jetbrains text-2xl tracking-wide mt-20 mb-auto opacity-80 text-light-primary dark:text-dark-primary lg:text-4xl">Front-End Developer</p>
        </header>
    )
}
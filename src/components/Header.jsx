import Button from "./Button"
import Menu from "./menu/Menu"
import MenuButton from "./menu/MenuButton"
import MenuContext from "./menu/MenuContext"

export default function Header(props) {
    return(
        <header id="home"
        className="min-h-[100vh] flex flex-col items-center justify-center text-light-primary dark:text-dark-primary">
            <div className="mb-auto mt-[20px] flex w-[86%] max-w-[1100.8px]"            >
                <MenuContext>
                    <MenuButton />
                    <Menu />    
                </MenuContext>
                <Button
                color="txt"
                className="w-[120px] h-[50px] ml-auto"
                onClick={props.toggleTheme}
                >Theme</Button>
            </div>
                <h1 className="text-center font-koulen text-6xl sm:text-9.1xl lg:text-9xl lg:text-left xl:text-13xl">
                    <span className="flex">
                        <span className="animate-grow-80 lg:animate-grow-100">H</span>
                        <span className="animate-grow-70 lg:animate-grow-90">e</span>
                        <span className="animate-grow-60 lg:animate-grow-80">y</span>
                        <span className="animate-grow-50 lg:animate-grow-70 mr-5 lg:mr-7 xl:mr-12">,</span>
                        <span className="animate-grow-40 lg:animate-grow-60">I</span>
                        <span className="animate-grow-50 lg:animate-grow-50">’</span>
                        <span className="animate-grow-60 lg:animate-grow-40 mr-5 lg:mr-7 xl:mr-12">m</span>
                        <span className="animate-grow-70 lg:animate-grow-30 font-fira font-light text-light-txt dark:text-dark-txt">{`=>`}</span>
                    </span>
                    <span className="flex flex-col lg:flex-row">
                        <span className="flex justify-center">
                            <span className="animate-grow-50 lg:animate-grow-70 font-fira font-light text-light-txt dark:text-dark-txt">{`{`}</ span>
                            <span className="animate-grow-40 lg:animate-grow-60">A</span>
                            <span className="animate-grow-30 lg:animate-grow-50">l</span>
                            <span className="animate-grow-20 lg:animate-grow-40">b</span>
                            <span className="animate-grow-30 lg:animate-grow-30">e</span>
                            <span className="animate-grow-40 lg:animate-grow-20">r</span>
                            <span className="animate-grow-50 lg:animate-grow-10">t</span>
                            <span className="animate-grow-60 lg:animate-grow-0 lg:mr-7 xl:mr-12">o </span>
                        </span>
                        <span className="flex justify-center">
                            <span className="animate-grow-30 lg:animate-grow-0">L</span>
                            <span className="animate-grow-20 lg:animate-grow-10">e</span>
                            <span className="animate-grow-10 lg:animate-grow-20">d</span>
                            <span className="animate-grow-0 lg:animate-grow-30">e</span>
                            <span className="animate-grow-0 lg:animate-grow-40">s</span>
                            <span className="animate-grow-10 lg:animate-grow-50">m</span>
                            <span className="animate-grow-20 lg:animate-grow-60">a</span>
                            <span className="animate-grow-30 lg:animate-grow-70 font-fira font-light text-light-txt dark:text-dark-txt">{`}`}</span>  
                        </span>
                        
                    </span>
                </h1>
            <p className="font-jetbrains flex text-xl mt-20 mb-auto opacity-70 text-light-primary dark:text-dark-primary lg:text-2xl">
                <span className="animate-type-0 mr-[12px] lg:mr-[16px]">/</span>
                <span className="animate-type-10 mr-[.5px]">F</span>
                <span className="animate-type-20 mr-[.5px]">r</span>
                <span className="animate-type-30 mr-[.5px]">o</span>
                <span className="animate-type-40 mr-[.5px]">n</span>
                <span className="animate-type-50 mr-[.5px]">t</span>
                <span className="animate-type-60 mr-[.5px]">-</span>
                <span className="animate-type-70 mr-[.5px]">E</span>
                <span className="animate-type-80 mr-[.5px]">n</span>
                <span className="animate-type-90 mr-[12px] lg:mr-[16px]">d</span>
                <span className="animate-type-100 mr-[.5px]">D</span>
                <span className="animate-type-110 mr-[.5px]">e</span>
                <span className="animate-type-120 mr-[.5px]">v</span>
                <span className="animate-type-130 mr-[.5px]">e</span>
                <span className="animate-type-140 mr-[.5px]">l</span>
                <span className="animate-type-150 mr-[.5px]">o</span>
                <span className="animate-type-160 mr-[.5px]">p</span>
                <span className="animate-type-170 mr-[.5px]">e</span>
                <span className="animate-type-180 mr-[12px] lg:mr-[16px]">r</span>
                <span className="animate-type-0">/</span>
            </p>
        </header>
    )
}
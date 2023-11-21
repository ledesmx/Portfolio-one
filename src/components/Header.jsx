export default function Header() {
    return(
        <header className="min-h-[100vh] flex flex-col items-center justify-center dark:text-dark-primary">
          <h1 className="font-koulen text-9xl flex flex-col space-y-14">
            <span>
              Hey, I’m <span className="font-fira font-light dark:text-dark-txt">{`=>`}</span>
            </span>
            <span>
              <span className="font-fira font-light dark:text-dark-txt">{`{`}</ span>Alberto Ledesma<span className="font-fira font-light dark:text-dark-txt">{`}`}</span>  
            </span>
          </h1>
        <p className="font-jetbrains text-2xl tracking-wide mt-20 dark:text-dark-primary opacity-80">Front-End Developer</p>
        </header>
    )
}
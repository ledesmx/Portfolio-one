import { useState, useEffect } from "react"
import Header from "./components/Header"
import About from "./components/About"
import Work from "./components/Work"
import Contact from "./components/Contact"

function App() {
  const [theme, setTheme] = useState(window.matchMedia("prefers-color-scheme: light").matches ? "light" : localStorage.getItem("theme") ?? "dark")
  console.log(localStorage.getItem("theme") ?? "dark")
  console.log()

  useEffect(() => {
    localStorage.setItem("theme", theme)
  }, [theme])

  const toggleTheme = () => setTheme(prev => prev === "dark" ? "light" : "dark")

  return (
    <div className={theme === "dark" ? "dark" : ""}>
      <main className="bg-light-bg dark:bg-dark-bg">
        <Header
          toggleTheme={toggleTheme}
        />
        <About />
        <Work />
        <Contact />
      </main>
    </div>
  )
}

export default App

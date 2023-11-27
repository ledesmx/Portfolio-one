import { useState } from "react"
import Header from "./components/Header"
import About from "./components/About"
import Work from "./components/Work"
import Contact from "./components/Contact"

function App() {
  const [darkTheme, setDarkTheme] = useState(true)

  const toggleDarkTheme = () => setDarkTheme(prev => !prev)

  return (
    <div className={darkTheme ? "dark" : ""}>
      <main className="bg-light-bg dark:bg-dark-bg">
        <Header
          toggleDarkTheme={toggleDarkTheme}
        />
        <About />
        <Work />
        <Contact />
      </main>
    </div>
  )
}

export default App

import Header from "./components/Header"
import About from "./components/About"
import Work from "./components/Work"

function App() {

  return (
    <div className="dark">
      <main className="dark:bg-dark-bg">
        <Header />
        <About />
        <Work />
      </main>
    </div>
  )
}

export default App

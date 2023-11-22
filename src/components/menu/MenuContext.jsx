import { useState, createContext } from "react"

export const MobileMenuContext = createContext()

export default function MenuContext({children}) {
    const [mobileMenuOn, setmobileMenuOn] = useState(false)

    const toggleMenu = () => setmobileMenuOn(prev => !prev)

    return(
        <MobileMenuContext.Provider value={{toggleMenu, mobileMenuOn}}>{children}</MobileMenuContext.Provider>
    )
}
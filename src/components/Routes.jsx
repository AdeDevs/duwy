import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"

export default function NavBar() {
    const [showMenu, setShowMenu] = useState(false)
    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }
    useEffect(() => {
        if(showMenu) {
            document.body.classList.add('no-scroll')
        } else {
            document.body.classList.remove('no-scroll')
        }
    }, [showMenu])
    return (
        <div className="nav-bar">
            <NavLink to="/"><h1 className="logo">Duwy</h1></NavLink>
            <ul className="desk-nav">
                <li><a href="#">personal</a></li>
                <li><a href="#">business</a></li>
                <li><a href="#">partner</a></li>
                <li><a href="#">about us</a></li>
            </ul>
            <ul className="desk-nav extras">
                <button>Contact Us</button>
            <div className={`toggle ${showMenu ? "show" : ""}`} onClick={toggleMenu}>
                <span className={`first`}></span>
                <span className={`second`}></span>
            </div>
            </ul>
            <ul className={`mobile-nav ${showMenu ? "show" : ""}`}>
                <li onClick={toggleMenu}><a href="#">personal</a></li>
                <li onClick={toggleMenu}><a href="#">business</a></li>
                <li onClick={toggleMenu}><a href="#">partner</a></li>
                <li onClick={toggleMenu}><a href="#">about us</a></li>
            </ul>
        </div>
    )
}
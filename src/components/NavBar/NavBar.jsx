import CartWidget from "./CartWidget"
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div>

            <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand text-white" href="#"><img src="img/logo.jpg" width={80} alt="" /></Link>
                    <ul className="nav">
                        <li className= "nav-item">
                            <NavLink to="/category/Ram" className= { ( { isActive} ) => isActive ? "nav-link active text-danger" : "nav-link"} href="#">Memoria RAM</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/category/Cpu" className={ ( { isActive} ) => isActive ? "nav-link active text-danger" : "nav-link"} href="#">Procesadores</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/category/Gpu" className={ ( { isActive} ) => isActive ? "nav-link active text-danger" : "nav-link text"} href="#">Placas de video</NavLink>
                        </li>
                    </ul>
                    <CartWidget />
                </div>
            </nav>

        </div>
    )
}
export default NavBar;
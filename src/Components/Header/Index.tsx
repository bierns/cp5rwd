import "./Style.css"
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <header>
            <div className="Header">

                <div className="escrita">
                    <h1>Checkpoint</h1>
                </div>

                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/cadastro">Cadastro</Link>
                </nav>
            </div>
        </header>
    )
}

export default Header;
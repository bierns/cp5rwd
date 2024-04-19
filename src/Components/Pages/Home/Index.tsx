import { Link } from 'react-router-dom';
import './Style.css';

const Home = () => {
    return (
        <div className="home-container">
            <div className="card">
                <h2>Bem-vindo à Página Inicial</h2>
                <div className="button-group">
                    <Link to="/login" className="button">Login</Link>
                    <Link to="/cadastro" className="button">Cadastro</Link>
                </div>
            </div>
        </div>
    );
}

export default Home;

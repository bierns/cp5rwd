import { Link } from "react-router-dom";
import "./Style.css";
import axios from "axios";

const Home = () => {
  const url = "https://caiohalbert.bsite.net/api/user/getAll";

  interface UserData {
    username: string;
    email: string;
    passwordHash: string;
  }

  const getUsers = async () => {
    try {
      const response = await axios.get(url);
      const data: UserData[] = response.data;

      const usersDiv = document.querySelector(".users");
      usersDiv!.innerHTML = ""; 
      

      data.forEach((user: UserData) => {
        const userDiv = document.createElement("div");
        userDiv.className = "pastel"
        userDiv.innerHTML = `
          <p><b>Nome:</b> ${user.username}</p>
          <p><b>Email:</b> ${user.email}</p>
          <p><b>PasswordHash:</b> ${user.passwordHash}</p>
        `;
        usersDiv!.appendChild(userDiv);
      });
    } catch (error) {
      console.error("Erro ao buscar usuários:", error);
    }
  };
    return (
        <div className="home-container">
            <div className="card">
                <h2>Bem-vindo à Página Inicial</h2>
                <div className="button-group">
                    <Link to="/login" className="button-action">Login</Link>
                    <Link to="/cadastro" className="button-action">Cadastro</Link>
                </div>
            </div>
                <button className="button-user" onClick={getUsers}>Exibir usuários</button>

                <div className="users"></div>
        </div>
    );
}

export default Home;

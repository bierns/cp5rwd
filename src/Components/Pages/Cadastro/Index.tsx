import './Style.css';

const Cadastro = () => {
    return (
        <div className="cadastro-container">
            <div className="card">
                <h2>Cadastro</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Nome:</label>
                        <input type="text" id="name" name="name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="username">Nome de Usuário:</label>
                        <input type="text" id="username" name="username" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Senha:</label>
                        <input type="password" id="password" name="password" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirmPassword">Confirmar Senha:</label>
                        <input type="password" id="confirmPassword" name="confirmPassword" />
                    </div>
                    <button type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}

export default Cadastro;

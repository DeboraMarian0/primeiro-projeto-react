import logo from '../logo.png';
import { Link } from 'react-router-dom'; // Importa o componente Link do React Router para criar links de navegação
import phone from '../phone.svg'; 
import home from '../home.svg';  

function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <span className="header-title">Joinville-SC</span>
                </div>
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link to="/" className="nav-link">
                            <img src={home} alt="Home" /> 
                            Página Inicial
                        </Link>  {/* Usa o componente Link que foi importato no inicio (import Link) para criar um link para a página inicial ("/") */}
                    </li>
                        
                    <li className="nav-item">
                        <Link to="/contato" className="nav-link">
                            <img src={phone} alt="Telefone" />
                            Contato
                        </Link>  
                    </li>
                
                </ul>
            
            </nav>
        </>
    );
}

export default Header;
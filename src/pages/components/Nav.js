import { Link } from 'react-router-dom';
import logo from '../../images/logo.png'
function Nav (){
    return(
        <nav className="navbar navbar-expand-lg navbar-light nav">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img src={logo} alt="plane" height="35" width="110" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 text-center mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Акции</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/searchingResult">Поиск</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/booking">Регистрация на рейс</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/profile">Личный кабинет</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
    );
}

export default Nav;
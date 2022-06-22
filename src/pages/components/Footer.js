import { Link, NavLink } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer'>
            <div className='footer-content'>
                <footer className='text-center'>
                    <div className='container-fluid py-4'>
                        <div className="row">
                            <div className="col-md-4 col-lg-2 my-2">
                                <Link className="text-uppercase text-black links mx-3" to="/">Главная</Link>
                            </div>
                            <div className="col-md-4 col-lg-2 my-2">
                                <Link className="text-uppercase text-black links mx-3" to="/login">Войти</Link>
                            </div>
                            <div className="col-md-4 col-lg-2 my-2">
                                <Link className="text-uppercase text-black links mx-3" to="/registration">Зарегистрироваться</Link>
                            </div>
                            <div className="col-md-4 col-lg-2 my-2">
                                <Link className="text-uppercase text-black links mx-3" to="/">Контакты</Link>
                            </div>
                            <div className="col-md-4 col-lg-2 my-2">
                                <Link className="text-uppercase text-black links mx-3" to="/">Новости</Link>
                            </div>
                            <div className="col-md-4 col-lg-2 my-2">
                                <Link className="text-uppercase text-black links mx-3" to="/">Возврат</Link>
                            </div>
                        </div>

                    </div>

                    <div className="text-center p-3 bg-dark text-white">
                        <i className="fas fa-phone fa-lg me-3 fa-fw"></i>
                        <span>8 (800) 100-10-10</span>
                    </div>

                </footer>
            </div>


        </div>

    );
}

export default Footer;
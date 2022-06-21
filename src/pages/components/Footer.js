import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className='footer'>
            <div class="container text-center text-md-left mt-5">
                <div class="row mt-3">
                    <div class="mx-auto mb-md-0">
                        <h6 class="text-uppercase font-weight-bold mt-3">Телефон</h6>
                        <p>
                            8 (800) 100-10-10
                        </p>
                        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 ">
                            <h6 class="text-uppercase font-weight-bold">Навигация по сайту</h6>
                            <hr class="mb-4 mt-0 d-inline-block mx-auto " />
                            <p>
                                <Link class="text-black links" to="/">Главная</Link>
                            </p>
                            <p>
                                <Link class="text-black links" to="/login">Войти</Link>
                            </p>
                            <p>
                                <Link class="text-black links" to="/registration">Зарегистрироваться</Link>
                            </p>
                            <p>
                                <Link class="text-black links" to="/">Контакты</Link>
                            </p>
                            <p>
                                <Link class="text-black links" to="/">Новости</Link>
                            </p>
                            <p>
                                <Link class="text-black links" to="/">Возврат</Link>
                            </p>
                            <p>
                                <Link class="text-black links" to="/">Обратная связь</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
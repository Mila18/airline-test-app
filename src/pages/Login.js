function Login() {
    return (
        <section className="vh-100">
            <div className="container-fluid h-custom">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-9 col-lg-6 col-xl-5">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-fluid" alt=""/>
                    </div>
                    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                        <form>
                            <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                                <p className="lead fw-normal mb-3 me-3">Авторизация</p>
                            </div>

                            <div className="form-outline mb-3">
                                <input type="tel" id="form3Example3" className="form-control form-control-lg"
                                    placeholder="Введите номер телефона" />
                                <label className="form-label" htmlFor="form3Example3">Телефон</label>
                            </div>

                           
                            <div className="form-outline mb-3">
                                <input type="password" id="form3Example4" className="form-control form-control-lg"
                                    placeholder="Введите пароль" />
                                <label className="form-label" htmlFor="form3Example4">Пароль</label>
                            </div>

                            <div className="text-center text-lg-start pt-2">
                                <button type="button" className="btn btn-primary btn-lg"
                                   >Войти</button>
                                
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Login;
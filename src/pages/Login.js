function Login() {
    return (
        <div className="container-xl my-5">
            <section>
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-md-9 col-lg-6 col-xl-6">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" className="img-fluid" alt="" />
                        </div>
                        <div className="col-md-8 col-lg-6 col-xl-6">
                            <form>
                                <p className=" text-center lead fw-normal mb-5 me-3 fs-3">Авторизация</p>

                                <div className="d-flex flex-row align-items-center mb-4">
                                    <i className="fas fa-phone fa-lg me-3 fa-fw"></i>
                                    <div className="form-outline flex-fill mb-0">
                                        <input type="email" id="telNum" className="form-control" placeholder="Введите номер телефона" />
                                    </div>
                                </div>

                                <div className="d-flex flex-row align-items-center mb-4">
                                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                    <div className="form-outline flex-fill mb-0">
                                        <input type="password" id="password" className="form-control" placeholder="Введите пароль" />
                                    </div>
                                </div>

                                <div className="text-center pt-2">
                                    <button type="button" className="btn btn-primary">Войти</button>
                                </div>
                            </form>
                        </div>
                    </div>
            </section>
        </div>
    );
}

export default Login;
function Login() {
    return (
        <section class="vh-100">
            <div class="container-fluid h-custom">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col-md-9 col-lg-6 col-xl-5">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                            class="img-fluid" alt="Sample image"/>
                    </div>
                    <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                        <form>
                            <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                                <p class="lead fw-normal mb-3 me-3">Авторизация</p>
                            </div>

                            <div class="form-outline mb-3">
                                <input type="tel" id="form3Example3" class="form-control form-control-lg"
                                    placeholder="Введите номер телефона" />
                                <label class="form-label" for="form3Example3">Телефон</label>
                            </div>

                           
                            <div class="form-outline mb-3">
                                <input type="password" id="form3Example4" class="form-control form-control-lg"
                                    placeholder="Введите пароль" />
                                <label class="form-label" for="form3Example4">Пароль</label>
                            </div>

                            <div class="text-center text-lg-start pt-2">
                                <button type="button" class="btn btn-primary btn-lg"
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
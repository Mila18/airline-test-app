function Registration(){
    return(      
      <div className="container-xl my-5">
        <section>
          <div className="row d-flex align-items-center ">
            <div className="col-lg-6 col-md-12">
              <form>
                <p className=" text-center lead fw-normal me-3 fs-3">Регистрация</p>
                <div className="d-flex flex-row align-items-center mb-4">
                  <i className="fas fa-user fa-lg me-3 mt-4 fa-fw"></i>
                  <div className="form-outline flex-fill mb-0">
                    <label className="form-label" htmlFor="name">Имя</label>
                    <input type="text" id="name" className="form-control" />
                  </div>
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                  <i className="fas fa-user fa-lg me-3 mt-4 fa-fw"></i>
                  <div className="form-outline flex-fill mb-0">
                    <label className="form-label" htmlFor="surname">Фамилия</label>
                    <input type="text" id="surname" className="form-control" />
                  </div>
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                  <i className="fas fa-passport fa-lg me-3 mt-4 fa-fw"></i>
                  <div className="form-outline flex-fill mb-0">
                    <label className="form-label" htmlFor="docNum">Номер документа</label>
                    <input type="text" id="docNum" className="form-control" />
                  </div>
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                  <i className="fas fa-phone fa-lg me-3 mt-4 fa-fw"></i>
                  <div className="form-outline flex-fill mb-0">
                    <label className="form-label" htmlFor="telNum">Телефон</label>
                    <input type="email" id="telNum" className="form-control" />
                  </div>
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                  <i className="fas fa-lock fa-lg me-3 mt-4 fa-fw"></i>
                  <div className="form-outline flex-fill mb-0">
                    <label className="form-label" htmlFor="password">Пароль</label>
                    <input type="password" id="password" className="form-control" />
                  </div>
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                  <i className="fas fa-key fa-lg me-3 mt-4 fa-fw"></i>
                  <div className="form-outline flex-fill mb-0">
                    <label className="form-label" htmlFor="repeatP">Повторите пароль</label>
                    <input type="password" id="repeatP" className="form-control" />
                  </div>
                </div>

                <div className="text-center pt-2">
                  <button type="button" className="btn btn-primary">Зарегистрироваться</button>
                </div>
              </form>
            </div>

            <div className="col-lg-6 col-md-12">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-fluid" alt="" />
            </div>
          </div>
        </section>
      </div>
    );
}

export default Registration;
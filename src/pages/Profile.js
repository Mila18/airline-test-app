function Profile(){
    return(
        <div className="container-xl my-5 content">
          
          <div className="main-body">
          <div className="row gutters-sm">
  
            <div className="col-md-5">
            <h3 className="mb-4">Личные данные</h3>
              <div className="card px-3 py-3">
                <div className="row">
                    <div className="col-sm-4">
                      <h6 className="mb-0">Имя</h6>
                    </div>
                    <div className="col-sm-8 text-secondary">
                      Чак
                    </div>
                  </div>
  
                  <hr/>
  
                  <div className="row">
                    <div className="col-sm-4">
                      <h6 className="mb-0">Фамилия</h6>
                    </div>
                    <div className="col-sm-8 text-secondary">
                      Паланик
                    </div>
                  </div>
  
                  <hr/>
  
                  <div className="row">
                    <div className="col-sm-4">
                      <h6 className="mb-0">Число полетов</h6>
                    </div>
                    <div className="col-sm-8 text-secondary">
                      18
                    </div>
                  </div>
                  
                  <hr/>
                <div className="text-center">
                <button className="btn btn-primary">Выйти</button>
                </div>
                
          
              </div>    
            </div>
  


            <div className="col-md-7">
            <h3 className="mb-4">Предстоящие бронирования</h3>
              <div className="card mb-3">
                  
                <div className="card-body">
                    
  
                  <div className="row">
                    <div className="col-sm-4">
                      <h6 className="mb-0">Код бронирования</h6>
                    </div>
                    <div className="col-sm-8 text-secondary">
                      926671N
                    </div>
                  </div>
  
                  <hr/>
  
                  <div className="row">
                    <div className="col-sm-4">
                      <h6 className="mb-0">Дата вылета</h6>
                    </div>
                    <div className="col-sm-8 text-secondary">
                      19.08.2022
                    </div>
                  </div>
  
                  <hr/>
  
                  <div className="row">
                    <div className="col-sm-4">
                      <h6 className="mb-0">Время вылета</h6>
                    </div>
                    <div className="col-sm-8 text-secondary">
                      04:48
                    </div>
                  </div>
                  
                  <hr/>

                  <div className="row">
                    <div className="col-sm-4">
                      <h6 className="mb-0">Время прилета</h6>
                    </div>
                    <div className="col-sm-8 text-secondary">
                      6:05
                    </div>
                  </div>

                  <hr/>

                  <div className="row">
                    <div className="col-sm-4">
                      <h6 className="mb-0">Аэропорт вылета</h6>
                    </div>
                    <div className="col-sm-8 text-secondary">
                      Домодедово
                    </div>
                  </div>

                  <hr/>

                  <div className="row">
                    <div className="col-sm-4">
                      <h6 className="mb-0">Аэропот назначения</h6>
                    </div>
                    <div className="col-sm-8 text-secondary">
                      Хитроу
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
  
          </div>
        </div>
          </div>
    
    );
}

export default Profile;
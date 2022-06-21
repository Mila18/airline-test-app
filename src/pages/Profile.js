function Profile(){
    return(
        <div class="container mt-5">
        <div class="main-body">
          <div class="row gutters-sm">
  
            <div class="col-md-5">
            <h3>Личные данные</h3>
              <div class="card px-3 py-3">
                <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Имя</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      Чак
                    </div>
                  </div>
  
                  <hr/>
  
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Фамилия</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      Паланик
                    </div>
                  </div>
  
                  <hr/>
  
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Число полетов</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      18
                    </div>
                  </div>
                  
                  <hr/>
                <div className="text-center">
                <button className="btn btn-primary">Выйти</button>
                </div>
                
          
              </div>    
            </div>
  


            <div class="col-md-7">
            <h3>Предстоящие бронирования</h3>
              <div class="card mb-3">
                  
                <div class="card-body">
                    
  
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Код бронирования</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      926671N
                    </div>
                  </div>
  
                  <hr/>
  
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Дата вылета</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      19.08.2022
                    </div>
                  </div>
  
                  <hr/>
  
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Время вылета</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      04:48
                    </div>
                  </div>
                  
                  <hr/>

                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Время прилета</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      6:05
                    </div>
                  </div>

                  <hr/>

                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Аэропорт вылета</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      Домодедово
                    </div>
                  </div>

                  <hr/>

                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Аэропот назначения</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
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
import { Link } from "react-router-dom";

function Booking() {
    return (
        <div className="container-fluid">
            <h2 className="text-center">Бронировать</h2>
            
                <div className="row mx-3">
                    <div className="col-7">
                    
                        <h4>Данные о рейсах</h4>
                        <form>
                        <div class="mb-3">
                            <label for="number" class="form-label">Номер рейса</label>
                            <input type="text" id="number" class="form-control" placeholder="Введите номер рейса" />
                        </div>

                        <div className="mb-3">
                            <label for="departureCity" class="form-label">Город вылета</label>
                            <select id="departureCity" class="form-select">
                                <option>Внуково, Москва</option>
                                <option>Домодедово, Москва</option>
                                <option>Хитроу, Лондон</option>
                                <option>Лос-Анджелес, Лос-Анджелес</option>
                            </select>
                        </div>

                        <div className="mb-3">
                            <label for="departureCity" class="form-label">Аэропорт вылета</label>
                            <select id="departureCity" class="form-select">
                                <option>Внуково, Москва</option>
                                <option>Домодедово, Москва</option>
                                <option>Хитроу, Лондон</option>
                                <option>Лос-Анджелес, Лос-Анджелес</option>
                            </select>
                        </div>

                        <div className='mb-3'>
                            <label for="dateFrom" class="form-label">Дата вылета</label>
                            <input type="date" id="dateFrom" class="form-control" placeholder="Введите дату" />
                        </div>

                        <div className='mb-3'>
                            <label for="timeFrom" class="form-label">Время вылета</label>
                            <input type="time" id="timeFrom" class="form-control" placeholder="Введите дату" />
                        </div>

                        <div className="mb-3">
                            <label for="destinationCity" class="form-label">Город назначения</label>
                            <select id="destinationCity" class="form-select">
                                <option>Внуково, Москва</option>
                                <option>Домодедово, Москва</option>
                                <option>Хитроу, Лондон</option>
                                <option>Лос-Анджелес, Лос-Анджелес</option>
                            </select>
                        </div>

                        <div className="mb-3">
                            <label for="destinationA" class="form-label">Аэропорт назначения</label>
                            <select id="destinationA" class="form-select">
                                <option>Внуково, Москва</option>
                                <option>Домодедово, Москва</option>
                                <option>Хитроу, Лондон</option>
                                <option>Лос-Анджелес, Лос-Анджелес</option>
                            </select>
                        </div>

                        <div className='mb-3'>
                            <label for="timeTo" class="form-label">Время прилета</label>
                            <input type="time" id="timeTo" class="form-control" placeholder="Введите дату" />
                        </div>

                        <div className='mb-3'>
                            <label for="cost" class="form-label">Стоимость</label>
                            <input type="number" id="cost" class="form-control" disabled placeholder="11540" />
                        </div>

                       
                        </form>
                    </div>

                    <div className="col-4 ml-5">
                        <h4>Данные о пассажирах</h4>
                        <form>
                        <div class="mb-3">
                            <label for="name" class="form-label">Имя</label>
                            <input type="text" id="name" class="form-control" placeholder="Введите номер рейса" />
                        </div>
                        <div class="mb-3">
                            <label for="surname" class="form-label">Фамилия</label>
                            <input type="text" id="surname" class="form-control" placeholder="Введите номер рейса" />
                        </div>
                        <div class="mb-3">
                            <label for="dateofbirth" class="form-label">Дата рождения</label>
                            <input type="date" id="dateofbirth" class="form-control" placeholder="Введите номер рейса" />
                        </div>
                        <div class="mb-3">
                            <label for="docnumber" class="form-label">Номер документа</label>
                            <input type="text" id="docnumber" class="form-control" placeholder="Введите номер рейса" />
                        </div>
                        <button type="submit" class="btn btn-success ml-3">Добавить пассажира</button>
                        <button type="submit" class="btn btn-dark ml-3">Удалить пассажира</button>
                        </form>
                        
                    </div>

                    <p className="text-center">
                        <h3>Финальная стоимость<span className="text-success"> 20540</span></h3>
                    </p>

                    <p className="text-center">
                        <Link to="/bookingManagement"><button type="submit" class="btn btn-primary ml-3">
                            Оформить бронь
                        </button></Link>
                        
                    </p>

                </div>

          
        </div>
    );
}

export default Booking;
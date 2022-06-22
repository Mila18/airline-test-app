import { Link } from "react-router-dom";

function Booking() {
    return (
        <div className="container-xxl my-5">

            <div className="row mx-3">
                <div className="col-md-6 col-sm-12">

                    <h4 className="mb-4">Данные о рейсах</h4>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="number" className="form-label">Номер рейса</label>
                            <input type="text" id="number" className="form-control" placeholder="Введите номер рейса" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="departureCity" className="form-label">Город вылета</label>
                            <select id="departureCity" className="form-select">
                                <option>Внуково, Москва</option>
                                <option>Домодедово, Москва</option>
                                <option>Хитроу, Лондон</option>
                                <option>Лос-Анджелес, Лос-Анджелес</option>
                            </select>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="departureCity" className="form-label">Аэропорт вылета</label>
                            <select id="departureCity" className="form-select">
                                <option>Внуково, Москва</option>
                                <option>Домодедово, Москва</option>
                                <option>Хитроу, Лондон</option>
                                <option>Лос-Анджелес, Лос-Анджелес</option>
                            </select>
                        </div>

                        <div className='mb-3'>
                            <label htmlFor="dateFrom" className="form-label">Дата вылета</label>
                            <input type="date" id="dateFrom" className="form-control" placeholder="Введите дату" />
                        </div>

                        <div className='mb-3'>
                            <label htmlFor="timeFrom" className="form-label">Время вылета</label>
                            <input type="time" id="timeFrom" className="form-control" placeholder="Введите дату" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="destinationCity" className="form-label">Город назначения</label>
                            <select id="destinationCity" className="form-select">
                                <option>Внуково, Москва</option>
                                <option>Домодедово, Москва</option>
                                <option>Хитроу, Лондон</option>
                                <option>Лос-Анджелес, Лос-Анджелес</option>
                            </select>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="destinationA" className="form-label">Аэропорт назначения</label>
                            <select id="destinationA" className="form-select">
                                <option>Внуково, Москва</option>
                                <option>Домодедово, Москва</option>
                                <option>Хитроу, Лондон</option>
                                <option>Лос-Анджелес, Лос-Анджелес</option>
                            </select>
                        </div>

                        <div className='mb-3'>
                            <label htmlFor="timeTo" className="form-label">Время прилета</label>
                            <input type="time" id="timeTo" className="form-control" placeholder="Введите дату" />
                        </div>

                        <div className='mb-3'>
                            <label htmlFor="cost" className="form-label">Стоимость</label>
                            <input type="number" id="cost" className="form-control" disabled placeholder="11540" />
                        </div>
                    </form>
                </div>

                <div className="col-md-5 col-sm-12 offset-md-1">
                    <h4 className="mb-4">Данные о пассажирах</h4>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Имя</label>
                            <input type="text" id="name" className="form-control" placeholder="Введите номер рейса" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="surname" className="form-label">Фамилия</label>
                            <input type="text" id="surname" className="form-control" placeholder="Введите номер рейса" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="dateofbirth" className="form-label">Дата рождения</label>
                            <input type="date" id="dateofbirth" className="form-control" placeholder="Введите номер рейса" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="docnumber" className="form-label">Номер документа</label>
                            <input type="text" id="docnumber" className="form-control" placeholder="Введите номер рейса" />
                        </div>
                        <div className="mb-3 text-center">
                            <button type="submit" className="btn btn-outline-success">Добавить пассажира</button>
                        </div>
                        <div className="mb-3 text-center">
                            <button type="submit" className="btn btn-outline-dark">Удалить пассажира</button>
                        </div>
                    </form>

                </div>

                <div className="col-12">
                <h3 className="my-4">Финальная стоимость<span className="text-primary"> 20540</span></h3>
            <p className="my-4">
                <Link to="/bookingManagement">
                    <button type="submit" className="btn btn-primary">Оформить бронь</button>
                </Link>
            </p>
                </div>

            </div>
            


        </div>
    );
}

export default Booking;
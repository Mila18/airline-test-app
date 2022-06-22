import { Link } from "react-router-dom";

function BookingManagement (){
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-4">
                    <h3>Информация о бронировании</h3>
                    <table className="table mb-0">
                    <thead className="table-warning">
                        <tr>
                            <th>Код бронирования</th>
                            <th>Стоимость</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                0689
                            </td>
                            <td>
                                52579
                            </td>
                        </tr>
                    </tbody>
                    </table>
                </div>

                <div className="col-8">
                    <h3>Информация о пассажирах</h3>
                    <table className="table mb-0">
                    <thead className="table-primary">
                        <tr>
                            <th>Имя</th>
                            <th>Фамилия</th>
                            <th>Дата рождения</th>
                            <th>Номер документа</th>
                            <th>Место в самолете туда</th>
                            <th>Место в самолете обратно</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                Владислав
                            </td>
                            <td>
                                Савицкий
                            </td>
                            <td>
                                13.09.1998
                            </td>
                            <td>
                                N17847209
                            </td>
                            <td>
                                A8
                            </td>
                            <td>
                                C3
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Мария
                            </td>
                            <td>
                                Певчих
                            </td>
                            <td>
                                29.04.1992
                            </td>
                            <td>
                                N17847580
                            </td>
                            <td>
                                B8
                            </td>
                            <td>
                                D3
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Кирилл
                            </td>
                            <td>
                                Васильевич
                            </td>
                            <td>
                                03.04.1999
                            </td>
                            <td>
                                N94847209
                            </td>
                            <td>
                                С8
                            </td>
                            <td>
                                A3
                            </td>
                        </tr>
                    </tbody>
                    </table>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <h3>Информация о рейсах</h3>
                <table className="table align-middle mb-0 bg-white">
                <thead className="table-info">
                    <tr>
                        <th>Номер рейса</th>
                        <th>Воздушное судно</th>
                        <th>Дата вылета</th>
                        <th>Время вылета</th>
                        <th>Время прилета</th>
                        <th>Время в пути</th>
                        <th>Стоимость</th>
                        <th>Вероятность вылета</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <p className="fw-normal mb-1">93</p>
                        </td>

                        <td>
                            <p className="fw-normal mb-1">Airbus A380</p>
                        </td>

                        <td>
                            <p className="fw-normal mb-1">19.04.2022</p>
                        </td>

                        <td>
                            <p className="fw-normal mb-1">18:45</p>
                        </td>
                            
                        <td>
                            <p className="fw-normal mb-1">16:17</p>
                        </td>

                        <td>
                            <p className="fw-normal mb-1">2:20</p>
                        </td>

                        <td>
                            <p className="fw-normal mb-1">11890</p>
                        </td>

                        <td>
                            <span className="badge badge-success rounded-pill d-inline">100%</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p className="fw-normal mb-1">93</p>
                        </td>

                        <td>
                            <p className="fw-normal mb-1">Airbus A380</p>
                        </td>

                        <td>
                            <p className="fw-normal mb-1">25.04.2022</p>
                        </td>

                        <td>
                            <p className="fw-normal mb-1">18:45</p>
                        </td>
                            
                        <td>
                            <p className="fw-normal mb-1">16:17</p>
                        </td>

                        <td>
                            <p className="fw-normal mb-1">2:20</p>
                        </td>

                        <td>
                            <p className="fw-normal mb-1">7890</p>
                        </td>

                        <td>
                            <span className="badge badge-success rounded-pill d-inline">100%</span>
                        </td>
                    </tr>
                </tbody>
            </table>
                </div>
                
            </div>
            <div className="my-5 text-center">
            <Link to="/seat"><button className="btn btn-success">Выбрать место</button></Link>
            </div>
        </div>
    );
}

export default BookingManagement;
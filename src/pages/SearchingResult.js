import { Link } from "react-router-dom";

function SearchingResult() {
    return (
        <div className="container-fluid my-5">
            <table className="table align-middle bg-white">
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
                            <p className="fw-normal mb-1">78</p>
                        </td>

                        <td>
                            <p className="fw-normal mb-1">Ан-124</p>
                        </td>

                        <td>
                            <p className="fw-normal mb-1">19.04.2022</p>
                        </td>

                        <td>
                            <p className="fw-normal mb-1">10:35</p>
                        </td>
                            
                        <td>
                            <p className="fw-normal mb-1">08:17</p>
                        </td>

                        <td>
                            <p className="fw-normal mb-1">2:20</p>
                        </td>

                        <td>
                            <p className="fw-normal mb-1">9800</p>
                        </td>

                        <td>
                            <span className="badge badge-warning rounded-pill d-inline">50%</span>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <p className="fw-normal mb-1">719</p>
                        </td>

                        <td>
                            <p className="fw-normal mb-1">Boeing 747</p>
                        </td>

                        <td>
                            <p className="fw-normal mb-1">19.04.2022</p>
                        </td>

                        <td>
                            <p className="fw-normal mb-1">06:20</p>
                        </td>
                            
                        <td>
                            <p className="fw-normal mb-1">04:17</p>
                        </td>

                        <td>
                            <p className="fw-normal mb-1">2:20</p>
                        </td>

                        <td>
                            <p className="fw-normal mb-1">8500</p>
                        </td>

                        <td>
                            <span className="badge badge-danger rounded-pill d-inline">25%</span>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <p className="fw-normal mb-1">78</p>
                        </td>

                        <td>
                            <p className="fw-normal mb-1">Ан-124</p>
                        </td>

                        <td>
                            <p className="fw-normal mb-1">25.04.2022</p>
                        </td>

                        <td>
                            <p className="fw-normal mb-1">10:35</p>
                        </td>
                            
                        <td>
                            <p className="fw-normal mb-1">08:17</p>
                        </td>

                        <td>
                            <p className="fw-normal mb-1">2:20</p>
                        </td>

                        <td>
                            <p className="fw-normal mb-1">12300</p>
                        </td>

                        <td>
                            <span className="badge badge-warning rounded-pill d-inline">50%</span>
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
            <div className="text-center mt-5">
            <Link to="/booking"><button className="btn btn-primary">Бронировать</button></Link>
            </div>
            
        </div>
    );
}
export default SearchingResult;
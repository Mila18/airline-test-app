import { Link } from "react-router-dom"
function SearchForm(){
    return(
<div className='py-4 search-form'>
                    <div className='container-xl search-form-container py-4'>
                        <form>
                            <div className="row">
                                <div className="mb-3 col-5 offset-1">
                                    <div className="mb-3">
                                        <label htmlFor="departureCity" className="form-label">Аэропорт отправления</label>
                                        <select id="departureCity" className="form-select">
                                            <option>Внуково, Москва</option>
                                            <option>Домодедово, Москва</option>
                                            <option>Хитроу, Лондон</option>
                                            <option>Лос-Анджелес, Лос-Анджелес</option>
                                        </select>
                                    </div>
                                    
                                    <div className="mb-3">
                                        <label htmlFor="destinationCity" className="form-label">Аэропорт назначения</label>
                                        <select id="destinationCity" className="form-select">
                                            <option>Внуково, Москва</option>
                                            <option>Домодедово, Москва</option>
                                            <option>Хитроу, Лондон</option>
                                            <option>Лос-Анджелес, Лос-Анджелес</option>
                                        </select>
                                    </div>
                                    
                                    <div className="mb-3">
                                        <label htmlFor="passangers" className="form-label">Количество пассажиров</label>
                                        <input type="text" id="passangers" className="form-control" pattern="[1-8]" placeholder="Число пассажиров не должно превышать 8 человек" />
                                    </div>
                                </div>
                                <div className='mb-3 col-4 offset-1'>
                                    <div className="mb-3">
                                        <label htmlFor="dateTo" className="form-label">Дата вылета в место назначения</label>
                                        <input type="date" id="dateTo" className="form-control" placeholder="Введите дату" />
                                    </div>
                                    
                                    <div className="mb-3">
                                        <label htmlFor="dateBack" className="form-label">Дата вылета обратно</label>
                                        <input type="date" id="dateBack" className="form-control" placeholder="Введите дату" />
                                    </div>           
                                </div>   
                            </div>
                            <div className="text-center">
                                <Link to="/searchingResult"><button type="submit" className="btn btn-primary ml-3">Поиск билетов</button></Link>
                            </div>
                        </form>
                    </div>
                </div>
    );
}
export default SearchForm;
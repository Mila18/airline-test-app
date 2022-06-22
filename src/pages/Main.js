import { Link } from "react-router-dom"
import "../App.css"
import prom1 from '../images/promotion1.jpg'
import prom2 from '../images/promotion2.jpg'
import prom3 from '../images/promotion3.jpg'
import prom4 from '../images/promotion4.jpg'

function Main() {

    return (
            <div>
                <div className="container-fluid">
                <div className='row text-dark text-wrap text-break my-5'>
                    <div className="col-xl-3 col-sm-6 col-12">
                        <div className="card">
                            <div className="card-content">
                                <div className="card-body">
                                    <div className="media d-flex">
                                        <div className="media-body text-left">
                                            <h3 className="text-success">13597</h3>
                                            <span>Довольных клиентов</span>
                                        </div>
                                        <div className="align-self-center">
                                            <i className="icon-user text-success font-large-2 float-right"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3 col-sm-6 col-12">
                        <div className="card">
                            <div className="card-content">
                                <div className="card-body">
                                    <div className="media d-flex">
                                        <div className="media-body text-left">
                                            <h3 className="text-warning">8</h3>
                                            <span>Место в рейтинге</span>
                                        </div>
                                        <div className="align-self-center">
                                            <i className="icon-rocket text-warning font-large-2 float-right"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3 col-sm-6 col-12">
                        <div className="card">
                            <div className="card-content">
                                <div className="card-body">
                                    <div className="media d-flex">
                                        <div className="media-body text-left">
                                            <h3 className="text-info">35.6%</h3>
                                            <span>Ежегодный рост компании</span>
                                        </div>
                                        <div className="align-self-center">
                                            <i className="icon-graph text-info font-large-2 float-right"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3 col-sm-6 col-12">
                        <div className="card">
                            <div className="card-content">
                                <div className="card-body">
                                    <div className="media d-flex">
                                        <div className="media-body text-left">
                                            <h3 className="text-danger">256</h3>
                                            <span>Городов</span>
                                        </div>
                                        <div className="align-self-center">
                                            <i className="icon-pointer text-danger font-large-2 float-right"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                

                <div className='bg-light py-3'>
                    <div className='container-fluid'>
                        <form>
                            <div className="mb-3 col-6">
                                <label htmlFor="departureCity" className="form-label">Аэропорт отправления</label>
                                <select id="departureCity" className="form-select">
                                    <option>Внуково, Москва</option>
                                    <option>Домодедово, Москва</option>
                                    <option>Хитроу, Лондон</option>
                                    <option>Лос-Анджелес, Лос-Анджелес</option>
                                </select>
                            </div>
                            <div className="mb-3 col-6">
                                <label htmlFor="destinationCity" className="form-label">Аэропорт назначения</label>
                                <select id="destinationCity" className="form-select">
                                    <option>Внуково, Москва</option>
                                    <option>Домодедово, Москва</option>
                                    <option>Хитроу, Лондон</option>
                                    <option>Лос-Анджелес, Лос-Анджелес</option>
                                </select>
                            </div>

                            <div className='mb-3 col-6'>
                                <label htmlFor="dateTo" className="form-label">Дата вылета в место назначения</label>
                                <input type="date" id="dateTo" className="form-control" placeholder="Введите дату" />
                            </div>

                            <div className='mb-3 col-6'>
                                <label htmlFor="dateBack" className="form-label">Дата вылета обратно</label>
                                <input type="date" id="dateBack" className="form-control" placeholder="Введите дату" />
                            </div>

                            <div className="mb-3 col-6">
                                <label htmlFor="passangers" className="form-label">Количество пассажиров</label>
                                <input type="text" id="passangers" className="form-control" pattern="[1-8]" placeholder="Число пассажиров не должно превышать 8 человек" />
                            </div>
                            <Link to="/searchingResult"><button type="submit" className="btn btn-primary ml-3">Поиск билетов</button></Link>
                        </form>
                    </div>
                </div>

                <section className='my-5'>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 mb-4 d-flex align-items-stretch">
                                <div className="card">
                                    <img src={prom1} alt="" className="card-img-top" />
                                    <div className="card-body d-flex flex-column justify-content-between">
                                        <h5 className="card-title">Возврат и обмен ваших билетов</h5>
                                        <p className="card-text">Пандемия изменила планы многих путешественников, но мы знаем, что она не будет длиться вечно.
                                        Как только все это закончится, мы продолжим исследовать этот мир так, как раньше.
                                        Специальные правила, разработанные для этой непростой ситуации, помогут вам отменить поездку.
                                        или отложить на потом.</p>
                                        <button type="button" className="btn btn-outline-primary btn-sm">Подробнее</button>  
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-4 d-flex align-items-stretch">
                                <div className="card">
                                    <img src={prom2} alt="" className="card-img-top" />
                                    <div className="card-body d-flex flex-column justify-content-between">
                                        <h5 className="card-title">Лучшие предложения</h5>
                                        <p className="card-text">Чтобы снова увидеть улицы, которые были свидетелями многого. Обнять своих любимых и оглянуться назад, чтобы увидеть, через что вы прошли. И думать о новых мечтах, которые будут такими особенными!</p>
                                        <button type="button" className="btn btn-outline-primary btn-sm">Подробнее</button>  
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-4 d-flex align-items-stretch">
                                <div className="card">
                                    <img src={prom3} alt="" className="card-img-top" />
                                    <div className="card-body d-flex flex-column justify-content-between">
                                        <h5 className="card-title">Видеться чаще</h5>
                                        <p className="card-text">С начала января мы расширяем географию полетов по России, чтобы вы могли чаще видеть своих близких. Выбирайте нашу компанию, чтобы лететь туда, где вас всегда ждут.</p>
                                        <button type="button" className="btn btn-outline-primary btn-sm">Подробнее</button>  
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-4 d-flex">
                                <div className="card">
                                    <img src={prom4} alt="" className="card-img-top" />
                                    <div className="card-body d-flex flex-column justify-content-between">
                                        <h5 className="card-title">Все снова включено</h5>
                                        <p className="card-text">С 10 августа мы возобновим полеты в Турцию. Рейсы из Москвы в Анталию будут выполняться дважды
                                            в день ежедневно, а рейсы по маршруту Москва — Даламан будут выполняться от трех до семи раз в неделю.</p>                        
                                        <button type="button" className="btn btn-outline-primary btn-sm">Подробнее</button>                                          
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
               
            <div className='bg-light py-4 container-fluid'>
                <section>
                    <form action="">
                        <div className="row d-flex justify-content-center">
                            <div className="col-auto">
                                <p className="pt-2">
                                    <strong>Подписывайтесь на наши закрытые акции</strong>
                                </p>
                            </div>
                            <div className="col-md-5 col-12">
                                <div className="form-outline form-white mb-4">
                                    <input type="email" className="form-control" placeholder="Введите email" />
                                </div>
                            </div>
                            <div className="col-auto">
                                <button type="submit" className="btn btn-outline-dark mb-4">
                                    Подписаться
                                </button>
                            </div>
                        </div>
                    </form>
                </section>
            </div>
        </div>   
    );
}


export default Main;
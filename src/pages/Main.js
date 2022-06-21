import { Link } from "react-router-dom"
import "../App.css"
import prom1 from '../images/promotion1.jpg'
import prom2 from '../images/promotion2.jpg'
import prom3 from '../images/promotion3.jpg'
import prom4 from '../images/promotion4.jpg'

function Main() {

    return (
        <div>

            <div className='container-fluid'>
                <div className='row text-dark text-wrap text-break my-5 mx-2'>
                    <div class="col-xl-3 col-sm-6 col-12">
                        <div class="card">
                            <div class="card-content">
                                <div class="card-body">
                                    <div class="media d-flex">
                                        <div class="media-body text-left">
                                            <h3 class="text-success">13597</h3>
                                            <span>Довольных клиентов</span>
                                        </div>
                                        <div class="align-self-center">
                                            <i class="icon-user text-success font-large-2 float-right"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-xl-3 col-sm-6 col-12">
                        <div class="card">
                            <div class="card-content">
                                <div class="card-body">
                                    <div class="media d-flex">
                                        <div class="media-body text-left">
                                            <h3 class="text-warning">8</h3>
                                            <span>Место в рейтинге</span>
                                        </div>
                                        <div class="align-self-center">
                                            <i class="icon-rocket text-warning font-large-2 float-right"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-xl-3 col-sm-6 col-12">
                        <div class="card">
                            <div class="card-content">
                                <div class="card-body">
                                    <div class="media d-flex">
                                        <div class="media-body text-left">
                                            <h3 class="text-info">35.6%</h3>
                                            <span>Ежегодный рост компании</span>
                                        </div>
                                        <div class="align-self-center">
                                            <i class="icon-graph text-info font-large-2 float-right"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-xl-3 col-sm-6 col-12">
                        <div class="card">
                            <div class="card-content">
                                <div class="card-body">
                                    <div class="media d-flex">
                                        <div class="media-body text-left">
                                            <h3 class="text-danger">256</h3>
                                            <span>Городов</span>
                                        </div>
                                        <div class="align-self-center">
                                            <i class="icon-pointer text-danger font-large-2 float-right"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='bg-light py-3'>
                    <div className='container-sm'>
                        <form>
                            <div className="mb-3 col-6">
                                <label for="departureCity" class="form-label">Аэропорт отправления</label>
                                <select id="departureCity" class="form-select">
                                    <option>Внуково, Москва</option>
                                    <option>Домодедово, Москва</option>
                                    <option>Хитроу, Лондон</option>
                                    <option>Лос-Анджелес, Лос-Анджелес</option>
                                </select>
                            </div>
                            <div className="mb-3 col-6">
                                <label for="destinationCity" class="form-label">Аэропорт назначения</label>
                                <select id="destinationCity" class="form-select">
                                    <option>Внуково, Москва</option>
                                    <option>Домодедово, Москва</option>
                                    <option>Хитроу, Лондон</option>
                                    <option>Лос-Анджелес, Лос-Анджелес</option>
                                </select>
                            </div>

                            <div className='mb-3 col-6'>
                                <label for="dateTo" class="form-label">Дата вылета в место назначения</label>
                                <input type="date" id="dateTo" class="form-control" placeholder="Введите дату" />
                            </div>

                            <div className='mb-3 col-6'>
                                <label for="dateBack" class="form-label">Дата вылета обратно</label>
                                <input type="date" id="dateBack" class="form-control" placeholder="Введите дату" />
                            </div>

                            <div class="mb-3 col-6">
                                <label for="passangers" class="form-label">Количество пассажиров</label>
                                <input type="text" id="passangers" class="form-control" pattern="[1-8]" placeholder="Число пассажиров не должно превышать 8 человек" />
                            </div>
                            <Link to="/searchingResult"><button type="submit" class="btn btn-primary ml-3">Поиск билетов</button></Link>
                        </form>
                    </div>
                </div>

                <section className='my-5'>
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-3 mb-4">
                                <div class="card">
                                    <img src={prom1} alt="" class="card-img-top" />
                                    <div class="card-body">
                                        <h5 class="card-title">Возврат и обмен ваших билетов</h5>
                                        <p class="card-text">Пандемия изменила планы многих путешественников, но мы знаем, что она не будет длиться вечно.
                                        Как только все это закончится, мы продолжим исследовать этот мир так, как раньше.
                                        Специальные правила, разработанные для этой непростой ситуации, помогут вам отменить поездку.
                                        или отложить на потом.</p>
                                        <a href="" class="btn btn-outline-primary btn-sm">Подробнее</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 mb-4">
                                <div class="card">
                                    <img src={prom2} alt="" class="card-img-top" />
                                    <div class="card-body">
                                        <h5 class="card-title">Лучшие предложения</h5>
                                        <p class="card-text">Чтобы снова увидеть улицы, которые были свидетелями многого. Обнять своих любимых и оглянуться назад, чтобы увидеть, через что вы прошли. И думать о новых мечтах, которые будут такими особенными!</p>
                                        <a href="" class="btn btn-outline-primary btn-sm">Подробнее</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 mb-4">
                                <div class="card">
                                    <img src={prom3} alt="" class="card-img-top" />
                                    <div class="card-body">
                                        <h5 class="card-title">Видеться чаще</h5>
                                        <p class="card-text">С начала января мы расширяем географию полетов по России, чтобы вы могли чаще видеть своих близких. Выбирайте нашу компанию, чтобы лететь туда, где вас всегда ждут.</p>
                                        <a href="" class="btn btn-outline-primary btn-sm">Подробнее</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 mb-4">
                                <div class="card">
                                    <img src={prom4} alt="" class="card-img-top" />
                                    <div class="card-body">
                                        <h5 class="card-title">Все снова включено</h5>
                                        <p class="card-text">С 10 августа мы возобновим полеты в Турцию. Рейсы из Москвы в Анталию будут выполняться дважды
                                            в день ежедневно, а рейсы по маршруту Москва — Даламан будут выполняться от трех до семи раз в неделю.</p>
                                        <a href="" class="btn btn-outline-primary btn-sm">Подробнее</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
               
               <div className='bg-light py-4'>
                   <h2 className='text-center mb-4'>Подписывайтесь на наши закрытые акции!</h2>
                    <form className='container-sm text-center'>
                        <div class="row mb-3">
                            <label for="inputEmail3" class="col-12 col-form-label fw-bold">Email</label>
                            <div class="col-12">
                                <input type="email" class="form-control" id="inputEmail3"/>
                            </div>
                        </div>
                        <button type='sumbit' className='btn btn-primary'>Подписаться</button>
                    </form>
               </div>
            </div>   
        </div>
    );
}


export default Main;
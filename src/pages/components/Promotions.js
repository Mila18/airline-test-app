import prom1 from '../../images/promotion1.jpg'
import prom2 from '../../images/promotion2.jpg'
import prom3 from '../../images/promotion3.jpg'
import prom4 from '../../images/promotion4.jpg'
function Promotions(){
    return(
<section className='my-5'>
                    <div className="container-xl">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 mb-4 d-flex align-items-stretch">
                                <div className="card">
                                    <img src={prom1} alt="" className="card-img-top" />
                                    <div className="card-body d-flex flex-column justify-content-between">
                                        <h5 className="card-title">Возврат и обмен ваших билетов</h5>
                                        <p className="card-text ">Пандемия изменила планы многих путешественников, но мы знаем, что она не будет длиться вечно.
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
    );
}
export default Promotions;


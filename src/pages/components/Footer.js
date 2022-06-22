import { Link, NavLink } from 'react-router-dom';

function Footer() {
    return (
        <footer className='text-center footer mt-5'>
       <div className='container-fluid py-4'>
       <div className="row">
                    <div className="col-md-4 col-lg-2 my-2">
                        <Link className="text-uppercase text-black links mx-3" to="/">Главная</Link>                       
                    </div>
                    <div className="col-md-4 col-lg-2 my-2">
                    <Link className="text-uppercase text-black links mx-3" to="/login">Войти</Link>                     
                    </div>
                    <div className="col-md-4 col-lg-2 my-2">
                    <Link className="text-uppercase text-black links mx-3" to="/registration">Зарегистрироваться</Link>                       
                    </div>
                    <div className="col-md-4 col-lg-2 my-2">
                    <Link className="text-uppercase text-black links mx-3" to="/">Контакты</Link>                       
                    </div>
                    <div className="col-md-4 col-lg-2 my-2">
                    <Link className="text-uppercase text-black links mx-3" to="/">Новости</Link>                      
                    </div>
                    <div className="col-md-4 col-lg-2 my-2">
                    <Link className="text-uppercase text-black links mx-3" to="/">Возврат</Link>                       
                    </div>
                </div>

       </div>
                
            <div className="text-center p-3 bg-dark text-white">
                <i className="fas fa-phone fa-lg me-3 fa-fw"></i>
                <span>8 (800) 100-10-10</span>
            </div>
      
        </footer>


      
        // <footer className='footer'>
        //     <div className="container text-center text-md-left mt-5">
        //         <div className="row mt-3">
        //             <div className="mx-auto mb-md-0">
        //                 <div className='col-6'>
        //                     <h6 className="text-uppercase font-weight-bold mt-3">Телефон</h6>
        //                     <p>8 (800) 100-10-10</p>
        //                 </div>
        //                 <div className='col-6'>
        //                     <h6 className="text-uppercase font-weight-bold">Навигация по сайту</h6>
        //                     <hr className="mb-4 mt-0 d-inline-block mx-auto " />
        //                     <p>
        //                         <Link className="text-black links" to="/">Главная</Link>
        //                     </p>
        //                     <p>
        //                         <Link className="text-black links" to="/login">Войти</Link>
        //                     </p>
        //                     <p>
        //                         <Link className="text-black links" to="/registration">Зарегистрироваться</Link>
        //                     </p>
        //                     <p>
        //                         <Link className="text-black links" to="/">Контакты</Link>
        //                     </p>
        //                     <p>
        //                         <Link className="text-black links" to="/">Новости</Link>
        //                     </p>
        //                     <p>
        //                         <Link className="text-black links" to="/">Возврат</Link>
        //                     </p>
        //                     <p>
        //                         <Link className="text-black links" to="/">Обратная связь</Link>
        //                     </p>                        
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </footer>
    );
}

export default Footer;
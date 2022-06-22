import "../App.css"

import Promotions from "./components/Promotions"
import Rating from "./components/Rating";
import SearchForm from "./components/SearchForm";

function Main() {

    return (
            <div>    
                <Rating/>
                <SearchForm/>
                <Promotions/>
               
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
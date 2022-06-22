function Rating(){
    return(
        <div className="container-xl">
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
    );
}
export default Rating;
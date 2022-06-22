import "./css/schemeStyle.css"
function Seat(){
    return(
        <div className="container-xl my-5">
            <div className="row">
                <div className="col-6">
                    <h3 className="mb-5">Условные обозначения</h3>
                    <label htmlFor="squareC">Свободное место</label>
                    <div className="square mb-4" id="squareC"></div>
                    <label htmlFor="squareB">Занято</label>
                    <div className="squareB mb-4" id="squareB"></div>
                    <label htmlFor="squareU">Выбранное место</label>
                    <div className="squareChecked mb-4" id="squareU"></div>
                    

                </div>
                <div className="col-6">
                <div className="row">
                        <div className="col-2 text-center">
                        <h3>A</h3>
                        </div>
                        <div className="col-2 text-center">
                        <h3>B</h3>
                        </div>
                        <div className="col-2 text-center">
                        </div>
                        <div className="col-2 text-center">
                        <h3>C</h3>
                        </div>
                        <div className="col-2 text-center">
                        <h3>D</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-2 text-center">
                            <input type="checkbox"/>
                        </div>
                        <div className="col-2 text-center">
                            <input type="checkbox"/>
                        </div>
                        <div className="col-2 text-center">
                            <h3>1</h3>
                        </div>
                        <div className="col-2 text-center">
                            <input type="checkbox"/>
                        </div>
                        <div className="col-2 text-center">
                            <input type="checkbox"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-2 text-center">
                            <input type="checkbox"/>
                        </div>
                        <div className="col-2 text-center">
                            <input type="checkbox" className="occupied"/>
                        </div>
                        <div className="col-2 text-center">
                            <h3>2</h3>
                        </div>
                        <div className="col-2 text-center">
                            <input type="checkbox"/>
                        </div>
                        <div className="col-2 text-center">
                            <input type="checkbox"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-2 text-center">
                            <input type="checkbox"/>
                        </div>
                        <div className="col-2 text-center">
                            <input type="checkbox"/>
                        </div>
                        <div className="col-2 text-center">
                            <h3>3</h3>
                        </div>
                        <div className="col-2 text-center">
                            <input type="checkbox"/>
                        </div>
                        <div className="col-2 text-center">
                            <input type="checkbox"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-2 text-center">
                            <input type="checkbox"/>
                        </div>
                        <div className="col-2 text-center">
                            <input type="checkbox"/>
                        </div>
                        <div className="col-2 text-center">
                            <h3>4</h3>
                        </div>
                        <div className="col-2 text-center">
                            <input type="checkbox"/>
                        </div>
                        <div className="col-2 text-center">
                            <input type="checkbox"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-2 text-center">
                            <input type="checkbox"/>
                        </div>
                        <div className="col-2 text-center">
                            <input type="checkbox"/>
                        </div>
                        <div className="col-2 text-center">
                            <h3>5</h3>
                        </div>
                        <div className="col-2 text-center">
                            <input type="checkbox"/>
                        </div>
                        <div className="col-2 text-center">
                            <input type="checkbox"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-2 text-center">
                            <input type="checkbox"/>
                        </div>
                        <div className="col-2 text-center">
                            <input type="checkbox"/>
                        </div>
                        <div className="col-2 text-center">
                            <h3>6</h3>
                        </div>
                        <div className="col-2 text-center">
                            <input type="checkbox"/>
                        </div>
                        <div className="col-2 text-center">
                            <input type="checkbox"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-2 text-center">
                            <input type="checkbox"/>
                        </div>
                        <div className="col-2 text-center">
                            <input type="checkbox"/>
                        </div>
                        <div className="col-2 text-center">
                            <h3>7</h3>
                        </div>
                        <div className="col-2 text-center">
                            <input type="checkbox"/>
                        </div>
                        <div className="col-2 text-center">
                            <input type="checkbox"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-2 text-center">
                            <input type="checkbox"/>
                        </div>
                        <div className="col-2 text-center">
                            <input type="checkbox"/>
                        </div>
                        <div className="col-2 text-center">
                            <h3>8</h3>
                        </div>
                        <div className="col-2 text-center">
                            <input type="checkbox"/>
                        </div>
                        <div className="col-2 text-center">
                            <input type="checkbox"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-2 text-center">
                            <input type="checkbox"/>
                        </div>
                        <div className="col-2 text-center">
                            <input type="checkbox"/>
                        </div>
                        <div className="col-2 text-center">
                            <h3>9</h3>
                        </div>
                        <div className="col-2 text-center">
                            <input type="checkbox"/>
                        </div>
                        <div className="col-2 text-center">
                            <input type="checkbox"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-2 text-center">
                            <input type="checkbox"/>
                        </div>
                        <div className="col-2 text-center">
                            <input type="checkbox"/>
                        </div>
                        <div className="col-2 text-center">
                            <h3>10</h3>
                        </div>
                        <div className="col-2 text-center">
                            <input type="checkbox"/>
                        </div>
                        <div className="col-2 text-center">
                            <input type="checkbox"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-2 text-center">
                            <input type="checkbox"/>
                        </div>
                        <div className="col-2 text-center">
                            <input type="checkbox"/>
                        </div>
                        <div className="col-2 text-center">
                            <h3>11</h3>
                        </div>
                        <div className="col-2 text-center">
                            <input type="checkbox"/>
                        </div>
                        <div className="col-2 text-center">
                            <input type="checkbox"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-2 text-center">
                            <input type="checkbox"/>
                        </div>
                        <div className="col-2 text-center">
                            <input type="checkbox"/>
                        </div>
                        <div className="col-2 text-center">
                            <h3>12</h3>
                        </div>
                        <div className="col-2 text-center">
                            <input type="checkbox"/>
                        </div>
                        <div className="col-2 text-center">
                            <input type="checkbox"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Seat;
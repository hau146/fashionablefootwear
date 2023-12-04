import {Link} from "react-router-dom";

export function Cart(){
    return(
        <div>
            <section className="abt">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="wrapper">
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col">
                            <div className="card">
                                <div className="card-body p-4">
                                    <div className="row">
                                        <div className="col-lg-7">
                                            <h5 className="mb-3">
                                                <Link className="text-body" to="/product">
                                                    <i className="fas fa-long-arrow-alt-left me-2" />
                                                    Tiếp tục mua sắm
                                                </Link>
                                            </h5>
                                            <hr />
                                            <div className="d-flex justify-content-between align-items-center mb-4">
                                                <div>
                                                    <p className="mb-1">Giỏ hàng</p>
                                                    <p className="mb-0">Bạn có 4 mặt hàng trong giỏ hàng của bạn</p>
                                                </div>
                                                <div>
                                                    <p className="mb-0">
                                                        <span className="text-muted">Sắp xếp theo:</span>{" "}
                                                        <a href="#!" className="text-body">
                                                            giá <i className="fas fa-angle-down mt-1" />
                                                        </a>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="card mb-3">
                                                <div className="card-body">
                                                    <div className="d-flex justify-content-between">
                                                        <div className="d-flex flex-row align-items-center">
                                                            <div>
                                                                <img
                                                                    src="https://i.pinimg.com/564x/65/66/2f/65662f7588d98371923f970cab3f845e.jpg"
                                                                    className="img-fluid rounded-3"
                                                                    alt="Shopping item"
                                                                    style={{ width: 65 }}
                                                                />
                                                            </div>
                                                            <div className="ms-3">
                                                                <h5>ULTRA IV</h5>
                                                                <p className="small mb-0">Hãng: Nike, Size: 40</p>
                                                                <h6 className="mb-0">đ1.000.000</h6>
                                                            </div>
                                                        </div>
                                                        <div style={{justifyContent:"right"}} className="d-flex flex-row align-items-center">
                                                            <div style={{ width: "44%" , display:"flex"}}>
                                                                <button className="btn btn-link px-2"
                                                                        onClick="this.parentNode.querySelector('input[type=number]').stepDown()">
                                                                    <i style={{color:"black"}} className="fas fa-minus"></i>
                                                                </button>
                                                                <input style={{margin:"1% 0 0 0", maxWidth:"37%"}} id="form1" min="0" name="quantity" value="1"
                                                                       type="number"
                                                                       className="form-control form-control-sm"/>
                                                                <button className="btn btn-link px-2"
                                                                        onClick="this.parentNode.querySelector('input[type=number]').stepUp()">
                                                                    <i style={{color:"black"}} className="fas fa-plus"></i>
                                                                </button>
                                                            </div>
                                                            <a href="#!" style={{ color: "red" }}>
                                                                <i className="fas fa-trash-alt" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card mb-3">
                                                <div className="card-body">
                                                    <div className="d-flex justify-content-between">
                                                        <div className="d-flex flex-row align-items-center">
                                                            <div>
                                                                <img
                                                                    src="https://i.pinimg.com/564x/48/98/7d/48987ddd7fe9dbf7512bfa7abba1d66a.jpg"
                                                                    className="img-fluid rounded-3"
                                                                    alt="Shopping item"
                                                                    style={{ width: 65 }}
                                                                />
                                                            </div>
                                                            <div className="ms-3">
                                                                <h5>ULTRA IV</h5>
                                                                <p className="small mb-0">Hãng: Adidas, Size: 41</p>
                                                                <h6 className="mb-0">đ2.500.000</h6>
                                                            </div>
                                                        </div>
                                                        <div style={{justifyContent:"right"}} className="d-flex flex-row align-items-center">
                                                            <div style={{ width: "44%" , display:"flex"}}>
                                                                <button className="btn btn-link px-2"
                                                                        onClick="this.parentNode.querySelector('input[type=number]').stepDown()">
                                                                    <i style={{color:"black"}} className="fas fa-minus"></i>
                                                                </button>
                                                                <input style={{margin:"1% 0 0 0", maxWidth:"37%"}} id="form1" min="0" name="quantity" value="1"
                                                                       type="number"
                                                                       className="form-control form-control-sm"/>
                                                                <button className="btn btn-link px-2"
                                                                        onClick="this.parentNode.querySelector('input[type=number]').stepUp()">
                                                                    <i style={{color:"black"}} className="fas fa-plus"></i>
                                                                </button>
                                                            </div>
                                                            <a href="#!" style={{ color: "red" }}>
                                                                <i className="fas fa-trash-alt" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card mb-3">
                                                <div className="card-body">
                                                    <div className="d-flex justify-content-between">
                                                        <div className="d-flex flex-row align-items-center">
                                                            <div>
                                                                <img
                                                                    src="https://i.pinimg.com/564x/da/5f/8b/da5f8b4c4290c84a3a214914c54e874d.jpg"
                                                                    className="img-fluid rounded-3"
                                                                    alt="Shopping item"
                                                                    style={{ width: 65 }}
                                                                />
                                                            </div>
                                                            <div className="ms-3">
                                                                <h5>ULTRA IV</h5>
                                                                <p className="small mb-0">Hãng: Nike, Size: 40</p>
                                                                <h6 className="mb-0">đ1.000.000</h6>
                                                            </div>
                                                        </div>
                                                        <div style={{justifyContent:"right"}} className="d-flex flex-row align-items-center">
                                                            <div style={{ width: "44%" , display:"flex"}}>
                                                                <button className="btn btn-link px-2"
                                                                        onClick="this.parentNode.querySelector('input[type=number]').stepDown()">
                                                                    <i style={{color:"black"}} className="fas fa-minus"></i>
                                                                </button>
                                                                <input style={{margin:"1% 0 0 0", maxWidth:"37%"}} id="form1" min="0" name="quantity" value="1"
                                                                       type="number"
                                                                       className="form-control form-control-sm"/>
                                                                <button className="btn btn-link px-2"
                                                                        onClick="this.parentNode.querySelector('input[type=number]').stepUp()">
                                                                    <i style={{color:"black"}} className="fas fa-plus"></i>
                                                                </button>
                                                            </div>
                                                            <a href="#!" style={{ color: "red" }}>
                                                                <i className="fas fa-trash-alt" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card mb-3">
                                                <div className="card-body">
                                                    <div className="d-flex justify-content-between">
                                                        <div className="d-flex flex-row align-items-center">
                                                            <div>
                                                                <img
                                                                    src="https://i.pinimg.com/564x/94/3e/32/943e3267e3b6b68bd15c8605d100c0c0.jpg"
                                                                    className="img-fluid rounded-3"
                                                                    alt="Shopping item"
                                                                    style={{ width: 65 }}
                                                                />
                                                            </div>
                                                            <div className="ms-3">
                                                                <h5>ULTRA IV</h5>
                                                                <p className="small mb-0">Hãng: Nike, Size: 40</p>
                                                                <h6 className="mb-0">đ3.000.000</h6>
                                                            </div>
                                                        </div>
                                                        <div style={{justifyContent:"right"}} className="d-flex flex-row align-items-center">
                                                            <div style={{ width: "44%" , display:"flex"}}>
                                                                <button className="btn btn-link px-2"
                                                                        onClick="this.parentNode.querySelector('input[type=number]').stepDown()">
                                                                    <i style={{color:"black"}} className="fas fa-minus"></i>
                                                                </button>
                                                                <input style={{margin:"1% 0 0 0", maxWidth:"37%"}} id="form1" min="0" name="quantity" value="1"
                                                                       type="number"
                                                                       className="form-control form-control-sm"/>
                                                                <button className="btn btn-link px-2"
                                                                        onClick="this.parentNode.querySelector('input[type=number]').stepUp()">
                                                                    <i style={{color:"black"}} className="fas fa-plus"></i>
                                                                </button>
                                                            </div>
                                                            <a href="#!" style={{ color: "red" }}>
                                                                <i className="fas fa-trash-alt" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-5">
                                            <div className="card bg-primary text-white rounded-3">
                                                <div className="card-body">
                                                    <div className="d-flex justify-content-between align-items-center mb-4">
                                                        <h5 style={{color:"white",fontWeight:"bold"}} className="mb-0">Thanh toán đơn hàng</h5>
                                                        <img
                                                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                                                            className="img-fluid rounded-3"
                                                            style={{ width: 45 }}
                                                            alt="Avatar"
                                                        />
                                                    </div>
                                                    <p className="small mb-2">Lựa chọn phương thức thanh toán</p>
                                                    <a href="#!" type="submit" className="text-white">
                                                        <i className="fab fa-cc-mastercard fa-2x me-2" />
                                                    </a>
                                                    <a href="#!" type="submit" className="text-white">
                                                        <i className="fab fa-cc-visa fa-2x me-2" />
                                                    </a>
                                                    <a href="#!" type="submit" className="text-white">
                                                        <i className="fab fa-cc-amex fa-2x me-2" />
                                                    </a>
                                                    <a href="#!" type="submit" className="text-white">
                                                        <i className="fab fa-cc-paypal fa-2x" />
                                                    </a>
                                                    <form className="mt-4">
                                                        <div className="form-outline form-white mb-4">
                                                            <label className="form-label" htmlFor="typeName">
                                                                Nhập mã giảm giá nếu có
                                                            </label>
                                                        </div>
                                                        <div className="form-outline form-white" style={{display:"flex"}}>
                                                            <input
                                                                style={{width:"70%", margin:"0 3% 6% 0"}}
                                                                type="text"
                                                                id="typeText"
                                                                className="form-control form-control-lg"

                                                                placeholder="Nhập mã giảm giá"

                                                            />
                                                            <button style={{padding: "0.5rem 0rem", lineHeight:"1.5"}} type="button" className="btn btn-secondary btn-lg mb-4">Áp dụng</button>
                                                        </div>

                                                    </form>
                                                    <hr className="my-4" />
                                                    <div className="d-flex justify-content-between">
                                                        <p className="mb-2">Tổng tiền hàng</p>
                                                        <p className="mb-2">đ7.500.000</p>
                                                    </div>
                                                    <div className="d-flex justify-content-between">
                                                        <p className="mb-2">Phí vận chuyển</p>
                                                        <p className="mb-2">đ57.000</p>
                                                    </div>
                                                    <div className="d-flex justify-content-between">
                                                        <p className="mb-2">Tiền giảm giá</p>
                                                        <p className="mb-2">đ370.000</p>
                                                    </div>
                                                    <div className="d-flex justify-content-between mb-4">
                                                        <p  className="mb-2">Tổng thanh toán</p>
                                                        <p  className="mb-2">đ7.556.630</p>
                                                    </div>
                                                    <button
                                                        type="button"
                                                        className="btn btn-info btn-block btn-lg"
                                                    >
                                                        <div className="d-flex margin-right">
                                                            <span style={{margin: "0 auto"}}>
                                                                Tiến hành thanh toán
                                                            </span>
                                                        </div>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
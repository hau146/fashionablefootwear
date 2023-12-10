import {Link, useNavigate, useParams} from "react-router-dom";
import "../css/radioPay.css"
import * as ProductService from "../service/ProductService";
import {deleteAfterPayment, increasingTheNumber, payProduct, showCartById} from "../service/CartService";
import {useEffect, useState} from "react";
import * as CartService from "../service/CartService";
import ReactPaginate from "react-paginate";
import * as FormatService from "../service/FormatService";
import * as AccountService from "../service/AccountService";
import {vndToUsd} from "../service/FormatService";
import Swal from "sweetalert2";
import {PayPalButton} from "react-paypal-button-v2";
import {findByCode} from "../service/VoucherService";
import * as VoucherService from "../service/VoucherService";
import {toast} from "react-toastify";

export function Cart() {
    const navigate = useNavigate();
    const [cart, setCart] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [records, setRecords] = useState("");
    const [currentPage, setCurrentPage] = useState(0);
    const [limit, setLimit] = useState(3);
    const [userId, setUserId] = useState("");
    const {id} = useParams();
    const [sumCart, setSumCart] = useState(0);
    const [pay, setPay] = useState("");
    const [totalPrice, setTotalPrice] = useState(0);
    const [isChecked, setIsChecked] = useState(false);
    const [idProdutChecked, setIdProdutChecked] = useState(0);
    const [voucherUser, setVoucherUser] = useState({})
    const [inputValueVoucher, setInputValueVoucher] = useState('');
    const [totalPricePay, setTotalPricePay] = useState(0)


    useEffect(() => {
        getAppUserId();
        sumProductInCart();
    }, [])
    useEffect(() => {
        showCartById()
        totalPriceProductInCart(userId.id)
    }, [currentPage, id, totalPrice, cart]);


    const showCartById = async () => {
        const res = await CartService.showCartById(currentPage, limit, id);
        setCart(res.data.content);
        setRecords(res.data.size);
        setTotalPages(Math.ceil(res.data.totalElements / 3));
    }
    const handlePageClick = (event) => {
        setCurrentPage(+event.selected);
    };
    const sumProductInCart = async () => {
        const data = await CartService.sumProductInCart();
        setSumCart(data)
    }
    const totalPriceProductInCart = async (id) => {
        const data = await CartService.totalPrice(id);
        setTotalPrice(data);
        setTotalPricePay(data)
    }
    const getAppUserId = async () => {
        const isLoggedIn = AccountService.infoAppUserByJwtToken();
        if (isLoggedIn) {
            const id = await AccountService.getIdByUserName(isLoggedIn.sub);
            setUserId(id.data);
        }
    }
    const handleClickNumberIncrease = async (id) => {
        const status = await CartService.increasingTheNumber(id)
        if (status === 200) {
            showCartById()
            sumProductInCart();
            totalPriceProductInCart(userId.id)
        }
    }
    const handleClickNumberReduce = async (id) => {
        const status = await CartService.reduceTheNumberOf(id)
        if (status === 200) {
            showCartById()
            sumProductInCart();
            totalPriceProductInCart(userId.id)
        }
    }
    const handleCheckboxChange = (boolean) => {
        console.log(boolean)

    };
    const handleInputChange = (event) => {
        setInputValueVoucher(event.target.value);
    };

    const handleSubmitInputVoucher = async (event) => {
        event.preventDefault();
        console.log('Submitted value:', inputValueVoucher);
        const data = await VoucherService.findByCode(userId.id, inputValueVoucher);
        if (data === "") {
            toast.warning(
                "Hiện tại bạn chưa có voucher này")
        } else {
            console.log(data)
            await setVoucherUser(data);
            toast.success(`Sử dụng voucher thành công`)
            setInputValueVoucher("");
        }
    };
    useEffect(() => {
        setTotalPricePay(totalPricePay - voucherUser.discountMoney)
    }, [voucherUser]);
    const alertErros = () => {
        Swal.fire({
            title: "Thông báo!",
            text: `Giao dịch thất bại, vui lòng thử lại`,
            icon: "error"
        });
    }
    const vnPayOnclick = async (pricePay) => {
        const link = await CartService.checkVnPay(pricePay);
        window.location.href = link;
    }
    const successPay = async () => {
        const values = {
            idAccount: userId.id,
            totalPrice: totalPricePay,
            idDetailOrderStatus: 1
        }
        const status = await CartService.payProduct(values)
        if (status === 200) {
            await Swal.fire({
                position: "top-center",
                icon: "success",
                title: "Thanh toán đơn hàng thành công",
                showConfirmButton: false,
                timer: 1700
            });
            await CartService.deleteAfterPayment(userId.id)
            showCartById()
        } else {
            await Swal.fire({
                position: "top-center",
                icon: "warning",
                title: "Thanh toán thất bại",
                showConfirmButton: false,
                timer: 1900
            });
        }
    }

    return (
        <div>
            {cart? (
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
                        <section className="h-100 h-custom" style={{backgroundColor: "#eee"}}>
                            <div className="container py-5 h-100">
                                <div className="row d-flex justify-content-center align-items-center h-100">
                                    <div className="col">
                                        <div className="card">
                                            <div className="card-body p-4">
                                                <div className="row">
                                                    <div className="col-lg-7">
                                                        <h5 className="mb-3">
                                                            <Link className="text-body" to="/product">
                                                                <i className="fas fa-long-arrow-alt-left me-2"/>
                                                                Tiếp tục mua sắm
                                                            </Link>
                                                        </h5>
                                                        <hr/>
                                                        <div className="d-flex justify-content-between align-items-center mb-4">
                                                            <div>
                                                                <p className="mb-1">Giỏ hàng</p>
                                                                <p className="mb-0">Bạn có {sumCart} mặt hàng trong giỏ hàng của
                                                                    bạn</p>
                                                            </div>
                                                            <div>
                                                                <p className="mb-0">
                                                                    <span className="text-muted">Sắp xếp theo:</span>{" "}
                                                                    <a href="#!" className="text-body">
                                                                        giá <i className="fas fa-angle-down mt-1"/>
                                                                    </a>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        {cart.map(carts => {
                                                            return (
                                                                <div className="card mb-3">
                                                                    <div className="card-body">
                                                                        <div className="d-flex justify-content-between">
                                                                            <div className="d-flex flex-row align-items-center">
                                                                                {/*<input*/}
                                                                                {/*    onChange={(values) => handleCheckboxChange(values.target.value)}*/}
                                                                                {/*    style={{margin: "0 7% 0 -11%"}}*/}
                                                                                {/*    type="checkbox"/>*/}
                                                                                <div>
                                                                                    <img
                                                                                        src={carts.image}
                                                                                        className="img-fluid rounded-3"
                                                                                        alt="Shopping item"
                                                                                        style={{width: 65}}
                                                                                    />
                                                                                </div>
                                                                                <div className="ms-3">
                                                                                    <h5>{carts.nameProduct}</h5>
                                                                                    <p className="small mb-0">Hãng: {carts.typeProduct},
                                                                                        Size: {carts.sizeProduct}</p>
                                                                                    <h6 className="mb-0">đ{carts.priceProduct && FormatService.formatPrice(carts.priceProduct)}</h6>
                                                                                </div>
                                                                            </div>
                                                                            <div style={{justifyContent: "right"}}
                                                                                 className="d-flex flex-row align-items-center">
                                                                                <div style={{width: "55%", display: "flex"}}>
                                                                                    {carts.numberProduct === 1 ? (
                                                                                        <button className="btn btn-link px-2"
                                                                                                disabled>
                                                                                            <i style={{color: "black"}}
                                                                                               className="fas fa-minus"></i>
                                                                                        </button>
                                                                                    ) : (
                                                                                        <button className="btn btn-link px-2"
                                                                                                onClick={() => handleClickNumberReduce(carts.id)}>
                                                                                            <i style={{color: "black"}}
                                                                                               className="fas fa-minus"></i>
                                                                                        </button>
                                                                                    )}

                                                                                    <input style={{
                                                                                        margin: "1% 0 0 0",
                                                                                        maxWidth: "37%"
                                                                                    }}
                                                                                           id="form1" min="0" name="quantity"
                                                                                           value={carts.numberProduct}
                                                                                           type="number"
                                                                                           disabled
                                                                                           className="form-control form-control-sm"/>
                                                                                    <button className="btn btn-link px-2"
                                                                                            onClick={() => handleClickNumberIncrease(carts.id)}>
                                                                                        <i style={{color: "black"}}
                                                                                           className="fas fa-plus"></i>

                                                                                    </button>
                                                                                </div>


                                                                                <a href="#!" style={{color: "red"}}>
                                                                                    <i className="fas fa-trash-alt"/>
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            )
                                                        })}
                                                        <ReactPaginate
                                                            breakLabel="..."
                                                            nextLabel="sau >"
                                                            onPageChange={handlePageClick}
                                                            pageCount={totalPages}
                                                            forcePage={currentPage}
                                                            previousLabel="< trước"
                                                            renderOnZeroPageCount={false}
                                                            marginPagesDisplayed={1}
                                                            pageRangeDisplayed={3}
                                                            containerClassName={"pagination justify-content-center"}
                                                            previousClassName={"page-item"}
                                                            previousLinkClassName={"page-link"}
                                                            pageClassName={"page-item"}
                                                            pageLinkClassName={"page-link"}
                                                            nextClassName={"page-item"}
                                                            nextLinkClassName={"page-link"}
                                                            breakClassName={"page-item"}
                                                            breakLinkClassName={"page-link"}
                                                            activeClassName={"active"}
                                                        />
                                                    </div>

                                                    <div className="col-lg-5">
                                                        <div className="card bg-primary text-white rounded-3">
                                                            <div className="card-body">
                                                                <div
                                                                    className="d-flex justify-content-between align-items-center mb-4">
                                                                    <h5 style={{color: "white", fontWeight: "bold"}}
                                                                        className="mb-0">Thanh toán đơn hàng</h5>
                                                                    <img
                                                                        src={userId.avatar}
                                                                        className="img-fluid rounded-3"
                                                                        style={{width: "7%"}}
                                                                        alt="Avatar"
                                                                    />
                                                                </div>
                                                                <p className="small mb-2">Lựa chọn phương thức thanh toán</p>

                                                                <div className="radio-inputs" style={{marginLeft: "-10%"}}>
                                                                    <label>
                                                                        <input onChange={() => setPay("vnpay")}
                                                                               className="radio-input" type="radio" name="engine"/>
                                                                        <span className="radio-tile">
                                                                <span className="radio-icon">
                                                                </span>
                                                                <i className="fa-regular fa-credit-card"></i>
                                                                <span className="radio-label">VnPay</span>
                                                              </span>
                                                                    </label>
                                                                    <label>
                                                                        <input onChange={() => setPay("paypal")}
                                                                               className="radio-input" type="radio"
                                                                               name="engine"/>
                                                                        <span className="radio-tile">
                                                                <span className="radio-icon">
                                                                </span>
                                                                <i className="fa-brands fa-paypal"></i>
                                                                <span className="radio-label">Paypal</span>
                                                              </span>
                                                                    </label>
                                                                    <label>
                                                                        <input onChange={() => setPay("cod")}
                                                                               className="radio-input" type="radio" name="engine"/>
                                                                        <span className="radio-tile">
                                                            <span className="radio-icon">
                                                            </span>
                                                                <i className="fa-solid fa-truck"></i>
                                                            <span className="radio-label">COD</span>
                                                          </span>
                                                                    </label>
                                                                </div>
                                                                <form className="mt-4" onSubmit={handleSubmitInputVoucher}>
                                                                    <div className="form-outline form-white mb-4">
                                                                        <label className="form-label" htmlFor="typeName">
                                                                            Nhập mã giảm giá nếu có
                                                                        </label>
                                                                    </div>
                                                                    <div className="form-outline form-white"
                                                                         style={{display: "flex"}}>
                                                                        <input
                                                                            value={inputValueVoucher} onChange={handleInputChange}
                                                                            style={{width: "70%", margin: "0 3% 6% 0"}}
                                                                            type="text"
                                                                            id="typeText"
                                                                            className="form-control form-control-lg"
                                                                            placeholder="Nhập mã giảm giá"

                                                                        />
                                                                        {inputValueVoucher === "" ? (
                                                                            <button
                                                                                style={{padding: "0.5rem 0rem", lineHeight: "1.5"}}
                                                                                type="button"
                                                                                disabled
                                                                                className="btn btn-secondary btn-lg mb-4">Áp dụng
                                                                            </button>
                                                                        ) : (
                                                                            <button
                                                                                style={{padding: "0.5rem 0rem", lineHeight: "1.5"}}
                                                                                type="submit"
                                                                                className="btn btn-secondary btn-lg mb-4">Áp dụng
                                                                            </button>
                                                                        )}
                                                                    </div>
                                                                </form>
                                                                <hr className="my-4"/>
                                                                <div className="d-flex justify-content-between">
                                                                    <p className="mb-2">Tổng tiền hàng</p>
                                                                    <p className="mb-2">đ{totalPrice && FormatService.formatPrice(totalPrice)}</p>
                                                                </div>
                                                                {/*<div className="d-flex justify-content-between">*/}
                                                                {/*    <p className="mb-2">Phí vận chuyển</p>*/}
                                                                {/*    <p className="mb-2">đ57.000</p>*/}
                                                                {/*</div>*/}
                                                                <div className="d-flex justify-content-between">
                                                                    <p className="mb-2">Tiền giảm giá</p>
                                                                    <p className="mb-2">đ{Object.keys(voucherUser).length === 0 ? ("0") : (voucherUser && FormatService.formatPrice(voucherUser.discountMoney))}</p>
                                                                </div>
                                                                <div className="d-flex justify-content-between mb-4">
                                                                    <p className="mb-2">Tổng thanh toán</p>
                                                                    <p className="mb-2">đ{totalPricePay}</p>
                                                                </div>
                                                                {pay === '' ? (
                                                                    <div className="mt-70">
                                                                        <p className="title" style={{
                                                                            fontSize: "100%",
                                                                            textAlign: "center",
                                                                            marginTop: "15%"
                                                                        }}>Vui lòng chọn phương thức thanh
                                                                            toán</p>
                                                                    </div>
                                                                ) : null}

                                                                {pay === 'cod' ? (
                                                                    <button
                                                                        type="button"
                                                                        className="btn btn-info btn-block btn-lg"
                                                                        style={{width: "100%"}}
                                                                    >
                                                                        <div className="d-flex margin-right">
                                                            <span style={{margin: "0 auto"}}>
                                                                Tiến hành đặt hàng
                                                            </span>
                                                                        </div>
                                                                    </button>
                                                                ) : null}

                                                                {pay === 'paypal' ? (
                                                                    <PayPalButton classname="paypal-button-label-container"
                                                                                  amount="1"
                                                                        // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
                                                                                  onSuccess={(details, data) => {
                                                                                      successPay()
                                                                                      // OPTIONAL: Call your server to save the transaction
                                                                                      return fetch("/paypal-transaction-complete", {
                                                                                          method: "post",
                                                                                          body: JSON.stringify({
                                                                                              orderID: data.orderID
                                                                                          })
                                                                                      });
                                                                                  }}
                                                                                  onError={() => {
                                                                                      alertErros()
                                                                                  }}
                                                                    />
                                                                ) : null}

                                                                {pay === 'vnpay' ? (
                                                                    <button
                                                                        type="button"
                                                                        className="btn btn-info btn-block btn-lg"
                                                                        style={{width: "100%"}}
                                                                        onClick={() => vnPayOnclick(totalPricePay)}
                                                                    >
                                                                        <div className="d-flex margin-right">
                                                            <span style={{margin: "0 auto"}}>
                                                                Tiến hành thanh toán VnPay
                                                            </span>
                                                                        </div>
                                                                    </button>
                                                                ) : null}
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
            ):(
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
                    <section className="h-100 h-custom" style={{backgroundColor: "#eee"}}>
                        <div className="container py-5 h-100">
                            <div className="row d-flex justify-content-center align-items-center h-100">
                                <div className="col">
                                    <div className="card">
                                        <div className="card-body p-4">
                                            <div className="row">
                                                <div style={{margin:"0 0 0 35%"}} className="col-lg-7">
                                                    <h5 className="mb-3">
                                                        <Link className="text-body" to="/product">
                                                            Chưa có sản phẩm nào trong giỏ hàng <br/>
                                                            Bạn hãy thêm sản phẩm vào <Link style={{color:"blue"}} to="/product">đây</Link> nhé
                                                        </Link>
                                                    </h5>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            )}
        </div>
    )
}
import "../css/history.css"
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import * as OrderProductDetailService from "../service/OrderProductDetailService";
import * as FormatService from "../service/FormatService";
import ReactPaginate from "react-paginate";
import moment from "moment";
import * as AccountService from "../service/AccountService";
import {findAllByIdOrderProductDetail, findAllOrderProductById} from "../service/OrderProductDetailService";

export function HistoryPayCart() {
    const [totalPages, setTotalPages] = useState(0);
    const [records, setRecords] = useState("");
    const [orderProduct, setOrderProduct] = useState([]);
    const [orderProductDetail, setOrderProductDetail] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [limit, setLimit] = useState(4);
    const [userId, setUserId] = useState("");
    const {id} = useParams();


    useEffect(() => {
        findAllOrderProductById()
    }, [id, currentPage]);
    useEffect(() => {
        getAppUserId();
    }, [])

    const findAllOrderProductById = async () => {
        const res = await OrderProductDetailService.findAllOrderProductById(currentPage, limit, id);
        setOrderProduct(res.data.content);
        setRecords(res.data.size);
        setTotalPages(Math.ceil(res.data.totalElements / 4));
    }

    const findAllByIdOrderProductDetail = async (idOrderProduct) => {
        const res = await OrderProductDetailService.findAllByIdOrderProductDetail(currentPage, limit, idOrderProduct);
        console.log(res.data.content);
        console.log("+++++++++++++")
        setOrderProductDetail(res.data.content);
        setRecords(res.data.size);
        setTotalPages(Math.ceil(res.data.totalElements / 4));
    }

    const handlePageClick = (event) => {
        setCurrentPage(+event.selected);
    };
    const formatDate = (dateTimeString) => {
        const formattedDateTime = moment(dateTimeString).format("DD-MM-YYYY HH:mm");
        return formattedDateTime;
    };
    const getAppUserId = async () => {
        const isLoggedIn = AccountService.infoAppUserByJwtToken();
        if (isLoggedIn) {
            const id = await AccountService.getIdByUserName(isLoggedIn.sub);
            setUserId(id.data);
        }
    }


    return (
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
            <section className="ftco-section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6 text-center mb-4">
                            <h2 className="heading-section">Lịch sử mua hàng</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="table-wrap">
                                <table className="table">
                                    <thead className="thead-dark">
                                    <tr>
                                        <th>#</th>
                                        <th>Ngày đặt hàng</th>
                                        <th>Tổng thanh toán</th>
                                        <th style={{textAlign: "center"}}>Tình trạng</th>
                                        <th>&nbsp;</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {orderProduct.map((orderProducts, index) => (
                                        <>
                                            <tr
                                                className="alert"
                                                role="alert"
                                                data-bs-toggle="modal"
                                                data-bs-target="#history"
                                                onClick={() => findAllByIdOrderProductDetail(orderProducts.id)}
                                                key={index}
                                            >
                                                <td>
                                                    <label>{index + 1}</label>
                                                </td>
                                                <td>
                                                    <div className="email">
                                                        <span style={{fontWeight: "bold", color: "black"}}>
                                                          {orderProducts && formatDate(orderProducts.date)}
                                                        </span>
                                                    </div>
                                                </td>
                                                <td>đ{orderProducts && FormatService.formatPrice(orderProducts.totalPrice)}</td>
                                                <td style={{width: "30%"}}>
                                                    {orderProducts.nameOrderStatus}
                                                    <p style={{fontWeight: "bold", color: "black"}}>Nơi
                                                        nhận: {userId.address}</p>
                                                </td>
                                            </tr>
                                        </>
                                    ))}
                                    </tbody>
                                </table>
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
                        </div>
                    </div>
                </div>

                <div className="modal fade" id="history" data-bs-backdrop="static" data-bs-keyboard="false"
                     tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content" style={{width: "220%", left: "-50%"}}>
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="staticBackdropLabel">Chi tiết đơn hàng</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="table-wrap">
                                            <table className="table">
                                                <thead className="thead-dark">
                                                <tr>
                                                    <th>#</th>
                                                    <th>&nbsp;</th>
                                                    <th>Sản phẩm</th>
                                                    <th>Tổng giá</th>
                                                    <th style={{padding: "30px 1%"}}>Đã mua(Đôi)</th>
                                                    <th>&nbsp;</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                {orderProductDetail.map((orderProductDetails, index) => {
                                                    return (
                                                        <tr className="alert" role="alert" data-bs-toggle="modal"
                                                            data-bs-target="#history">
                                                            <td>
                                                                <label>
                                                                    {index + 1}
                                                                </label>
                                                            </td>
                                                            <td>
                                                                <div className="img"
                                                                     style={{
                                                                         backgroundImage: `url(${orderProductDetails.image})`,
                                                                         borderRadius: "15%"
                                                                     }}/>
                                                            </td>
                                                            <td>
                                                                <div className="email">
                                                                    <span>{orderProductDetails.name} </span>
                                                                    <span style={{
                                                                        fontWeight: "bold",
                                                                        color: "black"
                                                                    }}>size:{orderProductDetails.sizeProduct}</span>
                                                                </div>
                                                            </td>
                                                            <td>đ{orderProductDetails && FormatService.formatPrice(orderProductDetails.totalPrice)}</td>
                                                            <td className="quantity">
                                                                <div className="input-group">
                                                                    <input type="text" name="quantity"
                                                                           disabled
                                                                           className="quantity form-control input-number"
                                                                           defaultValue={orderProductDetails.numberProduct}
                                                                           min={1} max={100}/>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    )
                                                })}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Đóng
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}
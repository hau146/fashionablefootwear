import {useEffect, useState} from "react";
import * as ProductService from "../service/ProductService";
import {Link, useParams} from "react-router-dom";
import ReactPaginate from "react-paginate";

export const SearchProduct = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [typeId, setTypeId] = useState("");
    const [product, setProduct] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(3);
    const searchNameFromHome = useParams().searchName;

    useEffect(() => {
        getAllProduct()
    }, [currentPage, searchNameFromHome]);
    const getAllProduct = async () => {
        if (searchNameFromHome) {
            const res = await ProductService.getAllProduct(currentPage, limit, searchNameFromHome, typeId);
            setProduct(res.data.content);
            setTotalPages(Math.ceil(res.data.totalElements / 3));
        }
    }
    const handlePageClick = (event) => {
        setCurrentPage(+event.selected);
        console.log(+event.selected)
    };

    return (
        <div>
            {searchNameFromHome ? (
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
                    {/*<div className="wrapper">*/}
                    {/*    <div className="content">*/}
                    {/*        <h3 style={{textAlign:"center"}}>Những đôi giày bạn tìm được</h3>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    <section className="menu-items">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                </div>
                                <div className="col-12">
                                    <div className="wrapper">
                                        <div className="tab-content" id="myTabContent">
                                            <div
                                                className="tab-pane fade show active"
                                                id="starters"
                                                role="tabpanel"
                                                aria-labelledby="starters-item"
                                            >
                                                <div className="row">
                                                    {product.map(products => {
                                                        return (
                                                            <div

                                                                className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12"
                                                                key={products.id}>
                                                                <figure>
                                                                    <Link to={`/detailProduct/${products.id}`}>
                                                                        <div className="images">
                                                                            <img src={products.image}/>
                                                                        </div>
                                                                        <div className="content">
                                                                            <h4>{products.name}</h4>
                                                                            <Link to={`/detailProduct/${products.id}`}>Đặt
                                                                                ngay</Link>
                                                                        </div>
                                                                    </Link>
                                                                </figure>
                                                            </div>
                                                        )
                                                    })}


                                                </div>
                                            </div>
                                        </div>

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
                    </section>
                </div>
            ) : (
                <div className="wrapper">
                    <div className="content">
                        <h3 style={{textAlign: "center"}}>Không có đôi giày bạn cần tìm, vui lòng nhập lại</h3>
                    </div>
                </div>
            )}
        </div>
    )
}
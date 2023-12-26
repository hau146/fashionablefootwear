import {useEffect, useState} from "react";
import * as ProductService from "../service/ProductService";
import {Link, useParams} from "react-router-dom";
import ReactPaginate from "react-paginate";

export const SearchProduct = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [typeId, setTypeId] = useState("");
    const [product, setProduct] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(9);
    const {searchName} = useParams();

    useEffect(() => {
        if(searchName === "`" || searchName === "``" || searchName === "[" || searchName === "]" || searchName === "{" || searchName === "}" || searchName === "?"){
            setProduct(undefined)
        } else {
            getAllProduct()
        }
    }, [currentPage, searchName]);
    const getAllProduct = async () => {
        if (searchName) {
            const res = await ProductService.getAllProduct(currentPage, limit, searchName, typeId, "");
            console.log(res.data.content)
            setProduct(res.data.content);
            setTotalPages(Math.ceil(res.data.totalElements / 9));
        }
    }
    const handlePageClick = (event) => {
        setCurrentPage(+event.selected);
        console.log(+event.selected)
    };

    return (
        <div>
            {product !== undefined ? (
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
                    <section className="menu-items">
                        <div>
                            <h1 style={{textAlign:"center", fontWeight:"bold"}}>Tìm được {product.length} đôi giày trong từ khóa "{searchName}"</h1>
                        </div>
                        <div className="container">
                            <div className="row" style={{margin:"3% 0 20% 0"}}>
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
                                                                key={products.id} style={{margin:"0 0 -25% 0"}}>
                                                                <figure>
                                                                    <Link to={`/detailProduct/${products.id}`}>
                                                                        <div className="images">
                                                                            <img style={{height:"500px", width:"100%"}} src={products.image}/>
                                                                        </div>
                                                                        <div className="content" style={{margin:"44% 0 0 0"}}>
                                                                            <h4 style={{display:"block"}}>{products.name}</h4>
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

                                        <div style={{margin:"21% 0 0 0"}}>
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
                        </div>
                    </section>
                </div>
            ) : (
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
                    <h2 style={{textAlign:"center", margin:"5% 0"}}>Không có đôi giày bạn cần tìm, vui lòng nhập lại!</h2>
                </div>
            )}
        </div>
    )
}
import {useEffect, useState} from "react";
import * as SizeService from "../service/SizeService";
import * as ImageService from "../service/ImageService";
import * as ProductService from "../service/ProductService";
import ReactPaginate from "react-paginate";
import {Link} from "react-router-dom";
import * as FormatService from "../service/FormatService";

export function Product() {
    const [size, setSize] = useState([]);
    const [image, setImage] = useState([]);
    const [typeProduct, setTypeProduct] = useState([]);
    const [product, setProduct] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [records, setRecords] = useState("");
    const [currentPage, setCurrentPage] = useState(0);
    const [refresh, setRefresh] = useState(true);
    const [limit, setLimit] = useState(9);
    const [nameProduct, setNameProduct] = useState("");
    const [typeId, setTypeId] = useState("1");
    const [typeSort, setTypeSort] = useState(0);


    useEffect(() => {
        getAllSize()
        getAllImage()
        getAllTypeProduct()
    }, []);
    useEffect(() => {
        getAllProduct()
    }, [nameProduct, typeProduct, currentPage, typeId, typeSort]);
    const getAllSize = async () => {
        const data = await SizeService.getAllSize();
        setSize(data);
    }
    const getAllImage = async () => {
        const data = await ImageService.getAllImage();
        setImage(data);
    }
    const getAllTypeProduct = async () => {
        const data = await ProductService.getAllTypeProduct();
        setTypeProduct(data);
    }
    const getAllProduct = async () => {
        const res = await ProductService.getAllProduct(currentPage, limit, nameProduct, typeId, typeSort);
        setProduct(res.data.content);
        setRecords(res.data.size);
        setTotalPages(Math.ceil(res.data.totalElements / 9));
    }

    const handlePageClick = (event) => {
        setCurrentPage(+event.selected);
        setRefresh((refresh) => !refresh);
    };

    if (!typeProduct) return null

    return (
        <div>
            <main>
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
                {/* ========================================================================= */}
                <section className="se-second">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-sm-12">
                                <div className="wrapper">
                                    <div className="content">
                                        <div className="image">
                                            <img
                                                src="https://firebasestorage.googleapis.com/v0/b/sneaker-db938.appspot.com/o/image-sneaker%2Fjordan1.png?alt=media&token=52a4890d-07dc-41e8-8baa-7f910dea83d2"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <div className="wrapper">
                                    <div className="content">
                                        <h3>Nike Air Jordan 1 x High End Brands - 3D Concept</h3>
                                        <p>
                                            Đôi giày Nike Air Jordan 1 x High End Brands - 3D Concept
                                            là một phiên bản đặc biệt và hợp tác giữa Nike Air Jordan 1 và các thương
                                            hiệu cao cấp khác.
                                            Được thiết kế theo khái niệm 3D, đôi giày này mang đến một diện mạo độc đáo
                                            và đầy ấn tượng.
                                            <br/>
                                            Với thiết kế gốc từ Nike Air Jordan 1,
                                            đôi giày này giữ nguyên phong cách cổ điển và đặc trưng của dòng sản phẩm
                                            Air Jordan.
                                            Chúng có dáng hiện đại, cao cổ và với phần trên làm từ chất liệu da hoặc da
                                            tổng hợp chất lượng cao, tạo nên sự sang trọng và bền bỉ.
                                            <br/>
                                            Nike Air Jordan 1 x High End Brands - 3D Concept có thể là một sản phẩm giới
                                            hạn hoặc chỉ tồn tại trong hình ảnh và khái niệm.
                                            Việc kết hợp giữa thương hiệu Nike Air Jordan và các thương hiệu cao cấp
                                            khác tạo nên một sự kết hợp độc đáo và thu hút sự chú ý của
                                            người hâm mộ giày sneaker và người yêu thích thời trang.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="menu-items">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                            </div>
                            <div className="col-12">
                                <div className="wrapper">
                                    <ul className="nav nav-tabs border-0" id="myTab" role="tablist">

                                        {typeProduct.map(types => {
                                            return (
                                                <li className="nav-item">
                                                    <button
                                                        type="button"
                                                        className="nav-link"
                                                        id="starters-item"
                                                        data-toggle="tab"
                                                        role="tab"
                                                        aria-controls="all"
                                                        aria-selected="true"
                                                        onClick={() => setTypeId(types.id)}
                                                        key={types.id}
                                                    >
                                                        {types.name}
                                                    </button>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                    <div>
                                        <select style={{width:"18%"}} className="form-select" aria-label="Default select example"
                                        onChange={(value) => setTypeSort(value.target.value)}
                                        >
                                            <option selected value="">Tìm theo</option>
                                            <option value="1">Giá thấp đến cao</option>
                                            <option value="2">Giá cao đến thấp</option>
                                            <option value="3">Lượt mua thấp đến cao</option>
                                            <option value="4">Lượt mua cao đến thấp</option>
                                        </select>
                                    </div>


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
                                                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12"
                                                             key={products.id} style={{margin:"0 0 -20% 0"}}>
                                                            <figure>
                                                                <Link to={`/detailProduct/${products.id}`}>
                                                                    <div className="images">
                                                                        <img src={products.image}/>
                                                                    </div>
                                                                    <div className="content" style={{margin:"49% 0 0 0"}}>
                                                                        <h4>{products.name}</h4>
                                                                        <div className="wrapper">
                                                                            <div className="content"
                                                                                 style={{display: "flex"}}>
                                                                                <h5 className="ml-20">đ{products.price && FormatService.formatPrice(products.price)}</h5>
                                                                                <p style={{
                                                                                    textAlign: "right",
                                                                                    margin: "-1% 0 0 0"
                                                                                }}>
                                                                                    Đã bán {products.sellNumber}
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                        {/*<Link to={`/detailProduct/${products.id}`}>Đặt ngay</Link>*/}
                                                                    </div>
                                                                </Link>
                                                            </figure>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </div>

                                    {/*<nav aria-label="Page navigation example">*/}
                                    {/*    <ul className="pagination justify-content-center">*/}
                                    {/*        <li className="page-item">*/}
                                    {/*            <button className="page-link " aria-label="Previous" onClick={() => prePage()} tabIndex={-1} disabled={currentPage + 1 <= 1}>*/}
                                    {/*                Trước*/}
                                    {/*            </button>*/}
                                    {/*        </li>*/}
                                    {/*        <li className="page-item"><button className="page-link" >{currentPage + 1}/{totalPages}</button></li>*/}
                                    {/*        <li className="page-item">*/}
                                    {/*            <button className="page-link" aria-label="Next" disabled={currentPage + 1 >= totalPages} onClick={() => nextPage()}>*/}
                                    {/*                Sau*/}
                                    {/*            </button>*/}
                                    {/*        </li>*/}
                                    {/*    </ul>*/}
                                    {/*</nav>*/}

                                    <div style={{margin: "20% 0 0 0"}}>
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
                {/* ========================================================================= */}
            </main>

        </div>
    )
}
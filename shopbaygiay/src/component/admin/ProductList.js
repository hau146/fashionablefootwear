import {useEffect, useState} from "react";
import * as SizeService from "../../service/SizeService";
import * as ImageService from "../../service/ImageService";
import * as ProductService from "../../service/ProductService";
import ReactPaginate from "react-paginate";
import * as FormatService from "../../service/FormatService";
import Swal from "sweetalert2";
import {toast} from "react-toastify";
import "../../css/admin/search.css"

export function ProductList() {
    const [size, setSize] = useState([]);
    const [image, setImage] = useState([]);
    const [typeProduct, setTypeProduct] = useState([]);
    const [product, setProduct] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [records, setRecords] = useState("");
    const [currentPage, setCurrentPage] = useState(0);
    const [refresh, setRefresh] = useState(true);
    const [limit, setLimit] = useState(5);
    const [nameProduct, setNameProduct] = useState("");
    const [typeId, setTypeId] = useState("");


    useEffect(() => {
        getAllSize()
        getAllImage()
        getAllTypeProduct()
    }, []);
    useEffect(() => {
        getAllProduct()
    }, [nameProduct, typeProduct, currentPage, typeId]);
    console.log(typeId)
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
        const res = await ProductService.getAllProduct(currentPage, limit, nameProduct, typeId);
        setProduct(res.data.content);
        setRecords(res.data.size);
        setTotalPages(Math.ceil(res.data.totalElements / 5));
    }
    const handlePageClick = (event) => {
        setCurrentPage(+event.selected);
        console.log(+event.selected)
        setRefresh((refresh) => !refresh);
    };
    const deleteById = async (id, name) => {
        await Swal.fire({
            title: `Bạn có chắc chắn muốn xóa đôi giày ${name} ?`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Xác nhận",
            cancelButtonText: "Không",
        }).then(async (result) => {
            if (result.isConfirmed) {
                const status = await ProductService.deleteById(id);
                if(status === 200){
                    await toast.success("Xóa thành công")
                    getAllProduct()
                }
            }
        });

    }



    if (!typeProduct) return null

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
                        <div className="col-md-6 text-center mb-4" style={{display:"flex"}}>
                            <h2 className="heading-section">Danh sách sản phẩm</h2>
                            <form className="form">
                                <label htmlFor="search">
                                    <input required autoComplete="off" placeholder="Nhập tên giày" id="search" type="text" />
                                    <div className="icon">
                                        <svg strokeWidth={2} stroke="currentColor" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="swap-on">
                                            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinejoin="round" strokeLinecap="round" />
                                        </svg>
                                        <svg strokeWidth={2} stroke="currentColor" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="swap-off">
                                            <path d="M10 19l-7-7m0 0l7-7m-7 7h18" strokeLinejoin="round" strokeLinecap="round" />
                                        </svg>
                                    </div>
                                    <button type="reset" className="close-btn">
                                        <svg viewBox="0 0 20 20" className="h-5 w-5" xmlns="http://www.w3.org/2000/svg">
                                            <path clipRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" fillRule="evenodd" />
                                        </svg>
                                    </button>
                                </label>
                            </form>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="table-wrap">
                                <table className="table">
                                    <thead className="thead-dark">
                                    <tr>
                                        <th>#</th>
                                        <th>&nbsp;</th>
                                        <th>Sản phẩm</th>
                                        <th>Giá giày</th>
                                        {/*<th style={{padding:"30px 1%"}}>Đã mua(Đôi)</th>*/}
                                        <th>Hãng</th>
                                        <th>&nbsp;</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {product.map((products, index) => {
                                        return(
                                            <tr className="alert" role="alert">
                                                <td>
                                                    <label>
                                                        {index+1}
                                                    </label>
                                                </td>
                                                <td>
                                                    <div className="img"
                                                         style={{backgroundImage: `url(${products.image})`,borderRadius:"15%"}}/>
                                                </td>
                                                <td>
                                                    <div className="email">
                                                        <span>{products.name} </span>
                                                        <span style={{fontWeight:"bold", color:"black"}}>Còn lại: {products.numberProduct}</span>
                                                        <span style={{fontWeight:"bold", color:"black"}}>Đã bán: {products.sellNumber}</span>
                                                    </div>
                                                </td>
                                                <td>đ{products && FormatService.formatPrice(products.price)}</td>
                                                {/*<td className="quantity">*/}
                                                {/*    <div className="input-group">*/}
                                                {/*        <input type="text" name="quantity"*/}
                                                {/*               disabled*/}
                                                {/*               className="quantity form-control input-number" defaultValue={products.numberProduct}*/}
                                                {/*               min={1} max={100}/>*/}
                                                {/*    </div>*/}
                                                {/*</td>*/}
                                                <td style={{width:"15%"}}>{products.typeProduct}</td>
                                                <td>
                                                    <button type="button" className="close" data-dismiss="alert" aria-label="Close"
                                                    onClick={() => deleteById(products.id, products.name)}
                                                    >
                                                        <span aria-hidden="true"><i className="fa fa-close"></i></span>
                                                    </button>
                                                </td>
                                            </tr>
                                        )
                                    })}
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
            </section>
        </div>
    )
}
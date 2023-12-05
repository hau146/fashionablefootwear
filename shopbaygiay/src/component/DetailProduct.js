import "../css/detailProduct.css"
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {findByAllIdProduct, findByImageIdProduct, findBySizeIdProduct} from "../service/ProductService";
import * as productService from "../service/ProductService";
import {logDOM} from "@testing-library/react";
import {formatPrice} from "../service/FormatService";
import * as FormatService from "../service/FormatService";

export function DetailProduct() {
    const [product, setProduct] = useState({});
    const [sizeProduct, setSizeProduct] = useState([]);
    const [images, setImagesProduct] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        if (id) {
            findByAllIdProduct(id);
            findBySizeIdProduct(id);
            findByImageIdProduct(id);
        }
        // findByAllIdProduct(id);
    }, [id]);
    // useEffect(() => {
    //     findByAllIdProduct();
    // }, [id]);

    const findByAllIdProduct = async (id) => {
        const data = await productService.findByAllIdProduct(id);
        setProduct(data);
    };
    const findBySizeIdProduct = async (id) => {
        const data = await productService.findBySizeIdProduct(id);
        setSizeProduct(data);
    };
    const findByImageIdProduct = async (id) => {
        const data = await productService.findByImageIdProduct(id);
        setImagesProduct(data);
    };

    console.log("+++++++++++++++")
    console.log(product)
    if (!images) return null
    return (
        <>
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
            {/* content */}
            <section className="py-5">
                <div className="container">
                    <div className="row gx-5">
                        <aside className="col-lg-6">
                            <div className="border rounded-4 mb-3 d-flex justify-content-center">
                                {/*<a*/}
                                {/*    data-fslightbox="mygalley"*/}
                                {/*    className="rounded-4"*/}
                                {/*    target="_blank"*/}
                                {/*    datatype="image"*/}
                                {/*    href="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/detail1/big.webp"*/}
                                {/*>*/}
                                {/*    <img*/}
                                {/*        style={{ maxWidth: "100%", maxHeight: "100vh", margin: "auto" }}*/}
                                {/*        className="rounded-4 fit"*/}
                                {/*        src="https://i.pinimg.com/564x/51/0f/37/510f37fb7fbcfc79014a780f96699f2e.jpg"*/}
                                {/*    />*/}
                                {/*</a>*/}


                                <div
                                    id="carouselExampleFade"
                                    className="carousel slide carousel-fade "
                                    data-ride="carousel"
                                >
                                    <div
                                        id="carouselExampleControls"
                                        className="carousel slide"
                                        data-bs-ride="carousel"
                                    >
                                        <div className="carousel-inner">
                                            {images.map(image => {
                                                return (
                                                    <div className="carousel-item active">
                                                        <img
                                                            className="rounded-4 fit"
                                                            src={image.image}
                                                        />
                                                    </div>
                                                )
                                            })}

                                            {/*<div className="carousel-item active ">*/}
                                            {/*    <img*/}
                                            {/*        className="rounded-4 fit"*/}
                                            {/*        src="https://i.pinimg.com/564x/51/0f/37/510f37fb7fbcfc79014a780f96699f2e.jpg"*/}
                                            {/*    />*/}
                                            {/*</div>*/}
                                            {/*<div className="carousel-item">*/}
                                            {/*    <img*/}

                                            {/*        className="rounded-4 fit"*/}
                                            {/*        src="https://i.pinimg.com/564x/8b/ae/98/8bae9814346f9e92d305c3d206f4248c.jpg"*/}
                                            {/*    />*/}
                                            {/*</div>*/}
                                            {/*<div className="carousel-item">*/}
                                            {/*    <img*/}
                                            {/*        className="rounded-4 fit"*/}
                                            {/*        src="https://i.pinimg.com/736x/7d/c7/11/7dc71176060d31ac05b8578f8a8a5bc7.jpg"*/}
                                            {/*    />*/}
                                            {/*</div>*/}


                                            <button
                                                className="carousel-control-prev"
                                                type="button"
                                                data-bs-target="#carouselExampleControls"
                                                data-bs-slide="prev"
                                            >
                                                <span style={{color: "black"}} className="carousel-control-prev-icon"
                                                      aria-hidden="true"/>


                                                <span className="visually-hidden">Previous</span>
                                            </button>
                                            <button
                                                className="carousel-control-next"
                                                type="button"
                                                data-bs-target="#carouselExampleControls"
                                                data-bs-slide="next"
                                            >
                                                <span className="carousel-control-next-icon" aria-hidden="true"/>
                                                <span className="visually-hidden">Next</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* thumbs-wrap.// */}
                            {/* gallery-wrap .end// */}
                        </aside>
                        <main className="col-lg-6">
                            <div className="ps-lg-3">
                                <h4 className="title text-dark">
                                    {product.name}
                                </h4>
                                <div className="d-flex flex-row my-3">
                                              <span className="text-muted">
                          <i className="fas fa-shopping-basket fa-sm mx-1"/>
                          <span className="text-success ms-2">{product.sellNumber}</span> đơn đã bán
                        </span>

                                </div>
                                <div className="mb-3">
                                    <span className="h5">{product.price &&  FormatService.formatPrice(product.price)}</span>
                                    <span className="text-muted">/đôi</span>
                                </div>
                                <p>
                                    Là một loại giày thể thao phổ biến và được ưa chuộng trên toàn thế giới.
                                    Đôi sneaker không chỉ là một phụ kiện thời trang mà còn là biểu tượng của sự thoải
                                    mái và cá nhân hóa.
                                    Đối với tôi, sneaker không chỉ là một đôi giày, mà còn là một phần của cuộc sống
                                    hàng ngày.
                                </p>
                                <div className="row">
                                    <dt className="col-4">Loại giày :</dt>
                                    <dd className="col-8">{product.typeProduct}</dd>
                                    <dt className="col-4">Còn lại :</dt>
                                    <dd className="col-8">{product.numberProduct} đôi</dd>
                                    <dt className="col-4">Giá vận chuyển :</dt>
                                    <dd className="col-8">
                                        {product.shippingCost === 0 ? (<p>Miễn Phí vận chuyển</p>):(product.shippingCost && FormatService.formatPrice(product.shippingCost))}
                                    </dd>
                                </div>
                                <hr/>
                                <div className="row mb-4">
                                    <div className="col-md-4 col-6">
                                        <label className="mb-2">Kích thước</label>
                                        <select
                                            className="form-select border border-secondary"
                                            style={{height: 35}}
                                        >
                                            {sizeProduct.map((sizeProducts, index) => {
                                                return (
                                                    <option key={index + 1}>{sizeProducts.sizeNumber}</option>
                                                )
                                            })}
                                        </select>
                                    </div>
                                    {/* col.// */}
                                    <div className="col-md-4 col-6 mb-3">
                                        <label className="mb-2 d-block">Số lượng</label>
                                        <div className="input-group mb-3" style={{width: 170}}>
                                            <button
                                                className="btn btn-white border border-secondary px-3"
                                                type="button"
                                                id="button-addon1"
                                                data-mdb-ripple-color="dark"
                                            >
                                                <i className="fas fa-minus"/>
                                            </button>
                                            <input
                                                type="text"
                                                className="form-control bg-light text-center border border-secondary"
                                                placeholder={1}
                                                aria-label="Example text with button addon"
                                                aria-describedby="button-addon1"
                                            />
                                            <button
                                                className="btn btn-white border border-secondary px-3"
                                                type="button"
                                                id="button-addon2"
                                                data-mdb-ripple-color="dark"
                                            >
                                                <i className="fas fa-plus"/>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                {/*<a href="#" className="btn btn-warning shadow-0">*/}
                                {/*    {" "}*/}
                                {/*    Buy now{" "}*/}
                                {/*</a>*/}
                                <button style={{width: "40%", display: "flex"}} className="btn btn-dark shadow-0">
                                    {" "}
                                    <i style={{color: "white", marginTop: "8%"}}
                                       className="me-1 fa fa-shopping-basket"/> <p
                                    style={{color: "white", marginTop: "7%"}}>Thêm vào giỏ hàng{" "}</p>
                                </button>
                            </div>
                        </main>
                    </div>
                </div>
            </section>
            {/* content */}

            {/* Footer */}
        </>

    )
}
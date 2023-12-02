import "../css/bootstrap.min.css"
import "../css/plugins/owl.carousel.min.css"
import "../css/mainPage.css"
import {Link} from "react-router-dom";
export function MainPage(){
    return(
        <>
            {/* //////////////////////header-End/////////////////////// */}
            {/* ====================================================== */}
            {/* //////////////////////Main-Started/////////////////////// */}
            <main>
                <section className="slider">
                    <div className="shape" />
                    <div
                        id="carouselExampleFade"
                        className="carousel slide carousel-fade"
                        data-ride="carousel"
                    >
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img
                                    src="https://firebasestorage.googleapis.com/v0/b/sneaker-db938.appspot.com/o/image-sneaker%2Fbackgounrd-mainpage.jpg?alt=media&token=e8b259e8-36f7-4972-a435-108504110ebb"
                                    className=""
                                    alt="..."
                                />
                                <div className="wrapper">
                                    <h6>Fashionable Footwear</h6>
                                    <h1>Trải nghiệm những đôi giày tốt nhất!</h1>
                                    <p>
                                        Sẵn sàng cho mọi bước đi - Với giày từ shop chúng tôi!
                                    </p>
                                    <a href="#">Đặt hàng ngay bây giờ</a>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img
                                    src="https://i.pinimg.com/564x/9c/fc/a4/9cfca4041f5040796b6fa5880becaadc.jpg"
                                    className=""
                                    alt="..."
                                />
                                <div className="wrapper">
                                    <h6>Exclusive Offer</h6>
                                    <h1>We are here to provide the best service</h1>
                                    <p>
                                        It is a long established fact that a reader will be distracted
                                        by the readable content of a page when looking at its layout.
                                    </p>
                                    <a href="#">Order Now</a>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img
                                    src="https://i.pinimg.com/564x/de/5b/fa/de5bfa8652e393ea337a0e361bbccfea.jpg"
                                    className=""
                                    alt="..."
                                />
                                <div className="wrapper">
                                    <h6>Exclusive Offer</h6>
                                    <h1>We are here to provide the best service</h1>
                                    <p>
                                        It is a long established fact that a reader will be distracted
                                        by the readable content of a page when looking at its layout.
                                    </p>
                                    <a href="#">Order Now</a>
                                </div>
                            </div>
                        </div>
                        <a
                            className="carousel-control-prev"
                            href="#carouselExampleFade"
                            role="button"
                            data-slide="prev"
                        >
                            <span className="carousel-control-prev-icon" aria-hidden="true" />
                            {/*<span className="sr-only">Previous</span>*/}
                        </a>
                        <a
                            className="carousel-control-next"
                            href="#carouselExampleFade"
                            role="button"
                            data-slide="next"
                        >
                            <span className="carousel-control-next-icon" aria-hidden="true" />
                            {/*<span className="sr-only">Next</span>*/}
                        </a>
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
                                            <img src="https://i.pinimg.com/564x/c8/7b/f6/c87bf61b04a1a53f505636f31a2152dd.jpg" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <div className="wrapper">
                                    <div className="content">
                                        <h5>Về chúng tôi</h5>
                                        <h3>Chúng tôi ở đây với những đôi giày tuyệt nhất</h3>
                                        <p>
                                            Trên con đường đầy sự sôi động và phong cách, đôi sneaker không chỉ là một đôi giày thông thường.
                                            Nó là biểu tượng của sự tự do, sự trẻ trung và cái nhìn đậm chất cá nhân.
                                            Mỗi đường nét, mỗi đường chỉ may mắn trên đôi sneaker đều kể lên câu chuyện riêng của chủ nhân.
                                            Với sự phối hợp tinh tế của chất liệu, màu sắc và kiểu dáng,
                                            sneaker không chỉ mang đến sự thoải mái và linh hoạt trong mọi bước chân,
                                            mà còn là nguồn cảm hứng để khám phá thế giới xung quanh. Bước đi tự tin,
                                            thể hiện phong cách riêng của bạn và để đôi sneaker trở thành người bạn đồng hành trung thành trong cuộc sống đầy màu sắc.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* ========================================================================= */}
                <section className="se-third">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="heading">
                                    <h5>Sneaker</h5>
                                    <h2>Chất lượng đến từ đâu ?</h2>
                                    <p>
                                        Khi chọn đôi sneaker chất lượng, bạn đang đầu tư vào sự thoải mái,
                                        phong cách và sự đáng tin cậy. Và chúng tôi cam kết mang đến những giá trị đó.
                                        <br/>Mỗi đôi sneaker là một tác phẩm nghệ thuật đẹp đến từng đường chỉ may.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6 col-xs-12">
                                <div className="wrapper">
                                    <div className="content">
                                        <ol>
                                            <li>
                                                <i className="fa-brands fa-cloudversify"></i>
                                                <h4>Đa dạng mẫu mã</h4>
                                                <p>
                                                    Cung cấp một loạt các mẫu sneaker đa dạng về kiểu dáng, màu sắc và thương hiệu.
                                                </p>
                                            </li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6 col-xs-12">
                                <div className="wrapper">
                                    <div className="content">
                                        <ol>
                                            <li>
                                                <i className="fa-solid fa-thumbs-up"></i>
                                                <h4>Đáng tin cậy</h4>
                                                <p>
                                                    Đảm bảo tính đáng tin cậy của shop bằng cách thực hiện cam kết về chất lượng sản phẩm,
                                                    giao hàng đúng hẹn và hỗ trợ khách hàng tận tâm.
                                                </p>
                                            </li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6 col-xs-12">
                                <div className="wrapper">
                                    <div className="content">
                                        <ol>
                                            <li>
                                                <i className="fa-solid fa-truck-fast"></i>
                                                <h4>Chính sách đổi trả linh hoạt</h4>
                                                <p>
                                                    Cung cấp chính sách đổi trả linh hoạt và công bằng để bạn cảm thấy an tâm khi mua sắm sản phẩm.
                                                    Cho phép bạn có sự tự tin khi đặt mua và biết rằng bạn có thể yên tâm đổi trả nếu cần thiết.
                                                </p>
                                            </li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* ========================================================================= */}
                <section className="se-five">
                    <div className="shap" />
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="wrapper">
                                    <h5>Bạn đã sẵn sàng ?</h5>
                                    <h2>Vào danh mục và lựa chọn những đôi giày đẹp nhất</h2>
                                    <p>
                                        Những đôi sneaker thực sự đáng để bạn tự hào.
                                        Với sự kết hợp giữa phong cách đương đại và sự tiện ích,
                                        nó sẽ làm bạn xuất sắc trong mọi hoàn cảnh.
                                    </p>
                                    <a>Đi tới</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* ========================================================================= */}
                {/* ========================================================================= */}
                <section className="menu-items">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="heading">
                                    <h2>1 vài sản phẩm</h2>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="wrapper">
                                    <ul className="nav nav-tabs border-0" id="myTab" role="tablist">
                                        <li className="nav-item">
                                            <a
                                                className="nav-link active"
                                                id="starters-item"
                                                data-toggle="tab"
                                                href="#starters"
                                                role="tab"
                                                aria-controls="all"
                                                aria-selected="true"
                                            >
                                                Nike
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                id="breakfast-items"
                                                data-toggle="tab"
                                                href="#breakfast"
                                                role="tab"
                                                aria-controls="profile"
                                                aria-selected="false"
                                            >
                                                Adidas
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                id="lunch-items"
                                                data-toggle="tab"
                                                href="#lunch"
                                                role="tab"
                                                aria-controls="contact"
                                                aria-selected="false"
                                            >
                                                Jordan
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                id="dinner-item"
                                                data-toggle="tab"
                                                href="#dinner"
                                                role="tab"
                                                aria-controls="contact"
                                                aria-selected="false"
                                            >
                                                Vans
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                id="beverage-item"
                                                data-toggle="tab"
                                                href="#beverage"
                                                role="tab"
                                                aria-controls="contact"
                                                aria-selected="false"
                                            >
                                                Converse
                                            </a>
                                        </li>
                                    </ul>
                                    <div className="tab-content" id="myTabContent">
                                        <div
                                            className="tab-pane fade show active"
                                            id="starters"
                                            role="tabpanel"
                                            aria-labelledby="starters-item"
                                        >
                                            <div className="row">
                                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                                    <figure>
                                                        <div className="images">
                                                            <img src="https://firebasestorage.googleapis.com/v0/b/sneaker-db938.appspot.com/o/image-sneaker%2Fnike3.png?alt=media&token=9de99014-b0b9-4701-97bb-b22cc6731f1f" />
                                                        </div>
                                                        <div className="content">
                                                            <h4>Nike Fleshes out the Air Max</h4>
                                                            <a>Đặt ngay</a>
                                                        </div>
                                                    </figure>
                                                </div>
                                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                                    <figure>
                                                        <div className="images">
                                                            <img src="https://firebasestorage.googleapis.com/v0/b/sneaker-db938.appspot.com/o/image-sneaker%2Fnike1.png?alt=media&token=669f04ff-08d8-4c2b-9ab1-7cd0ac960eb1" />
                                                        </div>
                                                        <div className="content">
                                                            <h4>Ui Design Nike Air Max Shoe</h4>
                                                            <a>Đặt ngay</a>
                                                        </div>
                                                    </figure>
                                                </div>
                                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                                    <figure>
                                                        <div className="images">
                                                            <img src="https://firebasestorage.googleapis.com/v0/b/sneaker-db938.appspot.com/o/image-sneaker%2Fnike2.png?alt=media&token=3a730e26-da03-4888-b379-33492aaf75d3" />
                                                        </div>
                                                        <div className="content">
                                                            <h4>Air Force 1 "07 LV8"Kings Sneakers</h4>
                                                            <a>Đặt ngay</a>
                                                            </div>
                                                    </figure>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="tab-pane fade"
                                            id="breakfast"
                                            role="tabpanel"
                                            aria-labelledby="breakfast-items"
                                        >
                                            <div className="row">
                                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                                    <figure>
                                                        <div className="images">
                                                            <img src="assets/images/menu/4.jpg" />
                                                        </div>
                                                        <div className="content">
                                                            <h4>Spicy Clup</h4>
                                                            <p>
                                                                Pork, chicken and vegetable fried rolls served with
                                                                lettuce wraps
                                                            </p>
                                                            <a>order now</a>
                                                        </div>
                                                    </figure>
                                                </div>
                                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                                    <figure>
                                                        <div className="images">
                                                            <img src="assets/images/menu/5.jpg" />
                                                        </div>
                                                        <div className="content">
                                                            <h4>Tuscan Flatbread</h4>
                                                            <p>
                                                                Pork, chicken and vegetable fried rolls served with
                                                                lettuce wraps
                                                            </p>
                                                            <a>order now</a>
                                                        </div>
                                                    </figure>
                                                </div>
                                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                                    <figure>
                                                        <div className="images">
                                                            <img src="assets/images/menu/6.jpg" />
                                                        </div>
                                                        <div className="content">
                                                            <h4>Almond Baked Brie</h4>
                                                            <p>
                                                                Pork, chicken and vegetable fried rolls served with
                                                                lettuce wraps
                                                            </p>
                                                            <a>order now</a>
                                                        </div>
                                                    </figure>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="tab-pane fade"
                                            id="lunch"
                                            role="tabpanel"
                                            aria-labelledby="lunch-items"
                                        >
                                            <div className="row">
                                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                                    <figure>
                                                        <div className="images">
                                                            <img src="assets/images/menu/4.jpg" />
                                                        </div>
                                                        <div className="content">
                                                            <h4>Spicy Clup</h4>
                                                            <p>
                                                                Pork, chicken and vegetable fried rolls served with
                                                                lettuce wraps
                                                            </p>
                                                            <a>order now</a>
                                                        </div>
                                                    </figure>
                                                </div>
                                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                                    <figure>
                                                        <div className="images">
                                                            <img src="assets/images/menu/5.jpg" />
                                                        </div>
                                                        <div className="content">
                                                            <h4>Spicy Clup</h4>
                                                            <p>
                                                                Pork, chicken and vegetable fried rolls served with
                                                                lettuce wraps
                                                            </p>
                                                            <a>order now</a>
                                                        </div>
                                                    </figure>
                                                </div>
                                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                                    <figure>
                                                        <div className="images">
                                                            <img src="assets/images/menu/6.jpg" />
                                                        </div>
                                                        <div className="content">
                                                            <h4>Spicy Clup</h4>
                                                            <p>
                                                                Pork, chicken and vegetable fried rolls served with
                                                                lettuce wraps
                                                            </p>
                                                            <a>order now</a>
                                                        </div>
                                                    </figure>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="tab-pane fade"
                                            id="dinner"
                                            role="tabpanel"
                                            aria-labelledby="dinner-item"
                                        >
                                            <div className="row">
                                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                                    <figure>
                                                        <div className="images">
                                                            <img src="assets/images/menu/4.jpg" />
                                                        </div>
                                                        <div className="content">
                                                            <h4>Spicy Clup</h4>
                                                            <p>
                                                                Pork, chicken and vegetable fried rolls served with
                                                                lettuce wraps
                                                            </p>
                                                            <a>order now</a>
                                                        </div>
                                                    </figure>
                                                </div>
                                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                                    <figure>
                                                        <div className="images">
                                                            <img src="assets/images/menu/5.jpg" />
                                                        </div>
                                                        <div className="content">
                                                            <h4>Spicy Clup</h4>
                                                            <p>
                                                                Pork, chicken and vegetable fried rolls served with
                                                                lettuce wraps
                                                            </p>
                                                            <a>order now</a>
                                                        </div>
                                                    </figure>
                                                </div>
                                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                                    <figure>
                                                        <div className="images">
                                                            <img src="assets/images/menu/6.jpg" />
                                                        </div>
                                                        <div className="content">
                                                            <h4>Spicy Clup</h4>
                                                            <p>
                                                                Pork, chicken and vegetable fried rolls served with
                                                                lettuce wraps
                                                            </p>
                                                            <a>order now</a>
                                                        </div>
                                                    </figure>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="tab-pane fade"
                                            id="beverage"
                                            role="tabpanel"
                                            aria-labelledby="beverage-item"
                                        >
                                            <div className="row">
                                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                                    <figure>
                                                        <div className="images">
                                                            <img src="assets/images/menu/4.jpg" />
                                                        </div>
                                                        <div className="content">
                                                            <h4>Almond Baked Brie</h4>
                                                            <p>
                                                                Pork, chicken and vegetable fried rolls served with
                                                                lettuce wraps
                                                            </p>
                                                            <a>order now</a>
                                                        </div>
                                                    </figure>
                                                </div>
                                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                                    <figure>
                                                        <div className="images">
                                                            <img src="assets/images/menu/5.jpg" />
                                                        </div>
                                                        <div className="content">
                                                            <h4>Tuscan Flatbread</h4>
                                                            <p>
                                                                Pork, chicken and vegetable fried rolls served with
                                                                lettuce wraps
                                                            </p>
                                                            <a>order now</a>
                                                        </div>
                                                    </figure>
                                                </div>
                                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                                    <figure>
                                                        <div className="images">
                                                            <img src="assets/images/menu/6.jpg" />
                                                        </div>
                                                        <div className="content">
                                                            <h4>Spicy Clup</h4>
                                                            <p>
                                                                Pork, chicken and vegetable fried rolls served with
                                                                lettuce wraps
                                                            </p>
                                                            <a>order now</a>
                                                        </div>
                                                    </figure>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            {/* //////////////////////Main-End/////////////////////// */}
            {/* ====================================================== */}
            {/* //////////////////////Footer-Started/////////////////////// */}
            {/* *********************************************************** */}
        </>

    )
}
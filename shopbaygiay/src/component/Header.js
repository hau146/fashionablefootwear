import {Link} from "react-router-dom";

export function Header(){
    return(
        <div>
            <header>
                <div className="main-nav">
                    <div className="logo">
                        <img src="https://firebasestorage.googleapis.com/v0/b/sneaker-db938.appspot.com/o/image-sneaker%2Flogo-mainPage_pixian_ai.png?alt=media&token=1dc3c108-783e-4ad8-8b34-43684d0ac152" />
                    </div>
                    <div className="menu-toggle" />
                    <div className="menu">
                        <ul>
                            <li>
                                <Link to="/">
                                    Trang chủ
                                </Link>
                            </li>
                            <li>
                                <Link to="/about">
                                    Về chúng tôi
                                </Link>
                            </li>
                            <li>
                                <Link to="/product">
                                    Sản phẩm
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact">
                                    Liên hệ
                                </Link>


                            </li>
                        </ul>
                    </div>
                    <div className="social-media">
                        <ul>
                            <li>
                                <Link to="/cart">
                                    <i style={{fontSize:"165%"}} className="fa-solid fa-cart-shopping">
                                        <span style={{fontSize: "11px",margin: "3px 0px 0px -13%"}} className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                    0
                                    <span className="visually-hidden">unread messages</span>
                                </span>
                                    </i>
                                </Link>
                            </li>
                            <li><a href="#"><i className="flaticon-twitter"></i></a></li>
                        </ul>
                    </div>
                    <div className="book">
                        <ul>
                            <li>
                                <Link to="/login">
                                    Đăng nhập
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        </div>
    )
}
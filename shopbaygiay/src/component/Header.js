import {Link, useNavigate} from "react-router-dom";
import "../css/avatar.css"
import "../css/inputSearch.css"
import {useEffect, useState} from "react";
import Swal from "sweetalert2";
import * as AccountService from "../service/AccountService";
import {BiCog, BiLogOutCircle, BiUserCircle} from "react-icons/bi";
import {getIdByUserName} from "../service/AccountService";
import {sumProductInCart} from "../service/CartService";
import * as CartService from "../service/CartService";


export function Header() {
    const navigate = useNavigate();
    const [JwtToken, setJwtToken] = useState(localStorage.getItem("JWT"));
    const [username, setUsername] = useState("");
    const [nameAccount, setNameAccount] = useState("");
    const [nameProduct, setNameProduct] = useState("");
    const [userId, setUserId] = useState("");
    const [nameType, setNameType] = useState([]);
    const [sumCart, setSumCart] = useState(0);
    const roleAdmin = AccountService.checkRollAppUser("ADMIN");

    const getUserName = async () => {
        const result = await AccountService.infoAppUserByJwtToken();
        setUsername(result);
    }
    const getAppUserId = async () => {
        const isLoggedIn = AccountService.infoAppUserByJwtToken();
        if (isLoggedIn) {
            const id = await AccountService.getIdByUserName(isLoggedIn.sub);
            setUserId(id.data);

        }
    }
    const sumProductInCart = async () => {
        const data = await CartService.sumProductInCart();
        console.log(data)
        setSumCart(data)
    }
    console.log("---------")
    console.log(userId)
    // const getTypeProduct = async () => {
    //     const result = await typeProduct.getAllType();
    //     setNameType(result);
    // }

    useEffect(() => {
        getUserName();
    }, []);

    useEffect(() => {
        getAppUserId();
        sumProductInCart();
    }, [sumCart])

    const handleLogout = async () => {
        localStorage.removeItem("JWT");
        setJwtToken(undefined);
        setUsername(undefined);
        await Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Đăng xuất thành công",
            showConfirmButton: false,
            timer: 1700
        });
        navigate("/");
    }

    const confirmLogout = async () => {
        await Swal.fire({
            title: "Bạn có chắc chắn muốn đăng xuất ?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Xác nhận",
            cancelButtonText: "Không",
        }).then(async (result) => {
            if (result.isConfirmed) {
                await handleLogout()
                // window.location.reload();
            }
        });
    }

    const handleInputChange = (event) => {
        setNameProduct(event.target.value);
    }
    // const handleProduct = (nameProduct) => {
    //     navigate(`/home/search/${nameProduct}`);
    // }
    // const handleSearch = (event) => {
    //     event.preventDefault();
    //     handleProduct(nameProduct);
    // }
    const handleSearchInput = (event) => {
        if (event.key === 'Enter' && nameProduct !== "") {
            navigate(`/searchProduct/${nameProduct}`)
        } else if (event.key === 'Enter' && nameProduct === "") {
            Swal.fire({
                title: "Vui lòng nhập dữ liệu để tìm giày",
                icon: "warning",
            });
        }
    }
    const handleCartClick = (id) => {
        navigate(`/cart/${id}`)
    };


    return (
        <div>
            <header>
                <div className="main-nav">
                    <div className="logo">
                        <img
                            src="https://firebasestorage.googleapis.com/v0/b/sneaker-db938.appspot.com/o/image-sneaker%2Flogo-mainPage_pixian_ai.png?alt=media&token=1dc3c108-783e-4ad8-8b34-43684d0ac152"/>
                    </div>
                    <div className="menu-toggle"/>
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


                            {JwtToken ? (
                                <>
                                    <li>
                                        <Link to="/voucher">
                                            Kho voucher
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/contact">
                                            Đơn mua
                                        </Link>
                                    </li>
                                </>
                            ) : null}
                        </ul>
                    </div>
                    <div className="group">
                        <svg viewBox="0 0 24 24" aria-hidden="true" className="icon">
                            <g>
                                <path
                                    d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"
                                ></path>
                            </g>
                        </svg>
                        <input
                            onChange={(values) => setNameProduct(values.target.value)}
                            onKeyPress={handleSearchInput}
                            className="input" type="text" placeholder="Nhập tên giày"/>
                    </div>
                    <div className="social-media">
                        <ul style={{marginBottom: "-2rem"}}>
                            {JwtToken ? (
                                <>
                                    {sumCart < 1 ? (
                                        <>
                                            <li style={{color: "#37da11"}} onClick={() => handleCartClick(userId.id)}>
                                                <i style={{fontSize: "165%"}} className="fa-solid fa-cart-shopping">
                                        <span style={{fontSize: "11px", margin: "5px 0px 0px -13%"}}
                                              className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                                0
                                            <span className="visually-hidden">unread messages</span>
                                </span>
                                                </i>
                                            </li>
                                            <li><a href="#"><i className="flaticon-twitter"></i></a></li>
                                        </>
                                    ) : (
                                        <>
                                            <li style={{color: "#37da11"}} onClick={() => handleCartClick(userId.id)}>
                                                <i style={{fontSize: "165%"}} className="fa-solid fa-cart-shopping">
                                        <span style={{fontSize: "11px", margin: "5px 0px 0px -13%"}}
                                              className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                    {sumCart}
                                            <span className="visually-hidden">unread messages</span>
                                </span>
                                                </i>
                                            </li>
                                            <li><a href="#"><i className="flaticon-twitter"></i></a></li>
                                        </>
                                    )}

                                </>
                            ) : (
                                <>
                                    <li style={{color: "#37da11"}} onClick={() => handleCartClick(userId.id)}>
                                        <i style={{fontSize: "165%"}} className="fa-solid fa-cart-shopping">
                                        </i>
                                    </li>
                                    <li><a href="#"><i className="flaticon-twitter"></i></a></li>
                                </>
                            )}
                        </ul>
                    </div>
                    <div className="book">
                        <ul style={{marginBottom: "0em"}}>
                            <li>
                                {/*<Link to="/login">*/}
                                {/*    Đăng nhập*/}
                                {/*</Link>*/}

                                {!username ? (
                                    <Link to="/login">
                                        <span className="user-info">Đăng nhập</span>
                                    </Link>
                                ) : (
                                    <span className="user-info" style={{overflow: "hidden", color: "whitesmoke"}}>
                      {userId.name}
                    </span>
                                )}


                                {JwtToken ? (
                                    <>
                                        <div className="user-dropdown-list">
                                            <Link className="user-dropdown-item" style={{display: "flex"}}>
                                                <BiLogOutCircle className="me-3 ms-0" size={25}/>
                                                <div
                                                    className="dropdown-text"
                                                    onClick={() => {
                                                        confirmLogout();
                                                    }}
                                                >
                                                    Đăng xuất
                                                </div>
                                            </Link>
                                        </div>
                                    </>
                                ) : null}


                            </li>
                        </ul>
                    </div>
                    {JwtToken ? (
                        <>
                            <div className="card-avt">
                                <div className="img">
                                    <img className="img" src={userId.avatar}/>
                                </div>
                            </div>
                        </>
                    ) : null}
                </div>
            </header>
        </div>
    )
}
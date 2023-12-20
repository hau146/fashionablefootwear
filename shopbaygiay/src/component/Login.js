import "../css/bootstrap.min.css"
import "../css/style.css"
import {Link, useNavigate} from "react-router-dom";
import * as AccountService from "../service/AccountService";
import {Field, Form, Formik} from "formik";
import Swal from "sweetalert2";
import {Header} from "./Header";
import {useContext} from "react";
import MyContext from "./MyContext";

export function Login() {
    const navigate = useNavigate();
    const {callFunctionFromChild} = useContext(MyContext);

    const handleLogin = async (appUser) => {
        try {
            const result = await AccountService.loginUser(appUser);
            AccountService.addJwtTokenToLocalStorage(result.data.jwtToken)
            const tempURL = localStorage.getItem("tempURL");
            localStorage.removeItem("tempURL");
            if (tempURL) {
                navigate(tempURL);
            } else {
                await Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Đăng nhập thành công",
                    showConfirmButton: false,
                    timer: 1300
                });
                navigate("/");
                window.location.reload()
            }
        } catch (err) {
            Swal.fire({
                icon: 'error',
                title: "Sai tài khoản hoặc mật khẩu"
            })
            console.log(err);
        }
    }


    const innitValue = {
        username: "",
        password: ""
    }


    return (
        <div>
            <Formik initialValues={innitValue}
                    onSubmit={(values, {setSubmitting}) => {
                        setSubmitting(false);
                        console.log(values)
                        let cloneValue = {
                            ...values,
                        }
                        handleLogin(cloneValue);
                    }}
            >
                <Form>
                    <section style={{padding: "1rem"}} className="abt">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="wrapper">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="container-fluid vh-100 overflow-auto">
                        <div className="row vh-100 ">
                            <div className="col-lg-6 bg-gray p-5 text-center">
                                <h4 className="text-center fw-bolder fs-2">Đăng Ký</h4>
                                <p className="mb-3 fs-7">Đăng ký ngay và khám phá những đôi giày mới</p>
                                <Link to="/signUp">
                                    <button className="btn fw-bold mb-5 btn-outline-success px-4 rounded-pill">
                                        Đi tới
                                    </button>
                                </Link>

                            </div>
                            <div className="col-lg-6 p  vh-100">
                                <div className="row d-flex vh-100">
                                    <div style={{height: "80%"}}
                                         className="col-md-8 p-4 ikigui m-auto text-center align-items-center">
                                        <h4 className="text-center fw-bolder mb-4 fs-2">Đăng Nhập</h4>
                                        <div className="input-group mb-4">
            <span
                className="input-group-text border-end-0 inbg"
                id="basic-addon1"
            >
              <i className="bi bi-person"/>
            </span>
                                            <Field
                                                type="text"
                                                className="form-control ps-2 border-start-0 fs-7 inbg form-control-lg mb-0"
                                                placeholder="Tên tài khoản"
                                                aria-label="Username"
                                                aria-describedby="basic-addon1"
                                                name="username"
                                            />
                                        </div>
                                        <div className="input-group mb-4">
            <span
                className="input-group-text border-end-0 inbg"
                id="basic-addon1"
            >
              <i className="bi bi-lock"/>
            </span>
                                            <Field
                                                type="password"
                                                className="form-control ps-2 fs-7 border-start-0 form-control-lg inbg mb-0"
                                                placeholder="Mật khẩu"
                                                aria-label="Username"
                                                aria-describedby="basic-addon1"
                                                name="password"
                                            />
                                        </div>
                                        <div className="input-group mb-4">
                                            <input type="checkbox"/>Ghi nhớ mật khẩu
                                        </div>

                                        <button type="submit" className="btn btn-lg fw-bold fs-7 btn-success  w-100">
                                            Đăng nhập ngay
                                        </button>
                                        <p className="text-center py-4 fw-bold fs-8">
                                            Hoặc đăng nhập với các nền tảng xã hội
                                        </p>
                                        <ul className="d-inline-block mx-auto">
                                            <li className="float-start px-3">
                                                <a href="">
                                                    <i className="bi bi-facebook"/>
                                                </a>
                                            </li>
                                            <li className="float-start px-3">
                                                <a href="">
                                                    <i className="bi bi-twitter"/>
                                                </a>
                                            </li>
                                            <li className="float-start px-3">
                                                <a href="">
                                                    <i className="bi bi-linkedin"/>
                                                </a>
                                            </li>
                                            <li className="float-start px-3">
                                                <a href="">
                                                    <i className="bi bi-google"/>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Form>
            </Formik>
        </div>
    )
}
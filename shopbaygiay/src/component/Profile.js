import "../css/profile.css"
import "../css/buttonProfile.css"
import * as AccountService from "../service/AccountService";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";

export function Profile() {
    const [userId, setUserId] = useState("");
    const [editInfo, setEditInfo] = useState(false)
    const [success, setSuccess] = useState(0)

    useEffect(() => {
        getAppUserId();
    }, [success])
    useEffect(() => {
        getAppUserId();
    }, [])
    const getAppUserId = async () => {
        const isLoggedIn = AccountService.infoAppUserByJwtToken();
        if (isLoggedIn) {
            const id = await AccountService.getIdByUserName(isLoggedIn.sub);
            console.log(id.data)
            setUserId(id.data);
        }
    }
    const edit = async () => {
        setEditInfo(true)
    }
    const initValue = {
        id: userId.id,
        newPhoneNumber: userId.numberPhone,
        newEmail: userId.email,
        newAddress: userId.address
    }
    const validateObject = {
    }
    const confirmEdit = async (values) => {
        values.id = userId.id;
        const status = await AccountService.editProfile(values)
        if (status === 200) {
            await Swal.fire({
                position: "top-center",
                icon: "success",
                title: "Sửa thông tin giao hàng thành công",
                showConfirmButton: false,
                timer: 1600
            });
            await setSuccess(success+1);
        } else {
            await Swal.fire({
                position: "top-center",
                icon: "error",
                title: "Sửa thông tin giao hàng thất bại hãy thử lại",
                showConfirmButton: false,
                timer: 1900
            });
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

            <div className="main-content" style={{marginLeft: "50px"}}>
                {/*########################## Profile Starts Here ############################# */}
                <div className="profile-head">
                    <div className="row vh-65">
                        <div className="col-xl-6 text-center mx-auto align-self-center ">
                            <div className="imgcover mb-4">
                                <img style={{margin:"0 0 0 30%"}} src="https://i.pinimg.com/564x/52/17/c1/5217c1e69e722b93b3217b97f4b2a981.jpg"
                                     className="rounded-pill bg-white p-2 shadow" alt=""/>
                            </div>
                            <b className="fs-6">Xin chào, {userId.name}</b>
                            {userId && userId.rankAccount.id !== 1 ? (<p className="fw-bold mb-2 fs-1">Thành
                                viên {userId && userId.rankAccount.name}</p>) : null}
                            {userId && userId.rankAccount.id === 1 ? (
                                <p>Hãy mua thêm những đôi giày tuyệt đẹp để nhận ưu đãi từ shop nhé!</p>) : null}
                            {userId && userId.rankAccount.id === 2 ? (<p>Bạn được giảm 10% cho mọi đơn hàng</p>) : null}
                            {userId && userId.rankAccount.id === 3 ? (<p>Bạn được giảm 15% cho mọi đơn hàng</p>) : null}
                            <ul>
                                <li/>
                            </ul>
                            <Link to={`/voucher/${userId.id}`}>
                                <button
                                    className="btn btn-outline-success fw-bolder fs-7 px-4 py-2 mt-3 rounded-pill">Xem
                                    voucher
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <Formik
                    initialValues={{
                        id:userId.id,
                        newPhoneNumber: userId.numberPhone,
                        newEmail: userId.email,
                        newAddress: userId.address
                    }}
                    onSubmit={values => confirmEdit(values)}
                    // validationSchema={Yup.object(validateObject)}
                >
                    <Form>
                        <div className="service px-4 py-5">
                            <div className="titie-row row mb-3" style={{display: "flex"}}>
                                <h2 className="fw-bolder">Thông tin nhận hàng</h2>
                                {editInfo === true ? (
                                        <button type="button" onClick={() => setEditInfo(false)} role="button"
                                                className="button-name">Lưu thay đổi</button>
                                ) : (
                                    <button role="button" onClick={() => setEditInfo(true)} className="button-name">Sửa thông
                                        tin</button>
                                )}
                                {/*<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ipsum sit nibh amet egestas tellus.</p>*/}
                            </div>
                            <div className="col-lg-4 col-md-6 mb-4" style={{display:"none"}}>
                                <div className="shadow-md row p-4 m-0 rounded bg-white">
                                    <div className="col-md-3 text-center align-self-center">
                                        <i className="bi fs-1 bi-headphones"/>
                                    </div>
                                    <div className="col-md-9">
                                        <ul>
                                            <Field as="input" className='form-control' name="id">
                                            </Field>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="contact-row m-0 mt-5 row">
                                <div className="col-lg-4 col-md-6 mb-4">
                                    <div className="shadow-md row p-4 m-0 rounded bg-white">
                                        <div className="col-md-3 text-center align-self-center">
                                            <i className="fa-solid fa-phone-volume"></i>
                                        </div>
                                        <div className="col-md-9">
                                            <h6 className="fs-7 fw-bolder">Số điện thoại</h6>
                                            <ul>
                                                {editInfo === true ? (
                                                    <li>
                                                        <Field as="input" className='form-control'
                                                               name="newPhoneNumber">
                                                        </Field>
                                                    </li>
                                                ) : (
                                                    <li>{userId.numberPhone}</li>
                                                )}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 mb-4">
                                    <div className="shadow-md row p-4 m-0 rounded bg-white">
                                        <div className="col-md-3 text-center align-self-center">
                                            <i className="fa-solid fa-envelope"></i>
                                        </div>
                                        <div className="col-md-9">
                                            <h6 className="fs-7 fw-bolder">Email</h6>
                                            <ul>
                                                {editInfo === true ? (
                                                    <li>
                                                        <Field as="input" className='form-control' name="newEmail">
                                                        </Field>
                                                    </li>
                                                ) : (
                                                    <li>{userId.email}</li>
                                                )}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 mb-4">
                                    <div className="shadow-md row p-4 m-0  rounded bg-white">
                                        <div className="col-md-3 text-center align-self-center">
                                            <i className="fa-solid fa-location-dot"></i>
                                        </div>
                                        <div className="col-md-9">
                                            <h6 className="fs-7 fw-bolder">Địa chỉ</h6>
                                            <ul>
                                                {editInfo === true ? (
                                                    <li>
                                                        <Field as="input" className='form-control' name="newAddress">
                                                        </Field>
                                                    </li>
                                                ) : (
                                                    <li>{userId.address}</li>
                                                )}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*<div id="contact" className="contact-row m-0 row">*/}
                            {/*    <div className="col-md-6">*/}
                            {/*        <div className="shadow-md p-4 rounded bg-white">*/}
                            {/*            <h4 className="fs-6 fw-bolder mb-3">Contact Form</h4>*/}
                            {/*            <form action>*/}
                            {/*                <div className="mb-3">*/}
                            {/*                    <label htmlFor="exampleFormControlInput1" className="form-label fw-bolder fs-8">Email address</label>*/}
                            {/*                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter Email Address" />*/}
                            {/*                </div>*/}
                            {/*                <div className="mb-3">*/}
                            {/*                    <label htmlFor="exampleFormControlInput1" className="form-label fw-bolder fs-8">Enter Subject</label>*/}
                            {/*                    <input type="email" className="form-control" id="exampleFormControlInput2" placeholder="Enter Subject" />*/}
                            {/*                </div>*/}
                            {/*                <div className="mb-3">*/}
                            {/*                    <label htmlFor="exampleFormControlTextarea1" className="form-label fw-bolder fs-8">Example textarea</label>*/}
                            {/*                    <textarea className="form-control" placeholder="Enter Message" id="exampleFormControlTextarea1" rows={3} defaultValue={""} />*/}
                            {/*                </div>*/}
                            {/*            </form>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*    <div className="col-md-6">*/}
                            {/*        <div className="shadow-md p-4 rounded bg-white">*/}
                            {/*            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15659.16664494769!2d77.32095495000002!3d11.1288885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1660839868672!5m2!1sen!2sin" style={{width: '100%'}} height={340} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                        </div>
                    </Form>
                </Formik>

            </div>
        </div>
    )
}
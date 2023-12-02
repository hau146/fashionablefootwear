export function Contact(){
    return(
        <div>
            <main>
                <section className="abt">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="wrapper">
                                    <h2 style={{color:"white"}}>Liên hệ với chúng tôi</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* ========================================================================= */}
                <section className="bg-0-b">
                    <div className="container">
                        <div className="row">
                            <div className="main-card-contact d-flex">
                                <div className="sup-card-contact">
                                    <div className="sup-content">
                                        <div className="head-content">
                                            <h2>Để lại một tin nhắn ở đây</h2>
                                            <p>
                                                Nếu bạn gặp khó khăn về giày hoặc không hài lòng hãy phản hồi lập tức
                                                để chúng tôi giải quyết thỏa đáng cho bạn.
                                            </p>
                                        </div>
                                        <div className="contact-title">
                                            <h2>Chi tiết liên lạc</h2>
                                            <ol>
                                                <li>
                                                    <i className="flaticon-placeholder" />
                                                    DA NANG
                                                </li>
                                                <li>
                                                    <i className="flaticon-call" />
                                                    +91 9751791203{" "}
                                                </li>
                                                <li>
                                                    <i className="flaticon-email" />
                                                    sales@smarteyeapps.com
                                                </li>
                                                <li>
                                                    <i className="flaticon-clock" />
                                                    Mon - Sat 8.00 - 18.00.
                                                </li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                                <div className="sup-card-contact-0a">
                                    <div className="contact-a1">
                                        <form>
                                            <div className="dived d-flex">
                                                <div className="form-group">
                                                    <div className="form-sup">
                                                        <div className="cal-01">
                                                            <input
                                                                type="name"
                                                                name="name"
                                                                id=""
                                                                className="form-control"
                                                                placeholder="Tên tài khoản"
                                                            />
                                                            <i className="flaticon-user" />
                                                        </div>
                                                        <div className="cal-01">
                                                            <input
                                                                type="phone"
                                                                name="phone"
                                                                id=""
                                                                className="form-control"
                                                                placeholder="Số điện thoại"
                                                            />
                                                            <i className="flaticon-call" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="form-sup">
                                                        <div className="cal-01">
                                                            <input
                                                                type="email"
                                                                name="email"
                                                                id=""
                                                                className="form-control"
                                                                placeholder="Email của bạn"
                                                            />
                                                            <i className="flaticon-email" />
                                                        </div>
                                                        <div className="cal-01">
                                                            <input
                                                                type="text"
                                                                name="subject"
                                                                id=""
                                                                className="form-control"
                                                                placeholder="Nhập chủ đề của bạn"
                                                            />
                                                            <i className="flaticon-type" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="ca-ool">
                    <textarea
                        name="text"
                        cols={80}
                        rows={6}
                        className="form-control"
                        placeholder="Nội dung"
                        defaultValue={""}
                    />
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* ========================================================================= */}
                <section className="mab-01 p-0">
                    <iframe
                        style={{ width: "100%" }}
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d249759.19784092825!2d79.10145254589841!3d12.009924873581818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1448883859107"
                        height={450}
                        frameBorder={0}
                        allowFullScreen=""
                    />
                </section>
            </main>

        </div>
    )
}
import "../css/voucher.scss"
export function Voucher(){
    return(
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
                        <div className="col-md-6 text-center mb-5">
                            <h2 className="heading-section">Voucher của bạn</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="table-wrap">
                                <table className="table">
                                    <thead className="thead-dark">
                                    <tr>
                                        <th>STT</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Email</th>
                                        <th>&nbsp;</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr className="alert" role="alert">
                                        <th scope="row">001</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>markotto@email.com</td>
                                        <td>
                                            <a
                                                href="#"
                                                className="close"
                                                data-dismiss="alert"
                                                aria-label="Close"
                                            >
                    <span aria-hidden="true">
                      <i className="fa fa-close" />
                    </span>
                                            </a>
                                        </td>
                                    </tr>
                                    <tr className="alert" role="alert">
                                        <th scope="row">002</th>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>jacobthornton@email.com</td>
                                        <td>
                                            <a
                                                href="#"
                                                className="close"
                                                data-dismiss="alert"
                                                aria-label="Close"
                                            >
                    <span aria-hidden="true">
                      <i className="fa fa-close" />
                    </span>
                                            </a>
                                        </td>
                                    </tr>
                                    <tr className="alert" role="alert">
                                        <th scope="row">003</th>
                                        <td>Larry</td>
                                        <td>the Bird</td>
                                        <td>larrybird@email.com</td>
                                        <td>
                                            <a
                                                href="#"
                                                className="close"
                                                data-dismiss="alert"
                                                aria-label="Close"
                                            >
                    <span aria-hidden="true">
                      <i className="fa fa-close" />
                    </span>
                                            </a>
                                        </td>
                                    </tr>
                                    <tr className="alert" role="alert">
                                        <th scope="row">004</th>
                                        <td>John</td>
                                        <td>Doe</td>
                                        <td>johndoe@email.com</td>
                                        <td>
                                            <a
                                                href="#"
                                                className="close"
                                                data-dismiss="alert"
                                                aria-label="Close"
                                            >
                    <span aria-hidden="true">
                      <i className="fa fa-close" />
                    </span>
                                            </a>
                                        </td>
                                    </tr>
                                    <tr className="alert" role="alert">
                                        <th scope="row">005</th>
                                        <td>Gary</td>
                                        <td>Bird</td>
                                        <td>garybird@email.com</td>
                                        <td>
                                            <a
                                                href="#"
                                                className="close"
                                                data-dismiss="alert"
                                                aria-label="Close"
                                            >
                    <span aria-hidden="true">
                      <i className="fa fa-close" />
                    </span>
                                            </a>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
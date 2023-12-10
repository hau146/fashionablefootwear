// import "../css/voucher.scss"
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
                                <table style={{textAlign:"center"}} className="table">
                                    <thead className="thead-dark">
                                    <tr>
                                        <th>#</th>
                                        <th>Mã giảm giá</th>
                                        <th>Tiền giảm</th>
                                        <th>Voucher nhận từ</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr className="alert" role="alert">
                                        <th scope="row">001</th>
                                        <th>GOLD10</th>
                                        <td>Giảm 10%</td>
                                        <td>Thăng hạng vàng</td>
                                    </tr>
                                    <tr className="alert" role="alert">
                                        <th scope="row">002</th>
                                        <th>GOLD15</th>
                                        <td>Giảm 15%</td>
                                        <td>Thăng hạng vàng</td>
                                    </tr>
                                    <tr className="alert" role="alert">
                                        <th scope="row">003</th>
                                        <th>PLATINUM20</th>
                                        <td>Giảm 20%</td>
                                        <td>Thăng hạng kim cương</td>
                                    </tr>
                                    <tr className="alert" role="alert">
                                        <th scope="row">004</th>
                                        <th>PLATINUM30</th>
                                        <td>Giảm 30%</td>
                                        <td>Thăng hạng kim cương</td>
                                    </tr>
                                    <tr className="alert" role="alert">
                                        <th scope="row">005</th>
                                        <th>FF300</th>
                                        <td>Giảm 300k</td>
                                        <td>Shop</td>
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
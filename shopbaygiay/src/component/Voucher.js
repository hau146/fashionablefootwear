// import "../css/voucher.scss"
import * as VoucherService from "../service/VoucherService";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

export function Voucher(){
    const {id} = useParams();
    console.log(id)
    const [voucherAccount, setVoucherAccount] = useState([]);

    useEffect(() => {
        findAllById(id)
    }, [id])
    const findAllById = async (id) => {
        const data = await VoucherService.findAllById(id);
        setVoucherAccount(data);
    };


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
                                        <th>Tình trạng</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {voucherAccount.map((voucherAccounts, index) => {
                                        return(
                                            <tr className="alert" role="alert">
                                                <th scope="row">{index+1}</th>
                                                <th>{voucherAccounts.code}</th>
                                                <td>{voucherAccounts.name}</td>
                                                <td>{voucherAccounts.status === true ? "Chưa sử dụng":"Đã sử dụng"}</td>
                                            </tr>
                                        )
                                    })}
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
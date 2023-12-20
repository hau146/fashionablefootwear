import "../css/button.css"
import {useState} from "react";
export function FootMeasure(){
    const [size, setSize] = useState("")
    const changeSizeHandler = (event) => {
        const cm = event.target.value;
        if (cm < 21 || cm > 25) {
            setSize("0");
        } else {
            if (cm >= 21 && cm < 22) {
                setSize("37");
            } else if (cm <= 22.6) {
                setSize("38");
            } else if (cm <= 23.3) {
                setSize("39");
            } else if (cm <= 24) {
                setSize("40");
            } else if (cm <= 24.6) {
                setSize("41");
            } else if (cm <= 25) {
                setSize("42");
            }
        }
    };


    return(
        <div>
            <button type="button" className="btn btn-success button-container" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Tìm size giày</button>


            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Nhập kích thước bàn chân (21-25cm)</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <input onChange={(value) => changeSizeHandler(value)} type="number" className="form-control"/>
                            {size === "0" ? (
                                <h5>Kích thước không hợp lệ hoặc bên chúng tôi không có size phù hợp</h5>
                            ):(
                                <h5>Bạn phù hợp với size : {size}</h5>
                            )}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
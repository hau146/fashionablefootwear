import axios from "axios";

const URL_VOUCHER = "http://localhost:8080/api/public/voucher"

export const findAllById = async (id) => {
    try {
        let res = await axios.get(URL_VOUCHER + `?id=${id}`);
        console.log(res.data)
        return res.data;

    } catch (e) {
        console.log("lỗi hàm findAllById ở voucher");
    }
}

export const findByCode = async (id, code) => {
    try {
        let res = await axios.get(URL_VOUCHER + `/detailVoucher?id=${id}&code=${code}`);
        console.log(res.data)
        return res.data;

    } catch (e) {
        console.log("lỗi hàm findByCode");
    }
}

export const setStatusVoucher = async (id) => {
    try {
        let response = await axios.patch(URL_VOUCHER + `/setStatus?id=${id}`);
        return response.status;
    } catch (e) {
        console.log("lỗi hàm setStatusVoucher");
    }
}


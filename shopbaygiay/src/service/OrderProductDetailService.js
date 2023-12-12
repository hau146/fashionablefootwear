import axios from "axios";

const URL_ORDER_PRODUCT_DETAIL = "http://localhost:8080/api/public/orderProductDetail"

export const findAllById = async (currentPage,limit,id) => {
    try {
        let res = await axios.get(URL_ORDER_PRODUCT_DETAIL + `/${id}` +`?page=${currentPage}&limit=${limit}`);
        return res;

    } catch (e) {
        console.log("lỗi hàm findAllById");
    }
}

export const sumTotalPriceById = async (id) => {
    try {
        let res = await axios.get(URL_ORDER_PRODUCT_DETAIL + `/sumTotalPrice/${id}`);
        console.log(res.data)
        return res.data;
    } catch (e) {
        console.log("lỗi hàm findAllById");
    }
}

export const updateRankAccount = async (id, number) => {
    try {
        let res = await axios.patch(URL_ORDER_PRODUCT_DETAIL + `/updateRankAccount?id=${id}&number=${number}`);
        return res.status;
    } catch (e) {
        console.log("lỗi hàm findAllById");
    }
}
import axios from "axios";

const URL_CART = "http://localhost:8080/api/public/cart"

export const showCartById = async (currentPage,limit,id) => {
    try {
        let res = await axios.get(URL_CART + `/${id}` +`?page=${currentPage}&limit=${limit}`);
        return res;

    } catch (e) {
        console.log("lỗi hàm showCartById");
    }
}
export const sumProductInCart = async () => {
    try {
        let res = await axios.get(URL_CART + "/sumCart");
        return res.data;

    } catch (e) {
        console.log("lỗi hàm sumProductInCart");
    }
}
export const addToCart = async (values) =>{
    console.log(values)
    console.log("++++++++++")
    try {
        let response = await axios.post(URL_CART, values);
        return response.status;
    } catch (e){
        console.log("lỗi hàm addToCart");
    }
}
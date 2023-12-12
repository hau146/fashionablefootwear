import axios from "axios";

const URL_PRODUCT = "http://localhost:8080/api/public/product"
const URL_TYPE_PRODUCT = "http://localhost:8080/api/public/typeProduct"


export const getAllProduct = async (currentPage,limit,nameProduct,typeId) => {
    console.log(nameProduct)
    console.log(typeId)
    try {
        let res = await axios.get(URL_PRODUCT +`?page=${currentPage}&limit=${limit}&nameProduct=${nameProduct}&typeId=${typeId}`);
        return res;

    } catch (e) {
        console.log("lỗi hàm getAllImage");
    }
}

export const getAllTypeProduct = async () => {
    try {
        const response = await axios.get(URL_TYPE_PRODUCT);
        return response.data;
    } catch (e) {
        console.log("lỗi hàm getAllTypeProduct");
    }
}

export const findByAllIdProduct = async (id) => {
    try {
        const response = await axios.get(URL_PRODUCT + `/detailProduct/${id}`);
        console.log(response)
        return response.data;
    } catch (e) {
        console.log("lỗi hàm getAllTypeProduct");
    }
}

export const findBySizeIdProduct = async (id) => {
    try {
        const response = await axios.get(URL_PRODUCT + `/detailSizeProduct/${id}`);
        return response.data;
    } catch (e) {
        console.log("lỗi hàm getAllTypeProduct");
    }
}

export const findByImageIdProduct = async (id) => {
    try {
        const response = await axios.get(URL_PRODUCT + `/detailImageProduct/${id}`);
        return response.data;
    } catch (e) {
        console.log("lỗi hàm getAllTypeProduct");
    }
}
export const deleteById = async (id) =>{
    try {
        let response = await axios.patch(URL_PRODUCT + `/delete?id=${id}`);
        return response.status;
    } catch (e){
        console.log("lỗi hàm increasingTheNumber");
    }
}


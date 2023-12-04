import axios from "axios";

const URL_SIZE = "http://localhost:8080/api/public/sizeProduct"


export const getAllSize = async () => {
    try {
        let response = await axios.get(URL_SIZE);
        return response.data;
    } catch (e) {
        console.log("lỗi hàm getAllSize");
    }
}
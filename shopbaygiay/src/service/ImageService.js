import axios from "axios";

const URL_IMAGE = "http://localhost:8080/api/public/imageProduct"


export const getAllImage = async () => {
    try {
        let response = await axios.get(URL_IMAGE);
        return response.data;
    } catch (e) {
        console.log("lỗi hàm getAllImage");
    }
}
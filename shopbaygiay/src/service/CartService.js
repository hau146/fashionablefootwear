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

export const totalPrice = async (id) =>{
    try {
        let response = await axios.get(URL_CART + `/totalPrice/${id}`);
        console.log(response.data)
        return response.data;
    } catch (e){
        console.log("lỗi hàm totalPrice");
    }
}

export const increasingTheNumber = async (id) =>{
    try {
        let response = await axios.patch(URL_CART + `/increase?id=${id}`);
        console.log(response.status)
        return response.status;
    } catch (e){
        console.log("lỗi hàm increasingTheNumber");
    }
}
export const reduceTheNumberOf = async (id) =>{
    try {
        let response = await axios.patch(URL_CART + `/reduce?id=${id}`);
        console.log(response.status)
        return response.status;
    } catch (e){
        console.log("lỗi hàm reduceTheNumberOf");
    }
}


const calculateDistance = async (origin, destination) => {
    const apiKey = 'YOUR_GOOGLE_MAPS_API_KEY';
    const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${origin}&destinations=${destination}&key=${apiKey}`;

    try {
        const response = await axios.get(url);
        const distance = response.data.rows[0].elements[0].distance.value;
        return distance; // Trả về khoảng cách (đơn vị meters)
    } catch (error) {
        console.error('Error calculating distance:', error);
        return null;
    }
};

const calculateShippingCost = async (origin, destination) => {
    const distance = await calculateDistance(origin, destination);
    if (distance !== null) {
        // Áp dụng mô hình giá cả của bạn (ví dụ: giá cố định hoặc theo khoảng)
        const shippingCost = distance * 20000;
        return shippingCost;
    }
    return null;
};

const handleCalculateShipping = async () => {
    const origin = 'Origin Address';
    const destination = 'Destination Address';
    const shippingCost = await calculateShippingCost(origin, destination);
    if (shippingCost !== null) {
        console.log('Shipping Cost:', shippingCost);
        // Cập nhật giao diện người dùng với phí vận chuyển tính được
    } else {
        console.error('Failed to calculate shipping cost.');
    }
};

export const checkVnPay = async (values) => {
    try {
        const a  = await axios.get(`http://localhost:8080/api/public/pay?sum=${values}`);
        return a.data;
    } catch (e) {

    }
}
export const payProduct = async (values) =>{
    try {
        let response = await axios.post(URL_CART + "/payCart", values);
        return response.status;
    } catch (e){
        console.log("lỗi hàm payProduct");
    }
}
export const deleteAfterPayment = async (id) =>{
    try {
        let response = await axios.delete(URL_CART + `/deleteAfterPayment/${id}`);
        return response.status;
    } catch (e){
        console.log("lỗi hàm deleteAfterPayment");
    }
}



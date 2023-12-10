export const formatPrice = (price)  => {
    // Định dạng giá tiền thành xx.xxx
    return price.toLocaleString('vi-VN');
}
export function vndToUsd(vnd) {
    const exchangeRate = 24288; // Tỷ giá VND sang USD
    let usd = vnd / exchangeRate;
    let strUsd = usd.toString()
    let newUsd = strUsd.substring(0,4)
    let numberUsd = +newUsd;
    console.log(numberUsd)
    return numberUsd;
}
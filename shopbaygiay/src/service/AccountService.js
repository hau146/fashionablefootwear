import axios from "axios";
import jwtDecode from "jwt-decode";

export const loginUser = async (appUser) => {
    const result = await axios.post(`http://localhost:8080/api/public/account/login`,appUser)
    return result;
}

export const addJwtTokenToLocalStorage = (jwtToken) => {
    localStorage.setItem("JWT", jwtToken);
}

export const infoAppUserByJwtToken = () => {
    const jwtToken = localStorage.getItem("JWT");
    if (jwtToken) {
        const result = jwtDecode(jwtToken);
        return result;
    }
}

export const getIdByUserName = async (userName) => {
    const result = await axios.get(`http://localhost:8080/api/public/account/idUser/${userName}`);
    console.log("getIdByUserName")
    console.log(result.data)
    return result;
}

export const checkRollAppUser = (roleName) => {
    const jwtToken = localStorage.getItem("JWT");
    if (jwtToken){
        const roleList = jwtDecode(jwtToken).roleList;
        const checkRole = roleList.some((role) => role.authority === roleName);
        return checkRole;
    }
}

export const editProfile = async (values) => {
    console.log(values)
    try {
        const result = await axios.patch(`http://localhost:8080/api/public/account/edit`, values);
        return result.status;
    } catch (error){
        console.log(error);
    }
}

// export const checkIdCustomers = async (id) => {
//     try {
//         const result = await axios.get(`http://localhost:8080/api/user/${id}`);
//         return result.data;
//     } catch (error){
//         console.log(error);
//     }
// }
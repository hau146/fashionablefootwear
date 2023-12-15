import * as CartService from "../service/CartService";
import {createContext, useContext, useEffect, useReducer, useState} from "react";
import {useParams} from "react-router-dom";
import * as AccountService from "../service/AccountService";


export const CartContext = createContext({});
const cartReducer = (state, action) => {

    switch (action.type) {
        case 'GET_CART':
            return {
                ...state,
                cartItem: action.payload.carts
            };

        default:
            return state;
    }
}

export const CartProvider = ({children}) => {
    const [cartState, dispatch] = useReducer(cartReducer, {cartItem: []});
    const [cart, setCart] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [records, setRecords] = useState("");
    const [currentPage, setCurrentPage] = useState(0);
    const [limit, setLimit] = useState(3);
    const {id} = useParams();
    const [sumCart, setSumCart] = useState(0);
    const [userId, setUserId] = useState("");
    console.log(cartState)
    useEffect(() => {
        sumProductInCart()
        getAppUserId()
    }, []);
    useEffect(() => {
        showCartById()
    }, [userId]);
    // useEffect(() => {
    //     if (cartState && cartState.cartItem.length >= 0) {
    //         console.log(cartState.cartItem.length)
    //         setSumCart(cartState.cartItem.length);
    //
    //     }
    // }, [cartState]);


    const sumProductInCart = async () => {
        const data = await CartService.sumProductInCart();
        setSumCart(data)
    }
    const getAppUserId = async () => {
        const isLoggedIn = AccountService.infoAppUserByJwtToken();
        if (isLoggedIn) {
            const id = await AccountService.getIdByUserName(isLoggedIn.sub);
            setUserId(id.data);
        }
    }
    // const showCartById = async () => {
    //     const res = await CartService.showCartById(currentPage, limit, id);
    //     setCart(res.data.content);
    //     setRecords(res.data.size);
    //     setTotalPages(Math.ceil(res.data.totalElements / 3));
    // }

    const showCartById = async () => {
        try {
            if (userId) {
                const res = await CartService.showCartById(currentPage, limit, userId.id);
                console.log(res)
                dispatch({
                    type: 'GET_CART',
                    payload:
                        {
                            carts: res.data.content
                        }
                })
                if (res.status === 200) {
                    console.log("Lấy dữ liệu thành công!")
                } else {
                    console.log("Lấy dữ liệu thất bại!")
                }
            }
        } catch (e) {
            console.log("Giỏ lỗi")
        }

    };


    return <CartContext.Provider value={{
        sumCart,
        cartState
    }}>
        {children}
    </CartContext.Provider>
}

export const useCart = () => {
    return useContext(CartContext);
};
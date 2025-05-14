import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";
// Khai báo để sẵn sàng cho chia sẻ dữ liệu
export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {
    const [cartItems, setCartItems] = useState({});

    const url = "http://localhost:4000";

    const addToCart = (itemId) => {
        if (!cartItems[itemId]) {
            // Lấy giá trị hiện tại của cartItems sau đó cộng 1 nếu = 0
            setCartItems((prev) => ({ ...prev, [itemId]: 1 }))
        }
        else {
            // Sao chép giá trị hiện tại và cộng thêm 1
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        }
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    }
    // Theo dõi sự thay đổi của cartItems mỗi khi nó thay đổi và in ra
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {

                let itemInfo = food_list.find((product) => product._id === item)
                totalAmount += itemInfo.price * cartItems[item];
            }

        }
        return totalAmount;
    }


    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        url

    }
    return (
        // Chia sẻ dữ liệu
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;
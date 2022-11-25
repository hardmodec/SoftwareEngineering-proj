// import { createContext, useState } from "react";
// import * as React from 'react';




// const CartContext = createContext({
//     orderCart, menuCart,
//     AddMenu
// });


// const CartProvider = ({children}) => {

//     const [orderCart, setOrderCart] = useState()
//     const [menuCart, setMenuCart] = useState()

//     const AddMenu = (id, amount) => {
//         setMenuCart(...menucart,{menuid: id, amount: amount})
//     }

//     return (
//         <CartContext.Provider value={{
//             orderCart, menuCart,
//             AddMenu
//         }}
//         >{children}</CartContext.Provider>
//     )
// }

// const CartConsumer = CartContext.Consumer;
// export {CartProvider, CartConsumer}
// export default CartContext;
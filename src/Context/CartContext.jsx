import { createContext, useState } from "react";
import * as React from 'react';




const CartContext = createContext({
    menu1Cart1 : {dinnerid: 1, dinneramount: 1, menulist:[{menuid: 2, amount: 1}, {menuid: 1, amount: 1}]},
    menu2Cart1 : {dinnerid: 2, dinneramount: 1, menulist:[{menuid: 3, amount: 1}, {menuid: 2, amount: 1}, {menuid: 5, amount: 1}, {menuid: 1, amount: 1}]},
    menu3Cart1 : {dinnerid: 3, dinneramount: 1, menulist:[{menuid: 6, amount: 1}, {menuid: 7, amount: 1}, {menuid: 8, amount: 1}, {menuid: 1, amount: 1}]},
    menu4Cart1 : {dinnerid: 4, dinneramount: 1, menulist:[{menuid: 4, amount: 5}, {menuid: 9, amount: 1}, {menuid: 3, amount: 5}, {menuid: 2, amount: 1}, {menuid: 1, amount: 1}]},

    AddMenu1 : () => {},
    AddMenu2 : () => {},
    AddMenu3 : () => {},
    AddMenu4 : () => {},

    dinnerCart : [{dinnerid: 4, dinneramount:1, menulist:[{menuid: 4, amount: 5}, {menuid: 9, amount: 1}, {menuid: 3, amount: 5}, {menuid: 2, amount: 1}, {menuid: 1, amount: 1}]}],
    AddDinner1 : () => {},
    AddDinner2 : () => {},
    AddDinner3 : () => {},
    AddDinner4 : () => {},

});


const CartProvider = ({children}) => {

    const [menu1Cart1, setMenu1Cart1] = useState({dinnerid: 1, dinneramount: 1, menulist:[{menuid: 2, amount: 1}, {menuid: 1, amount: 1}]})
    const [menu2Cart1, setMenu2Cart1] = useState({dinnerid: 2, dinneramount: 1, menulist:[{menuid: 3, amount: 1}, {menuid: 2, amount: 1}, {menuid: 5, amount: 1}, {menuid: 1, amount: 1}]})
    const [menu3Cart1, setMenu3Cart1] = useState({dinnerid: 3, dinneramount: 1, menulist:[{menuid: 6, amount: 1}, {menuid: 7, amount: 1}, {menuid: 8, amount: 1}, {menuid: 1, amount: 1}]})
    const [menu4Cart1, setMenu4Cart1] = useState({dinnerid: 4, dinneramount: 1, menulist:[{menuid: 4, amount: 5}, {menuid: 9, amount: 1}, {menuid: 3, amount: 5}, {menuid: 2, amount: 1}, {menuid: 1, amount: 1}]})
    const [dinnerCart, setDinnerCart] = useState([
        // {dinnerid: 1, dinneramount:1, menulist:[{menuid: 2, amount: 1}, {menuid: 1, amount: 1}]},
        // {dinnerid: 2, dinneramount:1, menulist:[{menuid: 3, amount: 1}, {menuid: 2, amount: 1}, {menuid: 5, amount: 1}, {menuid: 1, amount: 1}]},
        // {dinnerid: 3, dinneramount:1, menulist:[{menuid: 6, amount: 1}, {menuid: 7, amount: 1}, {menuid: 8, amount: 1}, {menuid: 1, amount: 1}]},
        {dinnerid: 4, dinneramount:1, menulist:[{menuid: 4, amount: 5}, {menuid: 9, amount: 1}, {menuid: 3, amount: 5}, {menuid: 2, amount: 1}, {menuid: 1, amount: 1}]}
    ])

    const AddMenu1 = (menuid, amount) => {
        for (let i = 0; i < 2; i++) {
            if (menu1Cart1 && menu1Cart1.menulist[i].menuid === menuid) {
                setMenu1Cart1(menu1Cart1.menulist[i].amount= amount)
            }
        }
    }
    // const ResetMenu1 = (menuid, amount) => {
    //     setMenuCart2(menu1Cart1=[])
    // }
    const AddMenu2 = (menuid, amount) => {
        for (let i = 0; i < 4; i++) {
            if (menu2Cart1 && menu2Cart1.menulist[i].menuid === menuid) {
                setMenu2Cart1(menu2Cart1.menulist[i].amount= amount)
            }
        }
    }
    // const ResetMenu2 = (menuid, amount) => {
    //     setMenuCart2(menu2Cart2=[])
    // }
    const AddMenu3 = (menuid, amount) => {
        for (let i = 0; i < 4; i++) {
            if (menu3Cart1 && menu3Cart1.menulist[i].menuid === menuid) {
                setMenu3Cart1(menu3Cart1.menulist[i].amount= amount)
            }
        }
    }
    // const ResetMenu3 = (menuid, amount) => {
    //     setMenuCart3(menuCart3=[])
    // }
    // const AddMenu4 = (menuid, amount) => {
    //     for (let i = 0; i < 5; i++) {
    //         if (menu4Cart1.menulist[i].menuid === menuid) {
    //             setMenu4Cart1(menu4Cart1.menulist.amount= amount)
    //         }
    //     }
    // }
    const AddMenu4 = (menuid, amount) => {
        for (let i = 0; i < 5; i++) {
            if (menu4Cart1 && menu4Cart1.menulist[i].menuid === menuid) {
            }
        setMenu4Cart1(menu4Cart1.menulist[i].amount= amount)
        }
    }
    // const menuList = dinnerCart.map((menu, index) => (<div className="shoppinglist" key={index}>{menu.dinnerid}, {menu.menulist[0].menuid}<button className="btn1"></button></div>));

    const AddDinner1 = () => {
        setDinnerCart([...dinnerCart, ...menu1Cart1])
    }
    const AddDinner2 = () => {
        setDinnerCart([...dinnerCart, ...menu2Cart1])
    }
    const AddDinner3 = () => {
        setDinnerCart([...dinnerCart, ...menu3Cart1])
    }
    const AddDinner4 = () => {
        setDinnerCart([...dinnerCart, ...menu4Cart1])
    }
    // const ResetMenu4 = (menuid, amount) => {
    //     setMenuCart4(menuCart4=[])
    // }

    // const AddDinner = (menuid, amount)

    return (
        <CartContext.Provider value={{
            menu1Cart1, menu2Cart1, menu3Cart1, menu4Cart1, dinnerCart,
            AddMenu1, AddMenu2, AddMenu3, AddMenu4, AddDinner1, AddDinner2, AddDinner3, AddDinner4 
            // AddMenu, AddDinner,
        }}
        >{children}</CartContext.Provider>
    )
}

const CartConsumer = CartContext.Consumer;
export {CartProvider, CartConsumer}
export default CartContext;
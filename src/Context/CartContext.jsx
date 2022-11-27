import { createContext, useState } from "react";
import * as React from 'react';




const CartContext = createContext({
    menu1Cart1 : {dinner: 1, menulist:[{menu: 2, count: 1}, {menu: 1, count: 1}]},
    menu2Cart1 : {dinner: 2, menulist:[{menu: 3, count: 1}, {menu: 2, count: 1}, {menu: 5, count: 1}, {menu: 1, count: 1}]},
    menu3Cart1 : {dinner: 3, menulist:[{menu: 6, count: 1}, {menu: 7, count: 1}, {menu: 8, count: 1}, {menu: 1, count: 1}]},
    menu4Cart1 : {dinner: 4, menulist:[{menu: 4, count: 5}, {menu: 9, count: 1}, {menu: 3, count: 5}, {menu: 2, count: 1}, {menu: 1, count: 1}]},

    AddMenu1 : () => {},
    AddMenu2 : () => {},
    AddMenu3 : () => {},
    AddMenu4 : () => {},
    AddMenu41 : () => {},
    AddMenu42 : () => {},
    AddMenu43 : () => {},

    dinnerCart : [{dinner: 4, menu: 4, count: 5}, {dinner: 2, menu: 9, count: 1}, {dinner: 3, menu: 3, count: 5}, {dinner: 2, menu: 2, count: 1}, {dinner: 1, menu: 1, count: 1}],
    AddDinner1 : () => {},
    AddDinner2 : () => {},
    AddDinner3 : () => {},
    AddDinner4 : () => {},
    Addstyle1  : () => {},
    Addstyle2  : () => {},
    Addstyle3  : () => {},
    Addstyle4  : () => {},

    ResetCart  : () => {},

});


const CartProvider = ({children}) => {

    const [menu1Cart1, setMenu1Cart1] = useState([{dinner: 1, menu: 2, count: 1}, {dinner: 1, menu: 1, count: 1}])
    const [menu2Cart1, setMenu2Cart1] = useState([{dinner: 4, menu: 3, count: 1}, {dinner: 4, menu: 2, count: 1}, {dinner: 4, menu: 5, count: 1}, {dinner: 4, menu: 1, count: 1}])
    const [menu3Cart1, setMenu3Cart1] = useState([{dinner: 7, menu: 6, count: 1}, {dinner: 7, menu: 7, count: 1}, {dinner: 7, menu: 8, count: 1}, {dinner: 7, menu: 1, count: 1}])
    const [menu4Cart1, setMenu4Cart1] = useState([{dinner: 10, menu: 4, count: 5}, {dinner: 10, menu: 9, count: 1}, {dinner: 10, menu: 3, count: 5}, {dinner: 10, menu: 2, count: 1}, {dinner: 10, menu: 1, count: 1}])
    const [dinnerCart, setDinnerCart] = useState([])
        // {dinnerid: 1, dinneramount:1, menulist:[{menu: 2, count: 1}, {menu: 1, count: 1}]},
        // {dinnerid: 2, dinneramount:1, menulist:[{menu: 3, count: 1}, {menu: 2, count: 1}, {menu: 5, count: 1}, {menu: 1, count: 1}]},
        // {dinnerid: 3, dinneramount:1, menulist:[{menu: 6, count: 1}, {menu: 7, count: 1}, {menu: 8, count: 1}, {menu: 1, count: 1}]},
        // {dinnerid: 4, dinneramount:1, menulist:[{menu: 4, count: 5}, {menu: 9, count: 1}, {menu: 3, count: 5}, {menu: 2, count: 1}, {menu: 1, count: 1}]}
    

    const AddMenu1 = (menuids, count) => {
        for (let i = 0; i < 2; i++) {
            if (menu1Cart1 && menu1Cart1[i].menu === menuids) {
                menu1Cart1[i].count = count
                setMenu1Cart1(menu1Cart1)
                console.log(count, '1111111111111111')
            }
        }
    }
    // const ResetMenu1 = (menu, count) => {
    //     setMenuCart2(menu1Cart1=[])
    // }
    const AddMenu2 = (menu, count) => {
        for (let i = 0; i < 4; i++) {
            if (menu2Cart1 && menu2Cart1[i].menu === menu) {
                menu2Cart1[i].count = count
                setMenu2Cart1(menu2Cart1)
                console.log(count, menu, '2222222222')
                console.log(menu2Cart1)
            }                   

        }        

    }
    // const ResetMenu2 = (menu, count) => {
    //     setMenuCart2(menu2Cart2=[])
    // }
    const AddMenu3 = (menu, count) => {
        for (let i = 0; i < 4; i++) {
            if (menu3Cart1 && menu3Cart1[i].menu === menu) {
                menu3Cart1[i].count = count
                setMenu3Cart1(menu3Cart1)               
                 console.log(count, '333333333333')
            }
        }
    }
    // const ResetMenu3 = (menu, count) => {
    // }
    // const AddMenu4 = (menu, count) => {
    //     for (let i = 0; i < 5; i++) {
    //         if (menu4Cart1.menulist[i].menu === menu) {
    //             setMenu4Cart1(menu4Cart1.menulist.count= count)
    //         }
    //     }
    // }
    const AddMenu4 = (menu, count) => {
        for (let i = 0; i < 5; i++) {
            if (menu4Cart1 && menu4Cart1[i].menu === menu) {
                menu4Cart1[i].count = count
                setMenu4Cart1(menu4Cart1)
                console.log(count, '444444444444444444')
            }
        }
    }
    const AddMenu41 = (menu, count) => {
        for (let i = 0; i < 5; i++) {
            if (menu4Cart1 && menu4Cart1[i].menu === menu) {
                menu4Cart1[i].count = 5*count
                setMenu4Cart1(menu4Cart1)
                console.log(count, '414141414141444444444444')
            }
        }
    }
    const AddMenu42 = (menu, count) => {
        for (let i = 0; i < 5; i++) {
            if (menu4Cart1 && menu4Cart1[i].menu === menu) {
                menu4Cart1[i].count = 4*count
                setMenu4Cart1(menu4Cart1)
                console.log(count, '424242424242444444444444')
            }
        }
    }
    const AddMenu43 = (menu, count) => {
        for (let i = 0; i < 5; i++) {
            if (menu4Cart1 && menu4Cart1[i].menu === menu) {
                menu4Cart1[i].count = 5*count
                setMenu4Cart1(menu4Cart1)
                console.log(count, '43434343434444444444444')
            }
        }
    }
    const Addstyle1 = (dinstyle1) => {
            if (menu1Cart1 && dinstyle1 === 1) {
                for (let i = 0; i < 2; i++){
                    menu1Cart1[i].dinner = 1
                }
            }
            if (menu1Cart1 && dinstyle1 === 2) {
                for (let i = 0; i < 2; i++){
                    menu1Cart1[i].dinner = 2
                }
            }
            if (menu1Cart1 && dinstyle1 === 3) {
                for (let i = 0; i < 2; i++){
                    menu1Cart1[i].dinner = 3
                }
            }
    }
    const Addstyle2 = (dinstyle2) => {
        if (menu1Cart1 && dinstyle2 === 4) {
            for (let i = 0; i < 4; i++){
                menu2Cart1[i].dinner = 1
            }
        }
        if (menu1Cart1 && dinstyle2 === 5) {
            for (let i = 0; i < 4; i++){
                menu2Cart1[i].dinner = 5
            }
        }
        if (menu1Cart1 && dinstyle2 === 6) {
            for (let i = 0; i < 4; i++){
                menu2Cart1[i].dinner = 6
            }
        }
    }
    const Addstyle3 = (dinstyle3) => {
        if (menu3Cart1 && dinstyle3 === 7) {
            for (let i = 0; i < 4; i++){
                menu3Cart1[i].dinner = 7
            }
        }
        if (menu3Cart1 && dinstyle3 === 8) {
            for (let i = 0; i < 4; i++){
                menu3Cart1[i].dinner = 8
            }
        }
        if (menu3Cart1 && dinstyle3 === 9) {
            for (let i = 0; i < 4; i++){
                menu3Cart1[i].dinner = 9
            }
        }
    }
    const Addstyle4 = (dinstyle4) => {
        if (menu4Cart1 && dinstyle4 === 10) {
            for (let i = 0; i < 5; i++){
                menu4Cart1[i].dinner = 10
            }
        }
        if (menu4Cart1 && dinstyle4 === 11) {
            for (let i = 0; i < 5; i++){
                menu4Cart1[i].dinner = 11
            }
        }
    }
    // const menuList = dinnerCart.map((menu, index) => (<div className="shoppinglist" key={index}>{menu.dinner}, {menu.menulist[0].menu}<button className="btn1"></button></div>));
    
    const AddDinner1 = () => {
        setDinnerCart([...dinnerCart, ...menu1Cart1])
        alert('장바구니에 추가되었습니다.')
    }
    const AddDinner2 = () => {
        setDinnerCart([...dinnerCart, ...menu2Cart1])
        alert('장바구니에 추가되었습니다.')
        console.log(dinnerCart)

    }
    const AddDinner3 = () => {
        setDinnerCart([...dinnerCart, ...menu3Cart1])
        alert('장바구니에 추가되었습니다.')
        console.log(dinnerCart)
    }
    const AddDinner4 = () => {
        setDinnerCart([...dinnerCart, ...menu4Cart1])
        alert('장바구니에 추가되었습니다.')
    }
    const ResetCart = (menu, count) => {
        setDinnerCart([])
    }

    return (
        <CartContext.Provider value={{
            menu1Cart1, menu2Cart1, menu3Cart1, menu4Cart1, dinnerCart,
            AddMenu1, AddMenu2, AddMenu3, AddMenu4, AddMenu41, AddMenu42, AddMenu43, AddDinner1, AddDinner2, AddDinner3, 
            Addstyle1, Addstyle2, Addstyle3, Addstyle4, AddDinner4, ResetCart,
        }}
        >{children}</CartContext.Provider>
    )
}

const CartConsumer = CartContext.Consumer;
export {CartProvider, CartConsumer}
export default CartContext;
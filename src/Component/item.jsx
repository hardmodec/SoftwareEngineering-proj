import React, { Component } from 'react'


//스테이크, 와인, 커피, 샴페인, 샐러드, 에그 스크램블, 빵, 바게트빵  / 샴페인 1병 = 5잔, 커피 1포트 = 5잔
export const dinner = [
  {
      dinnerid: 1,
      name: '발렌타인 디너',
      amount: 1,
      ischecked: true,
      wine: 1,
      steak: 1,
      price: 45000,
    
  },
  {
      dinnerid: 2,
      name: '프렌치 디너',
      amount: 1,
      ischecked: true,
      coffee: 1,
      wine: 1,
      salad: 1,
      steak: 1,
      price: 56000,
  },
  {
      dinnerid: 3,
      name: '잉글리시 디너',
      amount: 1,
      ischecked: true,
      eggscramble: 1,
      bacon: 1,
      bread: 1,
      steak: 1,
      price: 48000,
  },
  {
      dinnerid: 4,
      name: '샴페인축제 디너',
      amount: 1,
      ischecked: true,
      champagne: 5, 
      baguette: 4,
      coffee: 5,
      wine: 1,
      steak: 1,
      price: 136000,
  },
]

export const basicmenu = {
  steak:{
    menuid: 1,
    name: "스테이크",
    amount: 0,
    price: 30000,
  },
  wine:{
    menuid: 2,
    name: "와인",
    amount: 1,
    price: 15000,
  },
  coffee:{
    menuid: 3,
    name: "커피",
    amount: 1,
    price: 5000
  },
  champagne:{
    menuid: 4,
    name: "샴페인",
    amount: 1,
    price: 10000,
  },
  salad:{
    menuid: 5,
    name: "샐러드",
    amount: 1,
    price: 6000,
  },
  eggscramble:{
    menuid: 6,
    name: "에그 스크램블",
    amount: 1,
    price: 7000,
  },
  bacon:{
    menuid: 7,
    name: "베이컨",
    amount: 1,
    price:8000
  },
  bread:{
    menuid: 8,
    name: "빵",
    amount: 1,
    price:3000
  },
  baguette:{
    menuid: 9,
    name: "바게트빵",
    amount: 1,
    price: 4000
  },
  cheeze:{
    menuid: 10,
    name: "치즈",
    amount: 1,
    price: 2000,
  }
}
  


  export const menustyle = {
    simple: {
      stlyeid: 1,
      price: 3000,
      setting: {
        plate: "상자",
        napkin: "냅킨",
        tray: "풀라스틱",
        flower: undefined
      },
    },
    delux: {
      styleid: 2,
      price: 4000,
      setting: {
        plate: "도자기",
        napkin: "흰색면냅킨",
        tray: "나무",
        flower: undefined

      },
    },
    grand: {
      styleid: 3,
      price: 5000,
      setting: {
        plate: "은",
        napkin: "흰색면냅킨",
        tray: "은",
        flower: "작은꽃병",
      },
    }
  }

  export const consumergrade = {
      bronze: {
        gradeid: 1,
        rate: 0.1,
      },
      silver: {
        gradeid: 2,
        rate: 0.2,
      },
      gold: {
        gradeid: 3,
        rate: 0.3,
      },
      platinum: {
        gradeid: 4,
        rate: 0.4,
      },
      vip: {
        gradeid: 5,
        rate: 0.6,
      },
      vvip: {
        gradeid: 6,
        rate: 0.8,
      }
  }


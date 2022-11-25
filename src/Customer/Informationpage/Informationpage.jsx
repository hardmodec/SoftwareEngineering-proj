import  Box  from '@mui/material/Box';
import { Router } from 'react-router-dom';
import Header from '../../Component/Header';
import * as React from 'react';
import './Information.css'

function Informationpage(){
    return(
    <>
    <div className="infoname">“ 지금 당장 여러분의 남편 아내 엄마 아버지 또는 친구를 감동시키세요! ”</div>
    <div className="infoemail">위치: 서울 동대문구 서울시립대로 163 (전농동) 328호</div>
    <div className="infopassword">영업시간: 매일 5 p.m - 9 p.m</div>
    <div className="infoaddress">*연중 무휴, 공휴일에도 합니다.*</div>
    {/* <div className="phone_number">phone_number:</div>
    <aside className="cartinfo">CART:</aside>     */}
    </>
    );
}

export default Informationpage
// import { useEffect } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { getEurInfo } from '../model/Call';

export const Exchanger = (e: any) => {
// const exchangeEurToKrw = (krw: any) => krw * eurInfo.basePrice;

const [eurInfo, setEurInfo] = useState(0);
const [enteredNum, setEnterdNum] = useState();

useEffect(() => {
    getEurInfo().then((value) => {
    setEurInfo(value);
    });
    
    return () => {};
}, []);

// const inputForm = (e : any) => {
//     const inputValue =  e;
//     setEnterdNum(inputValue);
//   };

const changeEnteredNum = (e : any) => {
    const value: string = e.target.value;
    // const value: number = e.toString();
    const removedCommaValue: any = (value.replaceAll(",", ""));
    setEnterdNum(removedCommaValue);
 };
// //  const beforeEuro = enteredNum.toFixed(0);
// //  const euro = Number(beforeEuro);
const euro = (enteredNum);
const euroNum = ((euro));
const beforeWon = (enteredNum);
const won = ((beforeWon)*eurInfo.basePrice).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",");

/**
 * 1. 인풋 넘버 입력
 * 2. 소수점 두자리
 * 3. e.target.value로 가져옴
 * 4. 
 */

if (!eurInfo) return <div>환율 정보 불러오는 중</div>;

return (
    <>
    <input
            type='string'
            value={euroNum}
            step=".01"
            onChange={changeEnteredNum}></input> 유로 ▶︎ <input disabled value={won}></input> 원
    </>
)

}
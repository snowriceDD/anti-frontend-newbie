// import { useEffect } from "react";
// import { useState } from "react";
import { Exchanger } from "../viewModel/Exchanger";
import { getEurInfo } from '../model/Call';
import { useEffect } from "react";
import { useState } from "react";

export const AppView = () => {
    const [eurInfo, setEurInfo] = useState(0);
    // const [enteredNum, setEnterdNum] = useState("0");

    useEffect(() => {
        getEurInfo().then((value) => {
        setEurInfo(value);
        });
        
        return () => {};
    }, []);

    

    return (
        <div className="App">
          <div>환율기준 (1 유로)</div>
          <div>
            {eurInfo.basePrice}
            {eurInfo.basePrice - eurInfo.openingPrice > 0 && "▲"}
            {eurInfo.basePrice - eurInfo.openingPrice < 0 && "▼"}
            {eurInfo.changePrice}원 (
            {(eurInfo.changePrice / eurInfo.basePrice) * 100}%)
          </div>
          <div>
            <div>살때 : {eurInfo.cashBuyingPrice}</div>
            <div>팔때 : {eurInfo.cashSellingPrice}</div>
            <div>보낼때 : {eurInfo.ttSellingPrice}</div>
            <div>받을때 : {eurInfo.ttBuyingPrice}</div>
          </div>
          <hr />
          <Exchanger/>
        </div>
      );
};
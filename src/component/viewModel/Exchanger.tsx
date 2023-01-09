// import { useEffect } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { getEurInfo } from '../model/Call';

export const Exchanger = (e: any) => {
// const exchangeEurToKrw = (krw: any) => krw * eurInfo.basePrice;
const [krw, setKrw] = useState(0);

const getData = async () => {
    try {
      const aaa = await getEurInfo();
      setKrw(aaa);
    } catch (e) {
      console.error(e)
    } 
  };

  useEffect(() => {
    getData();
  }, []);
  
  const rate = e.target.value * 3;
  return rate;
}
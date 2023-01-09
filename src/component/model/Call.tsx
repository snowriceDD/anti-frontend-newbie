import { response } from "express";
import { useEffect } from "react";
import { useState } from "react";
import { APIcall } from "../../APIcall";

export const getEurInfo = async () => {
    const krweur = await fetch("https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWEUR")
        .then((response)=> response.json())
        .then((array)=> array[0]);
    return krweur;
  };

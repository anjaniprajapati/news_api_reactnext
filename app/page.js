// 'use client'
// import React ,{useState} from "react";
import Image from "next/image";
import styles from "./page.module.css";
import NewsApi from "./news_api";
import NewsComponent from "./news_component"
// import Dammy from "./dammy";

export default function Home() {
  // const [data,setData]=useState(Dammy)
  return (
   <>
    <NewsApi/>
    {/* {data.map((infor)=>(
      <NewsComponent
        // key={infor.id}
        infor={infor}
      />
    ))} */}
    <NewsComponent/>
   </>
  );
}

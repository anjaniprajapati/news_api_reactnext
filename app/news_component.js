'use client'
import React ,{useState} from "react";
import Dammy from "./dammy";

const NewsComponent = () => {
    const [data,setData]=useState(Dammy);
  return (
    <div className="container">
      <div className='headind'>
        <p>TOP NEWS FROM INDIA</p>
      </div>
      <div className='NewsmainConter'>
            {data.map((infor)=>(
                <div className="News-container" >
                    <div className="News">
                        <img src={infor.imge} className="News-image" alt="Slide 2" />
                        <div className="News-details">
                            <h2 className="news-title">{infor.title}</h2>
                            <p className="news-discription">{infor.Dicription}</p>
                            <p className="Article">Read full article <i class="fa-solid fa-arrow-right-long" style={{color: "#f74336"}}></i></p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
};
export default NewsComponent ;
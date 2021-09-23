import React,{useEffect, useState} from "react";
import dayjs from "dayjs";

export default function Leaves() {
  const [date, setDate] = useState(new Date("september 23 2021 15:00"));
  var [shortLeave, setshortLeave] = useState("");
  useEffect(() => {
    var time = dayjs(date)
      .subtract(1, "day")
      .format("DD/MM/YYYY HH:mm")
      .toString();

    console.log(date);
  
    shortLeave: localStorage.setItem("shortLeave", time);
    
   
  }, []);
  
 
  //setshortLeave( ()=>localStorage.setItem("shortLeave", time))
  return <div>
      <p>short leave was on: {localStorage.getItem("shortLeave")}</p>
  </div>;
}

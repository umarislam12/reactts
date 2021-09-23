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
    console.log(time);
    shortLeave: localStorage.setItem("shortLeave", time);
    
   
  }, [shortLeave]);
  //setshortLeave( ()=>localStorage.setItem("shortLeave", time))
  return <div>
      <p>short leave was on: {shortLeave}</p>
  </div>;
}

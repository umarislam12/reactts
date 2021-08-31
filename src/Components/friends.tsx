import React, { useState,useEffect } from 'react';

export default function Friends() {
  // Declare a new state variable, which we'll call "count"
  const [friends, setFriend] = useState(["dog"]);
useEffect(()=>{
  document.getElementsByTagName("p")[0].innerHTML=` I had ${friends[0]}`;
},[friends])
  return (
    <div>
      <p>I have  pretty much{friends} </p>
      <button onClick={()=>setFriend(["cat"])}>
        Add friends
      </button>
    </div>
  );
}
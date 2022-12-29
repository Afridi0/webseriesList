import React, { useState } from "react";

 const Clock = () =>{
let time = new Date().toLocaleTimeString();

const [ctime, setTime] = useState(time);

const UpdateTime = () =>{
     time = new Date().toLocaleTimeString();
setTime(time);
}

setInterval(UpdateTime,1000)
return(
 <>
    <h1 className="clock"> {ctime}</h1>
  
 </>
   );
 };

 export default Clock;
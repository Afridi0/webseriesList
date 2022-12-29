import React from "react";
import ReactDOM from "react-dom";
import Card from './Cards';
import Sdate from './Sdata';
import './index.css';
import Sdata from "./Sdata";
 import Clock from "./Clock";

// we can also use map function
 
function ncard(val){
  return(
    <Card 
   imgsrc={val.imgsrc}
  sname={val.sname}
  title={val.title}
  link={val.link}
/>
  );
}

// we can use map function// {Sdata.map(ncard)} like this so we can simplyfy our code 

ReactDOM.render(<>

<h1 className="heading_style"> List of top 5 Netflix Series in 2022 </h1>
<h6  className="heading_style1">  <Clock /></h6> 

{Sdata.map(ncard)}
<Card 
   imgsrc={Sdate[0].imgsrc}
  sname={Sdate[0].sname}
  title={Sdate[0].title}
  link={Sdate[0].link}
/>
<Card 
   imgsrc={Sdate[1].imgsrc}
  sname={Sdate[1].sname}
  title={Sdate[1].title}
  link={Sdate[1].link}
/>
<Card 
   imgsrc={Sdate[2].imgsrc}
  sname={Sdate[2].sname}
  title={Sdate[2].title}
  link={Sdate[2].link}
/>
<Card 
   imgsrc={Sdate[3].imgsrc}
  sname={Sdate[3].sname}
  title={Sdate[3].title}
  link={Sdate[3].link}
/>
<Card 
   imgsrc={Sdate[4].imgsrc}
  sname={Sdate[4].sname}
  title={Sdate[4].title}
  link={Sdate[4].link}
/>

 </>
  ,document.getElementById("root")
);

import { useEffect,useState } from "react";
import Card from "./RestaurantsCard";

const Body=()=>{
    const [Odata1,setOdata1]=useState([]);
  
    useEffect(()=>{
     funcName() 
    },[]
    )
    
  
    const url="https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.153816&lng=75.858916&page_type=DESKTOP_WEB_LISTING"
    async function funcName(){
    const response = await fetch(url);
    let data = await response.json();
    setOdata1(data?.data?.cards[2]?.data?.data?.cards)
    }
    console.log(Odata1)
  
  { if (Odata1?.length===0){
      return(
        <h1>Please Wait............</h1>
      )
    }}
  
    
    return(
      <div className="body">
            <input></input>
            <button>Search</button>
            <div className="carts">
              
             {Odata1.map(product =>  <Card key={product.data.id} cartdata={product} />  )}
             
            </div>
          
      </div>
  
    )
  };

export default Body
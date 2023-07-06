import { useEffect,useState } from "react";
import Card from "./RestaurantsCard";

const Body=()=>{
    const [Odata1,setOdata1]=useState([]);
    const [fOdata1,setfOdata1]=useState([]);
    const [inValue,setinValue]=useState("");

  
    useEffect(()=>{
     funcName() 
    },[]
    )
    
  
    const url="https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.153816&lng=75.858916&page_type=DESKTOP_WEB_LISTING"
    async function funcName(){
    const response = await fetch(url);
    let data = await response.json();
    setOdata1(data?.data?.cards[2]?.data?.data?.cards)
    setfOdata1(data?.data?.cards[2]?.data?.data?.cards)
    }
  
  { if (Odata1?.length===0){
      return(
        <h1>Please Wait............</h1>
      )
    }}
  
    const getValue=(e)=>{
      setinValue(e.target.value);
      let newfdata=Odata1.filter(product=>product.data.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()))
      setfOdata1(newfdata)
    }

    return(
      <div className="body">
            <input onChange={getValue}></input>
            <button onClick={
              ()=>{
                let newfdata=Odata1.filter(product=>product.data.name.toLocaleLowerCase().includes(inValue.toLocaleLowerCase()))
                setfOdata1(newfdata)
                console.log(newfdata)


              }
            }
            >Search</button>
            
            
            
            <button onClick={
                ()=>{
                    let newdata=fOdata1.filter(product=>product.data.avgRating>3.5)
                    console.log(newdata)
                    setfOdata1(newdata)
                }
            }>sort by rate</button>


            <div className="carts">
          
            {fOdata1.map(product =>  <Card key={product.data.id} cartdata={product} /> )}

             
            </div>
          
      </div>
  
    )
  };

export default Body
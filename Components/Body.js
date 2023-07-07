import { useEffect,useState } from "react";
import Card from "./RestaurantsCard";
import ShimmerUI from "./Skimmer";

const Body=()=>{
    const [Odata1,setOdata1]=useState([]);
    const [fOdata1,setfOdata1]=useState([]);
    const [inValue,setinValue]=useState("");

  
    useEffect(()=>{
     funcName() 
    },[]
    )
    
  
    const url="https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.76237265383628&lng=76.76637498952826&page_type=DESKTOP_WEB_LISTING"
    async function funcName(){
    const response = await fetch(url);
    let data = await response.json();
    setOdata1(data?.data?.cards[2]?.data?.data?.cards)
    setfOdata1(data?.data?.cards[2]?.data?.data?.cards)
    }
  
  { if (Odata1?.length===0){
      return(
        <div className="flex flex-flex flex-wrap ml-10">
          <ShimmerUI/>
          <ShimmerUI/>
          <ShimmerUI/>
          <ShimmerUI/>
          <ShimmerUI/>
          <ShimmerUI/>
          <ShimmerUI/>
          <ShimmerUI/>
          <ShimmerUI/>
          <ShimmerUI/>
          <ShimmerUI/>
          <ShimmerUI/>
          <ShimmerUI/>
          <ShimmerUI/>
          <ShimmerUI/>
          </div>
         
      )
 }
}
  
    const getValue=(e)=>{
      setinValue(e.target.value);
      let newfdata=Odata1.filter(product=>product.data.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()))
      setfOdata1(newfdata)
    }

    return(
      <div className="body">
        <div className="flex my-9">
            <input className="ml-12 mr-2 pl-3  w-1/2 block py-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={getValue}></input>
            <button className="  w-1/6  text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
             onClick={
              ()=>{
                let newfdata=Odata1.filter(product=>product.data.name.toLocaleLowerCase().includes(inValue.toLocaleLowerCase()))
                setfOdata1(newfdata)
                console.log(newfdata)


              }
            }
            >Search</button>
            

            
            <button className="ml-2.5 px-4 py-2 text-sm font-medium text-blue-700 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white" 
            onClick={
                ()=>{
                    let newdata=fOdata1.filter(product=>product.data.avgRating>4)
                    console.log(newdata)
                    setfOdata1(newdata)
                }
            }>filter by rate greater than 4</button>

</div>


            <div className="carts flex flex-wrap ml-10">
          
            {fOdata1.map(product =>  <Card  key={product.data.id} cartdata={product} /> )}

             
            </div>
          
      </div>
  
    )
  };

export default Body
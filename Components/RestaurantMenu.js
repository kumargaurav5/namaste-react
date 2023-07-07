import { useParams } from "react-router-dom"
import { useEffect,useState } from "react"

const RestaurantMenu=()=>{
    const [MenuData,setMenuData]=useState([])

    let id1=useParams()
    let {id}=id1
    const url=`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.153816&lng=75.858916&restaurantId=${id}&submitAction=ENTER`


    useEffect(()=>{
        fetchMenu()
    },[])

    async function fetchMenu(){
        const response = await fetch(url);
        let data = await response.json();
        // {console.log(data.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards)}
        setMenuData(data.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards)
    }

    {
        if(MenuData===undefined){
            return(
                <h1>
                    NO food for Recommended
                    
                </h1>
            )
        }
    }



    {
        if(MenuData.length===0){
            return(
                <h1>
                    

                    loading .................
                </h1>
            )
        }
    }

            return(
        
                <>
                {MenuData.map((items)=>  <h1 key ={items.card.info.id}>  {items.card.info.name}</h1>)}
        
                
                </>
            )
        }




export default RestaurantMenu
import { Link } from "react-router-dom";
const Card=(props)=>{
    const {cartdata}=props;
    return(

        <div  className="card w-80 m-2 p-4 shadow-xl" >
          < Link to={`restaurant/${cartdata.data.id}`}>
          <img   alt="NO  image" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+cartdata.data.cloudinaryImageId}></img>
          <p className="carttext ">{cartdata.data.name}</p>
          <p className="carttext ">{cartdata.data.area} </p>
          <p className="carttext ">{cartdata.data.avgRating}</p>
          </Link>
          </div>


    )
  };
  export default Card
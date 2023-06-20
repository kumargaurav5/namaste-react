const Card=(props)=>{
    const {cartdata}=props;
    return(
      <div className="cartbody">
        <img alt="No image" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+cartdata.data.cloudinaryImageId}></img>
        <p className="carttext">{cartdata.data.name}</p><br/>
        <p className="carttext">{cartdata.data.area} </p><br/>
        <p className="carttext">{cartdata.data.avgRating}</p><br/>
      </div>
    )
  };
  export default Card
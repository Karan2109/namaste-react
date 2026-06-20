const Resturantcard = (props) => {
    const { resData } = props

    const { image, name, cuisine, rating, deliveryTime, costForTwo } = resData;
    return (
        <div className="res-card">
            <img className="food" src={image} alt={name}></img>
            <h3 className="name">{name}</h3>
            <h4 className="cusine">Cusine: {cuisine}</h4>
            <h4 className="rating">Rating: {rating}</h4>
            <h4 className="time">Reaching time: {deliveryTime}</h4>
            <h4 className="cost">Cost of product: {costForTwo}</h4>
        </div>
    )
}

export default Resturantcard;
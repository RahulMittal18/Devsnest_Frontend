
const Card =({food,cal})=>{
    return(
        <div className="card">
            <h1>{food||"Food Name"}</h1>
            <br />
            <h2>You have consumed {cal||"x"} cals today</h2>
        </div>
    )
}

export default Card;
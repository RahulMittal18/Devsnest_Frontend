
const FoodCard =({food, state, setState}) => {

    let handleClick = () => {
        let newState = state.filter((el) => el.index !== food.index)
        setState(newState)
    };

    return (
        <div className="fooditem">
            <h1>{food.foodName}</h1>
            <button onClick={handleClick}>Delete</button>
            
            <h2>
                This contains {food.calories} amount of calories
            </h2>
              
        </div>
    )
}

export default FoodCard;
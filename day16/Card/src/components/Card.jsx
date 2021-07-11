import meme from "./meme.jpg"

const Card =() => {
    return (
        <div className="card">
            <img src={meme} alt="memeimage" />
            <h2>This is a Card</h2>
        </div>
    )
}

export default Card;
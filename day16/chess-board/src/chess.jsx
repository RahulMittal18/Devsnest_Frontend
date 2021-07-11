const Cell =()=>{
    return(
        <div className="cell">

        </div>
    )
}

const Row=()=>{
    return(
        <div className="row">
            <Cell/>
            <Cell/>
            <Cell/>
            <Cell/>
            <Cell/>
            <Cell/>
            <Cell/>
            <Cell/>
        </div>
    )
}


const Board=()=>{
    return(
        <div className="board">
            <Row/>
            <Row/>
            <Row/>
            <Row/>
            <Row/>
            <Row/>
            <Row/>
            <Row/>
        </div>
    )
}

export default Board;
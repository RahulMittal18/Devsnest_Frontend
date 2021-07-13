const arr = [];

for(let i=0;i<64;i++){
    arr.push(i);
}

function cellColor(i){
    if((i+Math.floor(i/8))%2===0){
        return <div className="cell black"></div>
    }
    else{
        return <div className="cell white"></div>
    }
}

function MakeCells(){
    return arr.map(cellColor);
}


export default MakeCells;
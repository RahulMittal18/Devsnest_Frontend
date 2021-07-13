import {useState} from "react";

const Counter = () => {
    let [count, CountFn] = useState(0);
    return(
        <div>
            <button onClick={() => {
                CountFn(count + 1)
            }}
            >{count}
            </button>
        </div>
    )
}


export default Counter;
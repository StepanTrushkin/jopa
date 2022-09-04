import { useState } from "react";
import "./Counter.modules.scss";

function Counter() {
    const [counter, setCounter] = useState(0);

    const plusCounter = () => {
        setCounter((prev) => prev + 1);
        console.log(counter);
    };

    const minusCounter = () => {
        setCounter((prev) => prev - 1);
        console.log(counter);
    };

    return (
        <div className="counter">

                <h2>Счетчик:</h2>
                <h1>{counter}</h1>
                <button className="minus" onClick={minusCounter}>
                    - Минус
                </button>
                <button className="plus" onClick={plusCounter}>
                    Плюс +
                </button>
        </div>
    );
}

export default Counter;

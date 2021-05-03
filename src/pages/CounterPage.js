import { useReducer } from "react";
import { useCounter } from "../context/counter"
import { useHistory } from "react-router-dom"



function CounterPage() {
    const { counter,
        handleAddCounter,
        handleResetCounter,
        handleSubtractCounter,
    } = useCounter();
    const history = useHistory();



    return (
        <div>
            <h1>Counter Page Component</h1>
            <div>
                <h1>Counter: {counter}</h1>
                <button onClick={handleAddCounter}>Add</button>
                <button onClick={handleSubtractCounter}>Subtract</button>
                <button onClick={handleResetCounter}>Reset</button>
                <button
                    onClick={() => {
                        history.push("/home")
                    }}
                >
                    go to homepage</button>
            </div>
        </div>

    );
}

export default CounterPage;
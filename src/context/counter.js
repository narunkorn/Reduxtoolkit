import React, { useReducer, useContext } from "react";

const CounterContext = React.createContext();

const initialState = { counter: 0, name: "John" };

function reducer(state, action) {
    switch (action.type) {
        case "add_counter":
            return { ...state, counter: state.counter + 1 };
        case "subtract_counter":
            return { counter: state.counter - 1 };
        case "reset_counter":
            return { counter: 0 };
    }
}

function CounterProvider(props) {
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleAddCounter = () => {
        dispatch({ type: "add_counter" });
    };

    const handleSubtractCounter = () => {
        dispatch({ type: "subtract_counter" });
    };

    const handleResetCounter = () => {
        dispatch({ type: "reset_counter" });
    };

    const counterContextValue = {
        counter: state.counter,
        handleAddCounter,
        handleSubtractCounter,
        handleResetCounter,
    };

    return (
        <CounterContext.Provider value={counterContextValue}>
            {props.children}
        </CounterContext.Provider>
    );
}

function useCounter() {
    const context = useContext(CounterContext);
    return context;
}

export { CounterProvider, useCounter };
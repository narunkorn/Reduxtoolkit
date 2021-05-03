import { useSelector, useDispatch } from "react-redux"
import { increment, decrement, reset } from "../features/counter/countrSlice"

function ReduxCounterPage() {
    const counter = useSelector((state) => state.counter.counter)
    const dispatch = useDispatch()
    return (
        <div>
            <h1>Redux Counter Page Component</h1>
            <div>
                <h1>Counter: {counter}</h1>
                <button onClick={() => {
                    dispatch(increment())
                }}>Add</button>
                <button onClick={() => {
                    dispatch(decrement())
                }}>Subtract</button>
                <button onClick={() => {
                    dispatch(reset())
                }}>Reset</button>
                <button onClick={() => { }}> go to homepage</button>



            </div>
        </div>
    )
}

export default ReduxCounterPage;
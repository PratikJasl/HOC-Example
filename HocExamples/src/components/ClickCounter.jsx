import CounterHOC from "./CounterHOC";
function ClickCounter({count, incrementCount}){
    return(
        <>
            <button onClick={incrementCount}>Click Me: {count}</button>
        </>
    )
}

export default CounterHOC(ClickCounter, 2);
import CounterHOC from "./CounterHOC";
function HoverCounter({count, incrementCount}){
    return(
        <>
            <button onMouseOver={incrementCount}> Hover Over Me: {count} </button>
        </>
    )
}
const EnhancedHoverCounter = CounterHOC(HoverCounter);
export default EnhancedHoverCounter;
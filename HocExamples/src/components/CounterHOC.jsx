import { useState } from "react";

export default function CounterHOC(OldComponent, increment){
    return function EnhanceComponent(props){
        const [count, setCount] = useState(0);
        return(
            <OldComponent {...props} count = {count} incrementCount = {() => setCount(count+increment)}/>
        )
    }
}
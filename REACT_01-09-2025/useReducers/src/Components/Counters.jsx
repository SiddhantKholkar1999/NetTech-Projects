import React from 'react';
import { Reducers } from './Reducers';
import {
    Increments,
    Decrements,
    Reset,
    incrementByValue,
    decrementByValue,
} from './Action';

const initialState = { count: 0 };

export const Counters = () => {
    const [state, dispatch] = React.useReducer(Reducers, initialState);
    const [data, setData] = React.useState(null);
    return (
        <>
            <div>
                <h1>Counter:{state.count}</h1>
                <input
                    type='number'
                    onChange={(e)=>setData(+e.target.value)}
                />

                <button onClick={()=>dispatch(Increments)}>
                    Increment
                </button>
                
                <button disabled={state.count===0} onClick={() => dispatch(Decrements)}>
                    Decrement
                </button>

                <button onClick={()=>dispatch(Reset)}>
                    Reset
                </button>

                {/* btn update by val */}
                <button onClick={()=>dispatch(incrementByValue(data ? data : 5))}>
                    Increment By Value
                </button>
                
                <button disabled={state.count===0} onClick={() => dispatch(decrementByValue(data ? data : 5))}>
                    Decrement By Value
                </button>
            </div>
        </>
    )
}

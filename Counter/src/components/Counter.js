import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from 'react-bootstrap/Button';
import { DECREMENT, INCREMENT } from "../redux/actions/types";


function Counter()  {
    const countState = useSelector(state => state.count)
    // const {count} = useSelector(state => state)

    const dispatch = useDispatch();
    
    const handleIncrement = () => {
        dispatch({
            type : INCREMENT
            
        });
    }

    const handleDecrement = () => {
        dispatch({
            type : DECREMENT
            
        });
    }


    return(
        <>
            <h1> {countState} </h1>
        <div>
            <Button variant="primary" onClick={handleIncrement}> INCREMENT </Button>{' '}
        </div>
        <div>                                       
            <Button variant="danger" onClick={handleDecrement}> DECREMENT </Button>{' '}
        </div>

        </>
    )
}

export default Counter ;
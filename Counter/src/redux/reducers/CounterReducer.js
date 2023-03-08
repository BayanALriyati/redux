import {INCREMENT , DECREMENT} from '../actions/types' ;

const CounterReducer = (state = {count : 5 } , action) => {
    if (action.type === INCREMENT){
        return {...state,count: state.count + 1 };
    }

    if (action.type === DECREMENT){
        return {...state,count: state.count - 1 };
    }
   return state ;
}

export default CounterReducer ;
import * as consts from '../Constants';
const initState = {
    
}

const testReducer = (state=initState, action) =>{
    switch(action.type){
        case consts.SOME_DATA:
            return{
                ...state,
                someDataVar:action.payload
            }
        default:
            return state
    }
}

export default testReducer;
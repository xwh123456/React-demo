import {SET_FILETER} from '../actions/actionType'

const fileter=(state='All',action)=>{
    switch (action.type) {
        case SET_FILETER:
            return action.fileter
            
            default:
                return state







} 


}
export default fileter;
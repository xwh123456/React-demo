import {ADD_TEXT} from '../actions/actionType'

const text=(state='',action)=>{
    switch (action.type) {
        case ADD_TEXT:
            return action.text
            
            default:
                return state







} 


}
export default text;
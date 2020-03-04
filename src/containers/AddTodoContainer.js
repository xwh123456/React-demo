import { connect } from "react-redux";
import AddToDo from "../components/AddToDo";
import {addtext,addTodo} from '../actions'

const mapStateToProps=state=>({
text:state.text

})

const mapdispachToProps=dispatch=>(
{
    addtext: text=> dispatch(addtext(text)),

    addTodo: text=>dispatch(addTodo(text)),

}

)
export default connect(mapStateToProps,mapdispachToProps)(AddToDo)
import { connect } from "react-redux";
import Footer from "../components/Footer";
import {setvisibilityFileter} from '../actions'


const mapStateToProps=(state)=>({
    fileter:state.fileter

})

const mapDispatchToProps=(Dispatch)=>({
    setvisibilityFileter:fileter=> Dispatch(setvisibilityFileter(fileter))

})
export default connect(mapStateToProps,mapDispatchToProps)(Footer)
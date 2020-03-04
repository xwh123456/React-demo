import React, { Component } from 'react'

export default class Footer extends Component {


    render() {
        const {fileter,setvisibilityFileter}=this.props;
        return (
            <div>

              <button onClick={()=>{
setvisibilityFileter("All")

              }} disabled={fileter==="All"}>All</button>


              <button onClick={()=>{
setvisibilityFileter("Active")

              }}  disabled={fileter==="Active"}>Active</button>

              <button onClick={()=>{
setvisibilityFileter("Completed")

              }}  disabled={fileter==="Completed"}>Completed</button>


            </div>
        )
    }
}

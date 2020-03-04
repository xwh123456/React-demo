import React, { Component } from 'react'

export default class ToDo extends Component {


    render() {
const {text,complted,modifytodo,id}=this.props;


        return (
           <li onClick={()=>{
            modifytodo(id)

           }} style={{ 
               textDecoration: complted ? "line-through":  "none"  
               }}>

        {text}

           </li>
        )
    }
}

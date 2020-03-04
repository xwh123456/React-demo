import {createStore} from 'redux'
import rootReducer from './reducers'
import  {addTodo,modifytodo,addtext,setvisibilityFileter} from  './actions'


const store=createStore(rootReducer)

//输出初始的state


//订阅state的变化
const unsubscribe=store.subscribe(()=>{


})

store.dispatch(addTodo("react学习"))
store.dispatch(modifytodo(0))
store.dispatch(addtext("好好学习"))
store.dispatch(setvisibilityFileter("active"))


unsubscribe()
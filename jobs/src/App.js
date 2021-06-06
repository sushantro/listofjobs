import React from "react"
import { useSelector,useDispatch} from "react-redux"
import {incNumber,decNumber} from "./actions/index"



const App=()=>{
  const myState=useSelector((state)=>state.change)
  const dispatch=useDispatch()
  return (
    
    <>
    <div className="container">
      <h1>Increment</h1>
      <h4>react</h4>
      <div className="quantity">
        <a className="quanity__minus" title="Decrement"onClick={()=>dispatch(decNumber())}><span>-</span></a>
        <input name="quantity" type="text" className="qnty" value={myState}/>
        <a className="quanity__minus" title="Decrement" onClick={()=>dispatch(incNumber())}><span>+</span></a>
      </div>
    </div>



    



    
  
    </>

  )
  
}

export default App;






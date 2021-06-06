const init=10;
const change=(state=init,action)=>{
    switch (action.type) {
        case "Increment":return state+1;
        case "Decrement":return state-1; 
          
        default:return state;
        
            break;
    }

}
export default change;
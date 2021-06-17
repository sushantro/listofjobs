import logo from './logo.svg';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
// import  About  from "./About"
import Contact from "./Contact";
import Error from './Error';
import {BrowserRouter,Switch,Route, Redirect} from "react-router-dom";
import Navigation from './Navigation';
// import Home from './Home';
import FormDialog from "./Modal";
import Login1 from "./Login1"
import Accordion from "./Accordion"

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
// import  About  from "./About"
import Contact from "./Contact";
import Error from './Error';
import {BrowserRouter,Switch,Route, Redirect} from "react-router-dom";
import Navigation from './Navigation';
// import Home from './Home';
import FormDialog from "./Modal";
import Login from "./Login3"
import Accordion from "./Accordion"
import Prt from "./Prt"
import  About1  from "./About1"
import Cards from './cards';



 




function App() {
  return (
    <>
    
    <BrowserRouter>
    <Navigation/>
    <Switch>
       {/* <Provider store={store}>  */}
     <Route exact path="/" component={Prt}/>
      <Route exact path="/About" component={About1}/>
      <Route exact  path="/card" component={Cards}/>
      <Route exact  path="/login3" component={Login}/>
      <Route exact  path="/contact" component={Contact}/>
      <Route exact  path="/help" component={Accordion}/>
     
      <Route component={Error}/>
      <Route component={FormDialog}/>
      <Redirect to="/"/>
       {/* </Provider>  */}

    </Switch>
    
    </BrowserRouter>
   
    

    
    </>
    
    
  );
}

export default App;

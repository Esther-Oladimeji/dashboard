import {BrowserRouter, Switch,  Route} from "react-router-dom"

import "./App.css"
import Sidebar from './components/Sidebar'
import Home from "./pages/Home"
import Customers from './pages/Customers'
import Calender from "./pages/Calender"

const App = () => {
    return (
        <BrowserRouter>
           
            <div className="container">
                <Sidebar/>
                <Switch>
                    <Route exact path="/"><Home/></Route>
                    <Route path="/customers"><Customers/></Route>
                    <Route path="/calender"><Calender/></Route>
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default App
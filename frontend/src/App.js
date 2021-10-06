import { Route, Switch } from "react-router-dom";
import appEvent from "./appEvent";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Redirector from "./pages/login/Redirector";
import TodoList from "./pages/todoList/TodoList";
import Error403 from "./pages/err/Error403";

const App = () => {
    return(
    <Switch>
        <Route exact path="/">
            <Home/>
        </Route>
        <Route path="/calendars/:id/days/:id">
            <TodoList/>
        </Route>
        <Route path="/login">
            <Login/>
        </Route>
        <Route path="/auth/kakao">
            <Redirector/>
        </Route>
        <Route path="/*">
            <Error403/>
        </Route>
    </Switch>
    )
}
export default appEvent(App);
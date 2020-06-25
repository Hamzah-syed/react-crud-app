import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { UserGlobalProvider } from "./globalContext/GlobalUserContext";
import "./css/tailwind.css";
import "./css/App.css";

//pages
import UsersList from "./components/UserList";
import AddUser from "./components/UserAdd";
import EditUser from "./components/UserEdit";

function App() {
  return (
    <div>
      <UserGlobalProvider>
        <Router>
          <Switch>
            <Route path="/" component={UsersList} exact />
            <Route path="/adduser" component={AddUser} exact />
            <Route path="/edituser/:id" component={EditUser} exact />
          </Switch>
        </Router>
      </UserGlobalProvider>
    </div>
  );
}

export default App;

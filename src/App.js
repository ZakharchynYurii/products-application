import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import AddProduct from "./components/add-product/AddProduct";
import EditProduct from "./components/edit-product/EditProduct";
import NotFound from "./components/not-found/NotFound";
import DetailProduct from "./components/detail-product/DetailProduct";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path={"/"}>
            <Dashboard/>
          </Route>
          <Route exact path={"/add-product"}>
            <AddProduct/>
          </Route>
          <Route exact path={"/edit-product/:id"}>
            <EditProduct/>
          </Route>
          <Route exact path={"/detail-product/:id"}>
            <DetailProduct />
          </Route>
          <Route>
            <NotFound/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

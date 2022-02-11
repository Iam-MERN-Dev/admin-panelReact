import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css"
import Home from "./components/pages/home/Home";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import UserList from "./components/pages/userList/UserList";
import UserPage from "./components/pages/user/UserPage";
import NewUser from "./components/pages/newuser/NewUser";
import Product from "./components/pages/product/Product";
import ProductList from "./components/pages/productList/ProductList";
import NewProduct from "./components/pages/newProduct/NewProduct";



function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Topbar /> 
      <div className="container">
        <Sidebar />
        <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/users" element={<UserList/>}></Route>
        <Route  path="/user/:userId" element={<UserPage/>}></Route>
        <Route  path="/newUser" element={<NewUser/>}></Route>
        <Route exact path="/products" element={<ProductList/>}></Route>
        <Route  path="/product/:productId" element={<Product/>}></Route>
        <Route  path="/newProduct" element={<NewProduct/>}></Route>
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;

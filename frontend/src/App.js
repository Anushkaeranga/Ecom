import './App.css';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';
function App() {
  const openMenu = ()=>{
    document.querySelector(".sidebar").classList.add("open"); 
  }
  const closeMenu = ()=>{
    document.querySelector(".sidebar").classList.remove("open"); 
  }
  return (
<BrowserRouter>
  <div className="grid-container">
    <header className="header">
        <div className="brand">
            <button onClick={openMenu}> &#9776;</button>
            <Link to ='/'>Choices</Link>
        </div>
        <div className="header-links"> 
            <a href="cart.html">Cart</a>
            <a href="signin.html">SignIn</a>
        </div>
    </header>
    <aside className="sidebar">
        <h4>shopping chategories</h4>
        <button className="sidebar-close-button" onClick={closeMenu}>x</button>
        <ul>
            <li>
                <a href="index.html">slippers</a>
            </li>
            <li>
                <a href="index.html">shoes</a>
            </li>
            <li>
                <a href="index.html">sports items</a>
            </li>
        </ul>
    </aside>
    <main className="main">
        <div className="content">
        <Route path="/" exact={true} component={HomeScreen}/>
        <Route path="/product/:id" component={ProductScreen}/>

        </div>
    </main>
    <footer className="footer">All rights reserved</footer>  
  </div>    
</BrowserRouter>
  );
}

export default App;

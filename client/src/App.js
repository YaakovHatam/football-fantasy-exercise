import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Teams from "./components/Teams";
import './App.css';

function App() {
    return (

        <BrowserRouter>
            <div className="nav-menu">
                <nav>
                    <Link to="/">Home</Link>| {" "}
                    <Link to="login">Login</Link>| {" "}
                    <Link to="teams">Teams</Link>
                </nav>
            </div>
            <hr />
            <Routes>
                <Route path="/" index element={<Home />} />
                <Route path="login" element={<Login />} />
                <Route path="teams" element={<Teams />} />
            </Routes>
        </BrowserRouter>

    );
}

export default App;

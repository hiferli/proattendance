import "./App.css";
import Login from "./Components/Login";
// import Home from "./Pages/Employee/Home";
import Home from "./Pages/Admin/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PrivateRoute from "./Pages/PrivateRoute";

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route
                        path="/home"
                        element={
                            <PrivateRoute
                                element={<Home name={"Ishaan"} id={677420} />}
                            />
                        }
                    />
                </Routes>
            </Router>
        </div>
    );
}

export default App;

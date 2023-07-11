import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Errorpage from "./Components/Errorpage";
import { createContext, useEffect, useReducer } from "react";
import { initialState, reducer } from "./reducer/UseReducer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const UserContext = createContext();

function App() {
  const notificationHandler = (message) => {
    toast[message.status](message.text, {
      position: message.position,
    });
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <UserContext.Provider value={{ state, dispatch }}>
        <Router>
          <Navbar notify={notificationHandler} />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/About" element={<About />} />
            <Route
              exact
              path="/Contact"
              element={<Contact notify={notificationHandler} />}
            />
            <Route
              exact
              path="/Login"
              element={<Login notify={notificationHandler} />}
            />
            <Route
              exact
              path="/Signup"
              element={<Signup notify={notificationHandler} />}
            />
            <Route exact path="*" element={<Errorpage />} />
          </Routes>
          <ToastContainer />
        </Router>
      </UserContext.Provider>
    </>
  );
}

export default App;

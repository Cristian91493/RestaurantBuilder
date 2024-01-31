import axios from "axios";

import { useState, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import Reservation from "./pages/Reservation";
import seeReservations from "./pages/seeReservations";
import Aboutus from "./pages/aboutus";
import Menu from "./pages/menu";


import "./App.css";

function App() {
  const [user, setUser] = useState({});
  // we need time to check if token is loaded in to state, not just localStorage
  const [loading, setLoading] = useState(true);

  // grab user from database with token as ID
  async function getUser(token) {
    try {
      const response = await axios.get("/api/users", {
        headers: {
          Authorization: token,
        },
      });
      setUser(response.data);
    } catch (err) {
      console.log(err);
      localStorage.removeItem("token");
    }
    setLoading(false);
  }

  useEffect(() => {
    // look for token in localstorage if we are logged in.
    const token = localStorage.getItem("token");
    if (token) {
      // get user info, which is just token : asdfasdf right now in localstorage
      getUser(token);
    } else {
      setLoading(false);
    }
  }, []);

  let loggedIn = user.username;
  return (
    <div className="app">
      <Navbar username={user.username} setUser={setUser} />
      <Routes>
        <Route path="/" element={<Home />} />
        {loggedIn ? (
          <>
            {/* if logged in */}
            <Route path="/profile" element={<Profile username={user.username} email={user.email} />} />
            {/* this will actually render for a sec, then redirect. Fixed to cond. load if we are not loading  */}
            {!loading && <Route path="/login" element={<Navigate to="/" />} />}
          </>
        ) : (
          <>
            {/* if not logged in */}
            <Route path="/login" element={<Login setUser={setUser} />} />
            <Route path="/register" element={<Register setUser={setUser} />} />
            <Route path="/reservation" element={<Reservation/>}/>
            {/* wild card * meaning anything thats not above, get this element = Navigate is like a redirect, not link  */}
            {/* can be path=* or path=/profile  one excludes all others not name, the other is just /profile locked down */}

            {!loading && (
              <Route path="/profile" element={<Navigate to="/login" />} />
            )}
          </>
        )}
      </Routes>
    </div>
  );
}

export default App;
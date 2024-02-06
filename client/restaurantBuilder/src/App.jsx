import axios from "axios";

import { useState, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import Reservation from "./pages/Reservation";
import ReservationSuccess from "./pages/ReservationSuccess";
import SeeReservations from "./pages/SeeReservations";
import Aboutus from "./pages/Aboutus";
import Menu from "./pages/Menu";
import "./App.css";
import baseURL from '/Api'

function App() {

  const [user, setUser] = useState({});
  const [reservations, setReservations] = useState({});
  const [seeReservations, setSeeReservations] = useState({});

  // we need time to check if token is loaded in to state, not just localStorage
  const [loading, setLoading] = useState(true);

  // grab user from database with token as ID
  async function getUser(token) {
    try {
      const response = await axios.get("https://restaurantbuilder-css.onrender.com"+"/api/users", {

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


    // grab reservations from database

    useEffect(()=>{
    async function getReservations(){
      try {
        const response = await axios.get("https://restaurantbuilder-css.onrender.com"+"/api/seereservations/seeReservations")
        
        setSeeReservations(response.data);
        // console.log("line64",seeReservations)
      } catch(err) {
        console.log(err);
      }
    } 
   getReservations()
  
  }, [])

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
            <Route path="/seereservations" element={<SeeReservations reservations = {seeReservations} />} />
          </>
        ) : (
          <>
            {/* if not logged in */}
            <Route path="/reservations" element={<Reservation setReservations={setReservations}/>}/>
            <Route path="/reservationsuccess" element={<ReservationSuccess/>} />
            <Route path="/aboutus" element={<Aboutus/>} />
            <Route path="/menu" element={<Menu/>} />
            <Route path="/login" element={<Login setUser={setUser} />} />
            <Route path="/register" element={<Register setUser={setUser} />} />
       
            {/* <Route path="/reservationsucess" element={<ReservationSucces />}/> */}
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

  





































  // useEffect(()=>{
  
  //   const test = async () => {
  //     try {
  //       const response = await axios.get('/api/test')
  //       console.log(response)
  //     } catch (error) {
  //       console.log(error)
  //     }
  
  //   }
  //   test()
  //   setTest(response.data)
  // },[])



    // grab reservations from database
    // async function getReservations(){
    //   try {
    //     const response = await axios.get("/api/reservations")
    //     setSeeReservations(response.data);
    //     console.log(seeReservations)
    //   } catch(err) {
    //     console.log(err);
    //   }
    // } 
  
  
    
  //   useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       // OPTION 1: use fetch for "index" route
  //       // const response = await fetch('/api/todos')
  //       // const data = await response.json()
  
  //       // OPTION 2: use axios
  //       const response = await axios.get('/api/reservations/reservations')
  //       console.log(response)
  //       setSeeReservations(response.data)
  //     } catch(err) {
  //       console.error(err)
  //     }
  //   }
  
  //   getData()
  
  // }, [])
  
  // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  // const SeeReservations = () => {
    
  
  //   // Define the async function inside the component
  //   const getReservations = async () => {
  //     try {
  //       const response = await axios.get("/api/seeReservations");
  //       setSeeReservations(response.data);
  //     } catch (error) {
  //       console.error("Error fetching reservations:", error);
  //     }
  //   };
  
  //    // Use the useEffect hook to call the async function
  //    useEffect(() => {
  //     getReservations();
  //   }, []); // Empty dependency array means this effect runs once when the component mounts
  
  // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  
  // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  
    // async function addReservations() {
    //   try {
  
    //     let reservation = {
    //       text: input
    //     };
  
    //     // OPTION 2: use axios
  
    //     const response = await axios.post('/api/reservations/reservations', reservations)
    //     const navigate = useNavigate();
  
    //     setReservations([...reservations, response.data]);
    //     setInput("");
    //     Navigate('/reservationsuccess')
  
    //   } catch(err) {
    //     console.log(err)
    //   }
    // }
  
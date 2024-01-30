import { Link } from "react-router-dom";
// import icon from '../assets/react.svg'

function Navbar({ username, setUser }) {

  const logout = () => {
    // remove token from local storage and state
    localStorage.removeItem('token')
    setUser({})
    // redirect to home
  };

  return (
    <ul>
      <li>
        <Link to="/">
          {/* <img src={icon} alt="React Icon" id="icon" /> */}
        </Link>
      </li>
      {username ? 
        <>
          <li style={{ color: "black" }}>Welcome {username}!</li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li onClick={logout}>
            <Link to="/login">Logout</Link>
          </li>
          <li>
            <Link to="/seeReservations">See Reservations</Link>
          </li>
        </>
       : 
        <>
          <li>
            <Link to="/reservations">Reservations</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/aboutus">About Us</Link>
          </li>



        </>
      }
    </ul>
  );
}

export default Navbar;
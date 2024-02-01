import { Link } from "react-router-dom";
import icon from '../assets/logoPic/logo.jpg'

function Navbar({ username, setUser }) {

  const logout = () => {
    // remove token from local storage and state
    localStorage.removeItem('token')
    setUser({})
    // redirect to home
  };

  return (
    <nav className="nav-bar">
      <ul>
        <li>
          <Link to="/">
            <img src={icon} alt="React Icon" id="icon" />
          </Link>
        </li>
        {username ? (
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
        ) : (
          <>
            <Link to="/reservations">
              <li className="nav-li">Reservations</li>
            </Link>

            <Link to="/menu">
              <li className="nav-li">Menu</li>
            </Link>

            <Link to="/aboutus">
              <li className="nav-li">About Us</li>
            </Link>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="App">
      <div className="home-bg">
        <div className="stacked-container">
          <p className="res-name">CELESTE</p>
          <div className="button-container">
  <Link to="/reservations">
            <button className="home-res">Reserve</button>
  </Link>
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

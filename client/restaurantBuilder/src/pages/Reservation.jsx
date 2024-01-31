import axios from "axios";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

let emptyForm = {
  firstName: "",
  lastName: "",
  date:"",
  time:"",
  phoneNum:"",
  email: "",
};

function Reservation({ setReservations }) {
  const navigate = useNavigate();

  let [form, setForm] = useState(emptyForm);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log(form)
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data:", form);
    try {
      
      // Fetch a post request (path, data)
      const response = await axios.post("/api/reservations/reservations", form);
      
      console.log(response)

      // Update reservations state if setReservations is defined
      if (setReservations) {
        setReservations(reservationsResponse.data);      
      }

      // Redirect to reservationsuccess page
      navigate("/reservationsuccess");
    } catch (err) {
      console.log(err.response.data.error);
      alert(err.response.data.error);
    }
  };
  



  return (
    <>
      <h1>Reservations</h1>
      <form
        onSubmit={handleSubmit}
        // what this is creating from input's names:
        // {username: 'asd', password: 'pas123', email: 'bob@gmail.com'}
      >
        <label htmlFor="firstName">First Name:</label>
        <br />
        <input
          type="text"
          id="firstName"
          name="firstName"
          onChange={handleChange}
          value={form.firstName}
        />
        <br />
        <br />
        <label htmlFor="lastName">Last Name:</label>
        <br />
        <input
          type="text"
          id="lastName"
          name="lastName"
          onChange={handleChange}
          value={form.lastName}
        />
           <br />
        <label htmlFor="date">Date:</label>
        <br />
        <input
          type="text"
          id="date"
          name="date"
          onChange={handleChange}
          value={form.date}
        />
           <br />
        <label htmlFor="time">Time:</label>
        <br />
        <input
          type="text"
          id="time"
          name="time"
          onChange={handleChange}
          value={form.time}
        />
        <br />
        <br />
        <label htmlFor="phoneNum">Phone Number:</label>
        <br />
        <input
          type="text"
          id="phoneNum"
          name="phoneNum"
          onChange={handleChange}
          value={form.phoneNum}
        />
        <br />
        <br />
        <label htmlFor="email">Email:</label>
        <br />
        <input
          type="email"
          id="email"
          name="email"
          onChange={handleChange}
          value={form.email}
        />
        <br />
        <br />
        <button>Submit</button>
      </form>
    </>
  );
}

export default Reservation;
    // this is where we start getting data back from server
    // const handleSubmit = async (e) => {
    //   e.preventDefault();
    //   console.log("Form Data:", form);
    //   try {
    //     // vite.config has proxy already setup
    //     // fetch a post request(path, data)
    //     console.log(form); // {username: 'Bob', password: 'pas123', email: 'bob@gmail.com'}
    //     const response = await axios.post("/api/reservations/reservations", form);
    //     // axios formats the response to json already for us
    //     // data.token should give us the token string, encrypted
    //     const token = response.data.token;
    //     // console.log(token);
    //     // if we don't have any tokens, reset the form
    //     if (!token) {
    //       setForm(emptyForm);
    //       return;
    //     }
  
    //     // if we do get a token, we want to store it to persist user authorization
    //     // localStorage set (key, value(make sure its a string))
    //     localStorage.setItem("token", token);
  
    //     // redirect to profile page
    //     // we can only get to that route if we have a token and we do
    //     // vite.config has the proxy before
    //     // as long as we send the token with this, we don't need a req.boy/param to query a specific user
    //     // we can't get to this route without the middleware, which is why we need the header to check for a token
    //     const reservationsResponse = await axios.get("/api/reservations", {
    //       headers: { Authorization: token },
    //     });
  
    //     if(setReservations){
    //       setReservations(reservationsResponse.data);
    //     }
    //     navigate("/reservationsuccess");
    //   } catch (err) {
    //     console.log(err.response.data.error);
    //     alert(err.response.data.error);
    //   }
    // };
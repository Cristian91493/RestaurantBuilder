import axios from "axios";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import baseURL from "../../../Api";

let emptyForm = {
  username: "",
  password: "",
  email: "",
};

function Register({ setUser }) {
  const navigate = useNavigate();

  let [form, setForm] = useState(emptyForm);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // this is where we start getting data back from server
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // vite.config has proxy already setup
      // fetch a post request(path, data)
      console.log(form); // {username: 'Bob', password: 'pas123', email: 'bob@gmail.com'}
      const response = await axios.post("https://restaurantbuilder-css.onrender.com"+"/auth/register", form);
      
      // axios formats the response to json already for us
      // data.token should give us the token string, encrypted
      const token = response.data.token;
      console.log(token);
      // if we don't have any tokens, reset the form
      if (!token) {
        setForm(emptyForm);
        return;
      }

      // if we do get a token, we want to store it to persist user authorization
      // localStorage set (key, value(make sure its a string))
      localStorage.setItem("token", token);

      // redirect to profile page
      // we can only get to that route if we have a token and we do
      // vite.config has the proxy before
      // as long as we send the token with this, we don't need a req.boy/param to query a specific user
      // we can't get to this route without the middleware, which is why we need the header to check for a token
      const userResponse = await axios.get(baseURL+"/api/users", {
        headers: { Authorization: token },
      });
      setUser(userResponse.data);
      navigate("/profile");
    } catch (err) {
      console.log(err.response.data.error);
      alert(err.response.data.error);
    }
  };

  return (
    <>
      <h1>Register</h1>
      <form
        onSubmit={handleSubmit}
        // what this is creating from input's names:
        // {username: 'asd', password: 'pas123', email: 'bob@gmail.com'}
      >
        <label htmlFor="username">Username:</label>
        <br />
        <input
          type="text"
          id="username"
          name="username"
          onChange={handleChange}
          value={form.username}
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
        <label htmlFor="password">Password:</label>
        <br />
        <input
          type="password"
          id="password"
          name="password"
          onChange={handleChange}
          value={form.password}
        />
        <br />
        <br />
        <button>Submit</button>
      </form>
    </>
  );
}

export default Register;
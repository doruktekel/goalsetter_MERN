import React, { useState } from "react";
import { FaSignInAlt } from "react-icons/fa";

const Register = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <section className="heading">
        <h1>
          <FaSignInAlt />
        </h1>
        <p>Please Login</p>
      </section>
      <section className="form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Please enter your email"
              value={email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter password"
              value={password}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <button type="submit" className="btn btn-block">
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Register;

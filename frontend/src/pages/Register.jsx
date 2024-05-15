import React, { useState } from "react";
import { FaUser } from "react-icons/fa";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

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
          <FaUser />
        </h1>
        <p>Please Create An Account</p>
      </section>
      <section className="form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Please enter your name"
              value={name}
              onChange={handleChange}
            />
          </div>
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
            <input
              type="password"
              name="password2"
              id="password2"
              placeholder="Confirm password"
              value={password2}
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

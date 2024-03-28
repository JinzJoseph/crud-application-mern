import React, { useState } from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom'
const CreateUser = () => {
  const navigate=useNavigate()
  const [name, SetName] = useState();
  const [email, SetEmail] = useState();
  const [age, SetAge] = useState();
  const submit = (e) => {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:3001/createUser", {
        name,
        email,
        age,
      })
      .then((result) =>
      {
        console.log(result)
        navigate('/')
      }
      )
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form>
          <h2>Add User</h2>
          <div className="mb-2">
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter the Name"
              className="form-control"
              onChange={(e) => SetName(e.target.value)}
            ></input>
          </div>
          <div className="mb-2">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter the email"
              className="form-control"
              onChange={(e) => SetEmail(e.target.value)}
            ></input>
          </div>
          <div className="mb-2">
            <label>Age</label>
            <input
              type="text"
              placeholder="Enter the Age"
              className="form-control"
              onChange={(e) => SetAge(e.target.value)}
            ></input>
            <button className="btn btn-success mt-3" onClick={submit}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateUser;

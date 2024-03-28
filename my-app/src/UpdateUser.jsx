import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";
import { useNavigate } from "react-router-dom";
const UpdateUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, SetName] = useState();
  const [email, SetEmail] = useState();
  const [age, SetAge] = useState();

  useEffect(() => {
    axios
      .get("http://127.0.0.1:3001/getUser/" +id)
      .then((result) =>{
        // console.log(result)
        SetName(result.data.name)
        SetEmail(result.data.email)
        SetAge(result.data.age)

      })
      .catch((err) => console.log(err));
  }, [id]);

  const submit = (e) => {
    e.preventDefault();
    axios
      .put("http://127.0.0.1:3001/updateUser/" + id, {  // Corrected URL by adding a slash before id
        name,
        email,
        age,
      })
      .then((result) => {
        console.log("updated user", result);
        navigate('/');
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form >
          <h2>Update User</h2>
          <div className="mb-2">
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter the Name"
              className="form-control"
              value={name}
              onChange={(e) => SetName(e.target.value)}
            ></input>
          </div>
          <div className="mb-2">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter the email"
              className="form-control"
              value={email}
              onChange={(e) => SetEmail(e.target.value)}
            ></input>
          </div>
          <div className="mb-2">
            <label>Age</label>
            <input
              type="text"
              placeholder="Enter the Age"
              className="form-control"
              value={age}
              onChange={(e) => SetAge(e.target.value)}
            ></input>
            <button name="update" onClick={submit} className="btn btn-success mt-3">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateUser;

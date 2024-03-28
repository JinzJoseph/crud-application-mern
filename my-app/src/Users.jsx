import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Users = () => {
  const [users, setUser] = useState([
    {
      Name: "sebs",
      Email: "jk@fmail.com",
      Age: "23",
    },
  ]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:3001/")
      .then((result) => setUser(result.data))
      .catch((err) => console.log(err));
  }, []);
  const handleDelete = (id) => {
    axios
      .delete("http://127.0.0.1:3001/delete/"+id)
      .then(res => {
          console.log(res)
        window.location.reload()
      })
      .catch(err => console.log(err));
  };
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <Link className="btn btn-success" to="/create">
          Add +
        </Link>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <tr key={user._id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.age}</td>
                  <td>
                    <Link className="btn btn-primary" to={`update/${user._id}`}>
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(user._id)}
                      className="btn btn-danger m-auto ms-3"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;

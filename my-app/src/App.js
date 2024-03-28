import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Fixed the import statement
import CreateUser from "./CreateUser";
import UpdateUser from "./UpdateUser";
import Users from "./Users";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/create" element={<CreateUser />} />
          <Route path="/update/:id" element={<UpdateUser />} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

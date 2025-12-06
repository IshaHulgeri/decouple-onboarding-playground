import { useState } from "react";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import "./App.css";

function App() {
  const [reload, setReload] = useState(false);

  // Function to toggle reload
  function refreshUsers() {
    setReload(!reload);
  }

  return (
    <div className="container">
      <h1 className="title">Decouple Live – Onboarding Dashboard</h1>

      <div className="card">
        <UserForm title="Add New User" onUserAdded={refreshUsers} />
      </div>

      <div className="card">
        <UserList title="Registered Users" reload={reload} />
      </div>
    </div>
  );
}

export default App;

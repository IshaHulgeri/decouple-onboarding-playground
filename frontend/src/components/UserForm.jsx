import { useState } from "react";

function UserForm({ title, onUserAdded }) {
  const [user, setUser] = useState({
    name: "",
    email: "",
    role: "",
  });

  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      // POST request to backend
      const res = await fetch("http://localhost:4000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });

      if (res.ok) {
        alert("User submitted!");
        setUser({ name: "", email: "", role: "" }); // reset form
        onUserAdded(); // notify parent to refresh users
      } else {
        const errorData = await res.json();
        alert("Error: " + errorData.error);
      }
    } catch (err) {
      alert("Network error: " + err.message);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>{title}</h2>

      <input
        name="name"
        placeholder="Name"
        value={user.name}
        onChange={handleChange}
      />
      <br /><br />

      <input
        name="email"
        placeholder="Email"
        value={user.email}
        onChange={handleChange}
      />
      <br /><br />

      <input
        name="role"
        placeholder="Role"
        value={user.role}
        onChange={handleChange}
      />
      <br /><br />

      <button type="submit">Submit</button>
    </form>
  );
}

export default UserForm;

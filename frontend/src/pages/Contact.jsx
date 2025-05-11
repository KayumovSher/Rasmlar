import { useEffect, useState } from "react";

function Contact() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/users/')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  return (
    <div className="p-5">
      <h2 className="text-3xl font-bold mb-4">Contact Users</h2>
      <ul>
        {users.map((users) => (
          <li key={users.id} className="mb-4">
            <h3 className="text-xl font-semibold">{users.name}</h3>
            <p>id: {users.id}</p>
            <p>Name: {users.name}</p>
            <p>Mail: {users.email}</p>
          </li>
        ))}
      </ul>
    </div>

  );
}

export default Contact;

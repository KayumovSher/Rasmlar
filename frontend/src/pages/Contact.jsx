import { useEffect, useState } from "react";
import BlobBackground from "../components/BlobBackground";

function Contact() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/users/")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching users:", error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="relative isolate px-16 pt-34 min-h-screen">
      <BlobBackground position="top" />
      <BlobBackground position="bottom" />

      <h2 className="text-3xl font-bold text-center mb-8 text-black">Biz haqimizda</h2>

      {loading ? (
        <div className="text-center text-indigo-500 font-medium">Loading...</div>
      ) : users.length === 0 ? (
        <div className="text-center text-gray-500">No users found.</div>
      ) : (
        <ul className="grid md:grid-cols-2 gap-6">
          {users.map((user) => (
            <li key={user.id} className="bg-white p-4 rounded shadow-md">
              <h3 className="text-xl font-semibold text-[#646cff]">{user.name}</h3>
              <p className="text-gray-500">ID: {user.id}</p>
              <p className="text-gray-500">Email: {user.email}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Contact;

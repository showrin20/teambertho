import { useEffect, useState } from "react";
import axios from "../utils/axiosInstance";
import { useNavigate } from "react-router-dom";
import { User } from "../types/User";

export default function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [email, setEmail] = useState<string>("");
  const [editing, setEditing] = useState<boolean>(false);

  useEffect(() => {
    // Define the async function inside the effect
    const fetchUserData = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        return navigate("/signin");
      }

      try {
        const res = await axios.get("/user/me", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(res.data);
        setEmail(res.data.email);
      } catch (error) {
        navigate("/signin");
      }
    };

    // Call the async function
    fetchUserData();

    // Optional: cleanup function (if needed)
    return () => {
      // Cleanup logic here (if any)
    };
  }, [navigate]);

  const updateProfile = async () => {
    const token = localStorage.getItem("token");
    const res = await axios.put(
      "/user/me",
      { email },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    setUser(res.data);
    setEditing(false);
  };

  const deleteAccount = async () => {
    const token = localStorage.getItem("token");
    if (confirm("Delete your account?")) {
      await axios.delete("/user/me", {
        headers: { Authorization: `Bearer ${token}` },
      });
      localStorage.clear();
      navigate("/signup");
    }
  };

  if (!user) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow-md">
      <h1 className="text-2xl font-bold mb-4">User Profile</h1>

      {editing ? (
        <>
          <input
            className="w-full border p-2 mb-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={updateProfile} className="bg-green-500 text-white px-4 py-2 mr-2 rounded">
            Save
          </button>
          <button onClick={() => setEditing(false)} className="bg-gray-500 text-white px-4 py-2 rounded">
            Cancel
          </button>
        </>
      ) : (
        <>
          <p className="mb-2"><strong>Email:</strong> {user.email}</p>
          <p className="mb-4"><strong>Role:</strong> {user.role}</p>
          <button onClick={() => setEditing(true)} className="bg-blue-500 text-white px-4 py-2 mr-2 rounded">
            Edit
          </button>
          <button onClick={deleteAccount} className="bg-red-500 text-white px-4 py-2 rounded">
            Delete
          </button>
        </>
      )}
    </div>
  );
}

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { Outlet } from 'react-router-dom'; // import Outlet

export default function Dashboard() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/signin');
    } else {
      try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        setEmail(payload.email);
      } catch (err) {
        console.error('Invalid token', err);
        navigate('/signin');
      }
    }
  }, [navigate]);

  return (
    <div className="flex min-h-screen bg-gray-100 text-gray-900">
      <Sidebar />
      <main className="flex-1 p-10 bg-white shadow-inner m-4 rounded">

        {/* Render child route content */}
        <Outlet />
      </main>
    </div>
  );
}
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const [email, setEmail] = useState<string>('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      // If no token, redirect to the signin page using React Router's navigate
      navigate('/signin');
    } else {
      // Parse JWT token payload (make sure it's valid)
      const payload = JSON.parse(atob(token.split('.')[1]));
      setEmail(payload.email);  // Set email from JWT payload
    }
  }, [navigate]);

  return (
    <div className="p-10">
      <h1 className="text-3xl">Welcome, {email} 🎉</h1>
    </div>
  );
}

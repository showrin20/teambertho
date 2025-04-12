import { NavLink } from 'react-router-dom';

export default function Sidebar() {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `block px-4 py-2 rounded hover:bg-gray-700 transition-all ${
      isActive ? 'bg-gray-700 text-yellow-300' : 'text-white'
    }`;

  return (
    <aside className="w-64 bg-gray-800 text-white min-h-screen p-4 flex flex-col">
      {/* Logo Section */}
      <div className="mb-6 text-center mt-10">
        <img
          src="/images.png"
          alt="Logo"
          className="w-24 h-24 mx-auto mb-2" // ⛔ removed rounded-full
        />
      </div>

      {/* Nav Links */}
      <nav className="space-y-2 mt-30">
        <h2 className="text-xl font-bold">Admin Dashboard</h2>
        <NavLink to="/dashboard" className={linkClass}>🏠 Dashboard</NavLink>
        <NavLink to="/dashboard/users" className={linkClass}>👥 Users</NavLink>
        <NavLink to="/dashboard/blogs" className={linkClass}>📝 Blogs</NavLink>
        <NavLink to="/signup" className={linkClass}>🛡️ Admin Signup</NavLink>
      </nav>
    </aside>
  );
}

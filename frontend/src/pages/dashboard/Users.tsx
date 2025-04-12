// frontend/src/pages/dashboard/Users.tsx

export default function Users() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-semibold mb-6">User Management 👥</h1>

        {/* Placeholder for CRUD actions */}
        <div className="bg-white p-6 rounded shadow">
          <p className="text-gray-600">CRUD logic for users will go here.</p>
          <ul className="list-disc pl-6 mt-4 text-sm text-gray-700">
            <li>Fetch all users</li>
            <li>Create a new user</li>
            <li>Update user info</li>
            <li>Delete user</li>
          </ul>
        </div>
      </main>
    </div>
  );
}

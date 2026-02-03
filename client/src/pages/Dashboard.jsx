import { useAuth } from "../auth/AuthContext";

export default function Dashboard() {
  const { user, loading } = useAuth();

  if (loading) {
    return <p>Loading user...</p>;
  }

  return (
    <div>
      <h1>Dashboard</h1>

      {user ? (
        <>
          <p>Welcome, {user.name}</p>
          <p>Email: {user.email}</p>
        </>
      ) : (
        <p>User not logged in</p>
      )}
    </div>
  );
}

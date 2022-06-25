import useAuth from "@/lib/hooks/useAuth";

export default function Dashboard() {
  const [user, loading] = useAuth();
  if (loading) {
    return <div>Loading...</div>;
  }
  return user === null || user === undefined ? (
    <h1>Not logged in</h1>
  ) : (
    <h1>Logged in</h1>
  );
}

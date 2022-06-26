import Dashboard from "@/components/auth/Dashboard";
import Login from "@/components/auth/Login";
import useAuth from "@/lib/hooks/useAuth";

export default function Dash() {
  const [user, loading] = useAuth();
  if (loading) {
    return <div>Loading...</div>;
  }
  return user === null || user === undefined ? <Login /> : <Dashboard />;
}

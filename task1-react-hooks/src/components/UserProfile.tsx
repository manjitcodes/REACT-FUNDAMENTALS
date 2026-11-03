
import { useEffect, useState } from "react";

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
};

type UserProfileProps = {
  userId: number;
};

function UserProfile({ userId }: UserProfileProps) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchUser() {
      setLoading(true);
      setError(null);
      setUser(null);

      try {
        // Fetch user data and add a visible loading delay.
        const [response] = await Promise.all([
          fetch(
            `https://jsonplaceholder.typicode.com/users/${userId}`,
            { signal: controller.signal }
          ),
          new Promise<void>((resolve) => setTimeout(resolve, 1000)),
        ]);

        if (!response.ok) {
          throw new Error("Failed to fetch user.");
        }

        const data: User = await response.json();

        if (!controller.signal.aborted) {
          setUser(data);
        }
      } catch (err) {
        if (controller.signal.aborted) return;

        setError(
          err instanceof Error ? err.message : "Something went wrong."
        );
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    fetchUser();

    // Cancel the request if the component unmounts or userId changes.
    return () => controller.abort();
  }, [userId]);

  if (loading) {
    return (
      <section className="component-card">
        <h2>User Profile</h2>
        <p role="status">Loading user data...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="component-card">
        <h2>User Profile</h2>
        <p role="alert">{error}</p>
      </section>
    );
  }

  if (!user) {
    return <p>No user found.</p>;
  }

  return (
    <section className="component-card">
      <h2>User Profile</h2>
      <p><strong>ID:</strong> {user.id}</p>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Username:</strong> {user.username}</p>
      <p><strong>Email:</strong> {user.email}</p>
    </section>
  );
}

export default UserProfile;

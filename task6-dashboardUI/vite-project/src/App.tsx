
import { useMemo, useState } from "react";

import useFetch from "./hooks/useFetch";

import DashboardCards from "./components/DashboardCards";
import PostsChart from "./components/PostsChart";
import FilterBar from "./components/FilterBar";
import PostsTable from "./components/PostsTable";

import type {
  ApiResponse,
  Post,
  Comment,
  User,
} from "./types/blog";

import "./App.css";

const API_URL = "http://localhost:3000/api";

function App() {
  const [search, setSearch] = useState("");

  const posts = useFetch<ApiResponse<Post[]>>(
    `${API_URL}/posts`
  );

  const comments = useFetch<ApiResponse<Comment[]>>(
    `${API_URL}/comments`
  );

  const users = useFetch<ApiResponse<User[]>>(
    `${API_URL}/users`
  );

  const postData = posts.data?.data ?? [];
  const commentData = comments.data?.data ?? [];
  const userData = users.data?.data ?? [];

  const filteredPosts = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) {
      return postData;
    }

    return postData.filter((post) => {
      return (
        post.title.toLowerCase().includes(query) ||
        post.content.toLowerCase().includes(query) ||
        post.author.name.toLowerCase().includes(query)
      );
    });
  }, [postData, search]);

  if (posts.loading || comments.loading || users.loading) {
    return <p className="status-message">Loading dashboard...</p>;
  }

  if (posts.error || comments.error || users.error) {
    return (
      <p className="status-message error" role="alert">
        {posts.error || comments.error || users.error}
      </p>
    );
  }

  return (
    <main className="dashboard">
      <header className="dashboard-header">
        <div>
          <p className="eyebrow">CONTENT MANAGEMENT</p>
          <h1>Blog Dashboard</h1>
          <p className="header-description">
            Overview of your blog activity and engagement.
          </p>
        </div>
      </header>

      <DashboardCards
        totalPosts={postData.length}
        totalComments={commentData.length}
        totalUsers={userData.length}
      />

      <PostsChart posts={postData} />

      <section className="posts-section">
        <div className="posts-section-header">
          <div>
            <h2>Post Management</h2>
            <p className="section-description">
              Search and explore published posts.
            </p>
          </div>
        </div>

        <FilterBar
          search={search}
          onSearchChange={setSearch}
        />

        <PostsTable posts={filteredPosts} />
      </section>
    </main>
  );
}

export default App;


import type { Post } from "../types/blog";

interface PostsTableProps {
  posts: Post[];
}

function PostsTable({ posts }: PostsTableProps) {
  function formatDate(date: string) {
    return new Intl.DateTimeFormat("en", {
      year: "numeric",
      month: "short",
      day: "numeric",
    }).format(new Date(date));
  }

  return (
    <section className="table-card" aria-labelledby="posts-heading">
      <div className="table-heading">
        <div>
          <h2 id="posts-heading">All Posts</h2>
          <p className="section-description">
            Posts retrieved from your Blog CMS database
          </p>
        </div>

        <span className="result-count">
          {posts.length} posts
        </span>
      </div>

      <div className="table-scroll">
        <table>
          <caption className="sr-only">
            Blog posts with their authors, publication dates, and comment counts
          </caption>

          <thead>
            <tr>
              <th scope="col">Post</th>
              <th scope="col">Author</th>
              <th scope="col">Published</th>
              <th scope="col">Comments</th>
            </tr>
          </thead>

          <tbody>
            {posts.length > 0 ? (
              posts.map((post) => (
                <tr key={post.id}>
                  <td>
                    <span className="post-title">{post.title}</span>
                    <span className="post-content">
                      {post.content.length > 75
                        ? `${post.content.slice(0, 75)}...`
                        : post.content}
                    </span>
                  </td>

                  <td>{post.author.name}</td>

                  <td>
                    <time dateTime={post.createdAt}>
                      {formatDate(post.createdAt)}
                    </time>
                  </td>

                  <td>
                    <span className="comment-count">
                      {post.comments.length}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="empty-state">
                  No posts match your search.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default PostsTable;

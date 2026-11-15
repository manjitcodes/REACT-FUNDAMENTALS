
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import type { Post } from "../types/blog";

interface PostsChartProps {
  posts: Post[];
}

function PostsChart({ posts }: PostsChartProps) {
  const chartData = [...posts]
    .map((post) => ({
      title:
        post.title.length > 18
          ? `${post.title.slice(0, 18)}...`
          : post.title,
      comments: post.comments.length,
    }))
    .sort((a, b) => b.comments - a.comments)
    .slice(0, 8);

  return (
    <section className="chart-card" aria-labelledby="chart-heading">
      <h2 id="chart-heading">Comments per Post</h2>
      <p className="section-description">
        Top 8 posts by number of comments
      </p>

      <div className="chart-container">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="title"
              tick={{ fontSize: 11 }}
              interval={0}
              angle={-20}
              textAnchor="end"
              height={65}
            />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Bar
              dataKey="comments"
              fill="#6366f1"
              radius={[5, 5, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <p className="chart-description">
        This chart compares the comment counts of the eight
        most-commented posts.
      </p>
    </section>
  );
}

export default PostsChart;

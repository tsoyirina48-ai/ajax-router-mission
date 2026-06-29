import { Link } from "react-router-dom";

export default function Home({ posts }) {
    const recentPosts = [...posts].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 3);
    return (

<section>
      <h2>Home</h2>
      <h3>Recent Posts</h3>
      {recentPosts.length === 0 ?
      (
        <p>게시글이 없습니다</p>
      ) : (
        <ul>
            {recentPosts.map((post) => (
                <li key={post.id}>
                    <Link to={`/posts/${post.id}`}>{post.title}</Link>
                    <span>
                         {" "}
                        {post.createdAt || "No date"}

                    </span>
                </li>
            ))}
        </ul>
      )}
      
    </section>
    );
}
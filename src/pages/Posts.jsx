import { Link } from "react-router-dom";

export default function Posts({ posts }) {
    return (
        <section>
            <h2>글 목록</h2>

            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <Link to={`/posts/${post.id}`}>
                        {post.title}
                        </Link>
                        <p>{post.createdAt}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
}
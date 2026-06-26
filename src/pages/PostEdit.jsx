import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function PostEdit({ posts, onUpdate }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const post = posts.find((post) => post.id === Number(id));

  const [title, setTitle] = useState(post?.title || "");
  const [content, setContent] = useState(post?.content || "");

  if (!post) {
    return <p>존재하지 않는 글입니다.</p>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedPost = {
      ...post,
      title,
      content,
    };

    onUpdate(updatedPost);
    navigate(`/posts/${post.id}`);
  };

  return (
    <section>
      <h2>글 수정</h2>

      <form onSubmit={handleSubmit}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <button type="submit">수정 완료</button>
      </form>
    </section>
  );
}
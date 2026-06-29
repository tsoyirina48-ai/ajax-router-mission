import { useState, useEffect } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";

export default function PostEdit({ posts, onUpdate }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const post = posts.find((post) => post.id === Number(id));

  const [title, setTitle] = useState(post?.title || "");
  const [content, setContent] = useState(post?.content || "");

  useEffect(() =>{
    if(!post) return;
    setTitle(post.title);
    setContent(post.content);
  },[post]);

  if (!post) {
    return (
      <>
      <h2>404 페이지</h2>
    <p>존재하지 않는 글입니다.</p>
    <Link to="/">홈으로 이동</Link>
    </>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || ! content.trim()) {
      alert("제목과 내용을 입력하세요.");
      return;
    }
    const newId = onUpdate({
      title: title,
      content: content,
    });

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
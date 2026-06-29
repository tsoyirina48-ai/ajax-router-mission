import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PostNew({ onCreate }) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
      if (!title.trim() || ! content.trim()) {
        alert("제목과 내용을 입력하세요.");
        return;
      }


    const newPost = {
        id: Date.now(),
        title,
        content,
        createdAt: new Date().toISOString().slice(0, 10),
    };
    onCreate(newPost);
    navigate(`/posts/${newPost.id}`);
    };
    return (
        <section>
            <h2>글 작성</h2>

            <form onSubmit={handleSubmit}>
                <input value={title}
                onChange={(e) =>
                    setTitle(e.target.value)
                }
                placeholder="제목" />

                <textarea value={content}
                onChange={(e) =>
                    setContent(e.target.value)
                }
                placeholder="내용" />

                <button type="submit">등록</button>
            </form>
        </section>
    );
}
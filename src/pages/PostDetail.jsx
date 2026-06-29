import { Link, useParams, useNavigate } from "react-router";

export default function PostDetail({ posts, onDelete, }) {
    const { id } = useParams();
    const navigate = useNavigate();
    const post = posts.find((post) => post.id === Number(id));

    if (!post) {
        return (
        <>
        <h2>404 페이지</h2>
        <p>존재하지 않는 글입니다.</p>;
        <Link to="/">홈으로 이동</Link>
        </>
        );
    }
     const handleDelete = () => {
         if (window.confirm("정말 삭제할까요?")) {
      onDelete(post.id);
      navigate("/posts");
     }
    };


    return (
        <section>
            <h2>{post.title}</h2>
            <p>{post.createAt}</p>
            <p>{post.content}</p>

            <Link to={`/posts/${post.id}/edit`}>수정</Link>
            <button onClick={() => {
                if (confirm("삭제하시겠습니까?")) {
                onDelete(post.id)};
                navigate("/posts");
            }
        }
                >
                 삭제
                </button>
        </section>
    );
}
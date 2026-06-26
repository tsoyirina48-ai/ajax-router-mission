import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <section>
            <h2>404 페이지</h2>
            <p>존재하지 않는 페이지입니다.</p>
            <Link to="/">홈으로 이동</Link>
        </section>
    );
}
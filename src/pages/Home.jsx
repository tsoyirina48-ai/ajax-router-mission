

export default function Home({ posts }) {
    return (

<section>
      <h2>소개</h2>
      <p>React Router로 목록/상세/작성/수정/삭제를 연습하는 미션입니다.</p>

       <h3>최신 글</h3>
     	글이 없으면 - 글이 없습니다.
	있으면 ul, li, 출력, Link 컴포넌트 활용
    </section>
    );
}
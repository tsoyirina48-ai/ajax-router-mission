import './App.css';
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import PostDetail from "./pages/PostDetail";
import PostNew from "./pages/PostNew";
import PostEdit from "./pages/PostEdit";
import NotFound from "./pages/NotFound";

function App() {
  const [posts, setPosts] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const onDelete = (id) => {
    setPosts((prev) => prev.filter((post) => post.id !== id));
  };
  const onCreate = (newPost) => {
      setPosts((prev) => [newPost, ...prev]);
  };
  const onUpdate = (updatedPost) => {
    setPosts((prev) =>
      prev.map((post) => post.id === updatedPost.id ?
    updatedPost : post)
    );
  };
  
  useEffect(() => {
    let alive = true;

    fetch("/data/blog.json")
    .then((res) => res.json())
    .then((data) => {
      if (!alive) return;

      setPosts(data);
      setLoaded(true);
    });
    return () => {
      alive = false;
    };
  }, []);


  return (

<Routes>
      <Route path="/" element={<Layout loaded={loaded} />}>
        <Route index element={<Home posts={posts} />} />        
        <Route path="posts" element={<Posts posts={posts} />} />
        <Route
          path="posts/:id"
          element={<PostDetail posts={posts} onDelete={onDelete} />}
        />
        <Route path="*" element={<NotFound />}/>
        <Route path="posts/new" element={<PostNew onCreate={onCreate} />}
        />
        <Route path="posts/:id/edit" element={
          <PostEdit posts={posts} onUpdate={onUpdate} />
        }
        />
      </Route>      
    </Routes>
  );
}




export default App

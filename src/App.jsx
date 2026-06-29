import './App.css';
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router";
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
    //let alive = true;
    const controller = new AbortController();

    async function fetchData(){
    
    try {
      const res = await fetch("/data/blog.json", {
        
    signal: controller.signal,
      });
      if (!res.ok) throw new Error("메시지");
      const data = await res.json();
      setPosts([]);
    } catch (e) {
      console.error(e);
      setPosts([]);
    } finally {
      setLoaded(true);
     }
    }
    fetchData();


    return () => {
      //alive = false;
    };
  }, []);


  return (
<>
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
    </>
  );
}




export default App

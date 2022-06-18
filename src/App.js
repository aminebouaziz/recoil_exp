import React from "react";

import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

import { limit as limitAtom, posts as postsAtom } from "./atom";
import Menu from "./components/Menu";

function App() {
  const [posts, setPosts] = useRecoilState(postsAtom);

  const limit = useRecoilValue(limitAtom);

  useEffect(() => {
    const getPosts = async () => {
      const url = "https://jsonplaceholder.typicode.com/posts";
      const resp = await fetch(url);
      const body = await resp.json();
      console.log(body);
      setPosts(body);
    };
    getPosts();
  }, []);
  return (
    <>
      <Menu />
      {posts
        .filter((item, i) => i < limit)
        .map((post) => (
          <div key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
        ))}
    </>
  );
}

export default App;

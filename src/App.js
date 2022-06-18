import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const getPosts = async () => {
      const url = "https://jsonplaceholder.typicode.com/posts";
      const resp = await fetch(url);
      const body = await resp.json();
    };
  });
  return <div className="App"></div>;
}

export default App;

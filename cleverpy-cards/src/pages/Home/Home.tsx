import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import Card from "../../components/Card/Card";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [dbError, setDbError] = useState<boolean>(false);

  useEffect(() => {
    //   fetch("https://jsonplaceholder.typicode.com/users");

    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setPosts(res.data);
        setDbError(false);
      })
      .catch((e) => setDbError(true));
  }, []);

  return (
    <div>
      {posts.map((post) => {
        return <Card key={post.id} post={post} />;
      })}
      {dbError ? <h3>Database connection failed, please try again</h3> : null}
    </div>
  );
}

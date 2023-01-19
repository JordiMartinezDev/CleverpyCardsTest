import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import Card from "../../components/Card/Card";
import "./Home.css";
import logoImg from "../../img/PostCardsLogo.png";

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
      .catch((e) => {
        setDbError(true);
        console.log(e);
      });
  }, []);

  function handleDeletePost(postDelete: Post) {
    const newPosts = posts.filter(function (post) {
      if (post != postDelete) return post;
    });
    setPosts(newPosts);
    console.log("trying to delete:", postDelete);
  }

  function handleEditPost(postEdit: Post) {
    console.log("TRYTIUN TO ¿SAVE THIS POST: ", postEdit);
    const editedPost = posts.map(function (post) {
      if (post.id == postEdit.id) return (post = postEdit);
      else return post;
    });
    setPosts(editedPost);
  }

  return (
    <div>
      <div className="homeLayout">
        <img className="logo" src={logoImg}></img>
      </div>
      <div className="grid">
        {posts.map((post) => {
          return (
            <Card
              key={post.id}
              post={post}
              handleDelete={handleDeletePost}
              handleEdit={handleEditPost}
            />
          );
        })}
        {dbError ? <h3>Database connection failed, please try again</h3> : null}
      </div>
    </div>
  );
}

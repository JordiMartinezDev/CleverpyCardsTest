import "./Card.css";
import { useEffect } from "react";

interface Props {
  post: {
    userId: number;
    id: number;
    title: string;
    body: string;
  };
}

export default function Card({ post }: Props) {
  return (
    <div className="card">
      <div>
        <p className="card__postId">{post?.id}</p>
        <h3 className="card__title">{post?.title}</h3>
        <p className="card__body">{post?.body}</p>
        <p className="card__userId">{post?.userId}</p>
      </div>
      <button className="card__delete-button">Delete</button>
    </div>
  );
}

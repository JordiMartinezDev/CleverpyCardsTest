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
    <div>
      <li key={post?.id}>
        <h4>{post?.title}</h4>
        <p>{post?.body}</p>
        <p>{post?.userId}</p>
      </li>
    </div>
  );
}

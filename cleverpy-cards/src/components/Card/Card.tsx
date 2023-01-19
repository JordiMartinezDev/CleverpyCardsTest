import "./Card.css";
import { useEffect, useState } from "react";
import { Post } from "../../types";

interface Props {
  post: {
    userId: number;
    id: number;
    title: string;
    body: string;
  };
  handleDelete: Function;
  handleEdit: Function;
}

export default function Card({ post, handleDelete, handleEdit }: Props) {
  const [isInEditMode, setIsInEditMode] = useState<boolean>(false);
  const [currentPost, setCurrentPost] = useState<Post>(post);

  function handleDeleteCard() {
    handleDelete(post);
  }

  function onChangeBody(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setCurrentPost({
      userId: currentPost.userId,
      id: currentPost.id,
      title: currentPost.title,
      body: e.target.value,
    });
  }
  function onChangeTitle(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setCurrentPost({
      userId: currentPost.userId,
      id: currentPost.id,
      title: e.target.value,
      body: currentPost.body,
    });
  }

  function handleEditPostCard() {
    setIsInEditMode(!isInEditMode);
    console.log("SENDING POST TO HOME:.....:", currentPost);
    if (isInEditMode) handleEdit(currentPost);
  }
  return (
    <div className="card">
      <div>
        <p className="card__postId"> Post id: {post?.id}</p>
        {!isInEditMode ? (
          <h3 className="card__title">{post?.title}</h3>
        ) : (
          <textarea
            className="card__title__editing"
            defaultValue={post?.title}
            name="title"
            style={{}}
            onChange={(e) => onChangeTitle(e)}
          />
        )}
        {!isInEditMode ? (
          <p className="card__body">{post?.body}</p>
        ) : (
          <textarea
            className="card__body__editing"
            defaultValue={post?.body}
            onChange={(e) => onChangeBody(e)}
          />
        )}

        <p className="card__userId">User: {post?.userId}</p>
      </div>
      <div className="card__buttons">
        <button className="card__buttons--edit" onClick={handleEditPostCard}>
          {!isInEditMode ? "Edit" : "Save"}
        </button>
        <button className="card__buttons--delete" onClick={handleDeleteCard}>
          Delete
        </button>
      </div>
    </div>
  );
}

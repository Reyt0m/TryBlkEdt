import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import db from "../firebase";

const NewPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoct(collection(db, "posts"), {
        title: title,
        content: content,
        createdAt: new Date().getTime(),
      });
      setTitle("");
      setContent("");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <p> テスト投稿</p>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="タイトル"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="内容"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit">投稿</button>
      </form>
    </div>
  );
};

export default NewPost;

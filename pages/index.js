import React, { useState } from "react";
import dynamic from "next/dynamic";

const CustomEditor = dynamic(() => import("../components/Editor.js"), {
  ssr: false,
});

const Home = () => {
  const [data, setData] = useState();
  return (
    <>
      <h1 id="demo">Editor</h1>
      <CustomEditor
        data={data}
        onChange={setData}
        holder="editorjs-container"
      />
    </>
  );
};

export default Home;

import React, { useState, useMemo } from "react";
import dynamic from "next/dynamic";

const CustomEditor = dynamic(() => import("../components/Editor.js"), {
  ssr: false,
});

const Home = () => {
  const [data, setData] = useState();

  const memoDate = useMemo(() => {
    return Date()
  }, [])


  return (
    <>
      <h1>Editor</h1>
      <CustomEditor
        data={data}
        onChange={setData}
        holder="editorjs-container"
      />
	    <div>{memoDate}</div>
    </>
  );
};

export default Home;

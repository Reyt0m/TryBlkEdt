// import React, { useEffect } from "react";
// import EditorJS from "@editorjs/editorjs";
// import dynamic from "next/dynamic";
import { createReactEditorJS } from 'react-editor-js'

const ReactEditorJS = createReactEditorJS()

<ReactEditorJS defaultValue={blocks} />

// const home = () => {
//   const Output = dynamic(
//     async () => (await import("editorjs-react-renderer")).default,
//     { ssr: false }
//   );
//   // if (window !== undefined) {
//   const editor = new EditorJS();
//   // const 	editor = new EditorJS({
//   // 	// holder: 'editorjs',
//   // });
//   // }
//   return (
//     <>
//       <h1>home</h1>
// 	  <Output data={editor} />
//     </>
//   );
// };

// export default home;

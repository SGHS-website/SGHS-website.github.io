import React, {useState, useEffect} from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'


const Post = () => {
  const [content, setContent] = useState("");
  useEffect(()=>{
    import("../posts/hi.md")
      .then(res=>{
        fetch(res.default)
          .then(response=>response.text())
          .then(response => setContent(response))
          .catch(err=>console.log(err))
      })
  },[]);
  return (
    <div>
      <ReactMarkdown remarkPlugins={[remarkGfm]} >{content}</ReactMarkdown>
    </div>
  );
  
};

export default Post;
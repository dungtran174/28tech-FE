import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GoBack from "../../components/GoBack";

function BlogDetail() {
  const params = useParams();
  const [post, setPost] = useState();

  useEffect(() => {
    fetch(`https://dummyjson.com/posts/${params.id}`)
      .then(response => response.json())
      .then(data => setPost(data));
  }, []);

  return (
    <>
      <GoBack />
      {post ? (
        <>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  )
}

export default BlogDetail;
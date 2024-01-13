// import React, { useContext, useEffect, useState } from "react";
// import PostAuthor from "../Components/PostAuthor";
// import { Link, useParams } from "react-router-dom";
// // import thumbnail from "../images/Thumbnail4.jpg";
// import { UserContext } from "../context/userContext";
// import Loader from "../Components/Loader";
// import DeletePost from "./DeletePost";
// import axios from "axios";

// const PostDetail = () => {
//   const { id } = useParams;
//   const [post, setPost] = useState(null);

//   const [error, setError] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);

//   const { currentUser } = useContext(UserContext);

//   useEffect(() => {
//     const getPost = async () => {
//       setIsLoading(true);
//       try {
//         const response = await axios.get(
//           `${process.env.REACT_APP_BASE_URL}/posts/${id}`
//         );
//         setPost(response.data);
//       } catch (error) {
//         setError(error);
//       }
//       setIsLoading(false);
//     };
//     getPost();
//   }, [id]);

//   if (isLoading) {
//     return <Loader />;
//   }

//   return (
//     <section className="post-detail">
//       {error && <p className="error">{error}</p>}
//       {post && (
//         <div className="container post__detail-container">
//           <div className="post__detail-header">
//             <PostAuthor authorID={post.creator} createdAt={post.createdAt} />
//             {currentUser?.id == post?.creator && (
//               <div className="post__detail-buttons">
//                 <Link
//                   to={`/posts/${post?._id}/edit`}
//                   className="btn sm primary"
//                 >
//                   Edit
//                 </Link>
//                 <DeletePost postId={id} />
//               </div>
//             )}
//           </div>
//           <h1>{post.title}</h1>
//           <div className="post__detail-thumbnail">
//             <img
//               src={`${process.env.REACT_APP_ASSETS_URL}/uploads/${post.thumbnail}`}
//               alt=""
//             />
//           </div>
//           <p dangerouslySetInnerHTML={{ __html: post.desc }}></p>
//         </div>
//       )}
//     </section>
//   );
// };

// export default PostDetail;

import React, { useContext, useEffect, useState } from "react";
import PostAuthor from "../Components/PostAuthor";
import { Link, useParams } from "react-router-dom";
import { UserContext } from "../context/userContext";
import Loader from "../Components/Loader";
import DeletePost from "./DeletePost";
import axios from "axios";

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { currentUser } = useContext(UserContext);

  useEffect(() => {
    const getPost = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/posts/${id}`
        );
        setPost(response.data);
      } catch (error) {
        setError(error);
      }
      setIsLoading(false);
    };
    getPost();
  }, [id]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <section className="post-detail">
      {error && <p className="error">{error}</p>}
      {post && (
        <div className="container post__detail-container">
          <div className="post__detail-header">
            <PostAuthor authorID={post.creator} createdAt={post.createdAt} />
            {currentUser?.id === post?.creator && (
              <div className="post__detail-buttons">
                <Link
                  to={`/posts/${post?._id}/edit`}
                  className="btn sm primary"
                >
                  Edit
                </Link>
                <DeletePost postId={id} />
              </div>
            )}
          </div>
          <h1>{post.title}</h1>
          <div className="post__detail-thumbnail">
            <img
              src={`${process.env.REACT_APP_ASSETS_URL}/uploads/${post.thumbnail}`}
              alt=""
            />
          </div>
          <p dangerouslySetInnerHTML={{ __html: post.description }}></p>
        </div>
      )}
    </section>
  );
};

export default PostDetail;

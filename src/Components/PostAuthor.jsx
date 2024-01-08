import React from "react";
import { Link } from "react-router-dom";
import Avartar from "../images/avatar1.png";

const PostAuthor = () => {
  return (
    <Link to={`/posts/users/skdj`} className="post__author">
      <div className="post__author-avatar">
        <img src={Avartar} alt="" />
      </div>
      <div className="Post__author-details">
        <h4 className="post__author-name">By: John Doe</h4>
        <small>just now</small>
      </div>
    </Link>
  );
};

export default PostAuthor;

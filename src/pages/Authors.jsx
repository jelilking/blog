import React, { useState } from "react";

import Avatar from "../images/avatar1.png";
import { Link } from "react-router-dom";

const authorsData = [
  { id: 1, avatar: Avatar, name: "Earnest Achievers", posts: 3 },
  { id: 2, avatar: Avatar, name: "Jane Doe", posts: 0 },
  { id: 3, avatar: Avatar, name: "Ninja Luigi", posts: 2 },
  { id: 4, avatar: Avatar, name: "Shaun Micheal", posts: 10 },
  { id: 5, avatar: Avatar, name: "Peter Parker", posts: 5 },
];

const Authors = () => {
  const [authors, setAuthors] = useState(authorsData);
  return (
    <section className="authors">
      {authors.length > 0 ? (
        <div className="container authors__container">
          {authors.map(({ id, avatar, name, posts }) => {
            return (
              <Link key={id} to={`/posts/users/${id}`} className="author">
                <div className="author__avatar">
                  <img src={avatar} alt={`image of ${name}`} />
                </div>
                <div className="author__info">
                  <h4>{name}</h4>
                  <p>{posts} posts</p>
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        <h2 className="center">No User/Authors found</h2>
      )}
    </section>
  );
};

export default Authors;

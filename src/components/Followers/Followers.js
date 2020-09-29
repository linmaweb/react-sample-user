import React, { useContext } from "react";
import { GithubContext } from "../../context/GithubContext";
import "./Followers.css";

const Followers = () => {
  const { followers } = useContext(GithubContext);
  return (
    <>
      {followers &&
        followers.map((follow, index) => (
          <a
            href={follow.html_url}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            className="followersWrapper"
          >
            <div className="followers">
              <img src={follow.avatar_url} alt="follower" />
              <p>{follow.login}</p>
            </div>
          </a>
        ))}
    </>
  );
};

export default Followers;

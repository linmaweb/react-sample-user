import React, { useContext } from "react";
import { GithubContext } from "../../config";
import "./Repos.css";

const Repos = () => {
  const { repos } = useContext(GithubContext);
  return (
    <>
      {repos &&
        repos.map((repo, index) => (
          <a
            href={repo.html_url}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            className="reposWrapper"
          >
            <div className="repos">
              {repo.name && (
                <p>
                  <i className="fas fa-laptop-code"></i>
                  {repo.name}
                </p>
              )}
              <div className="repoInfo">
                {repo.language && (
                  <p>
                    <span></span>
                    {repo.language}
                  </p>
                )}
                {repo.updated_at && (
                  <p className="repoUpdated">{repo.updated_at}</p>
                )}
              </div>
            </div>
          </a>
        ))}
    </>
  );
};

export default Repos;

import React, { useContext } from "react";
import { GithubContext } from "../../config";
import "./Overview.css";

const Overview = () => {
  const { overview } = useContext(GithubContext);
  let id = 1;
  return (
    <div className="overviewWrapper">
      {overview &&
        overview.map((item, index) => (
          <a
            href={item.html_url}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={"overview overview-" + id++}>
              {item.name && (
                <h2>
                  <i className="fas fa-chalkboard-teacher"></i>
                  {item.name}
                </h2>
              )}
              {item.language && (
                <p>
                  <span></span>
                  {item.language}
                </p>
              )}
            </div>
          </a>
        ))}
    </div>
  );
};
export default Overview;

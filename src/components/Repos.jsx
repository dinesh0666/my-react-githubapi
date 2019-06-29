import React, { useState, useEffect } from "react";
import { Link } from "@reach/router";
import Button from "@material-ui/core/Button";

function Repos(props) {
  const [repos, setRepos] = useState([]);
  const API = "https://api.github.com/users";
  const Download = "https://codeload.github.com";

  const fetchRepos = function(username) {
    let url = `${API}/${username}/repos`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setRepos(data);
      })
      .catch(error => console.log("Oops! . There Is A Problem"));
  };

  useEffect(() => {
    fetchRepos(props.username);
  }, []);

  if (repos.length === 0)
    return (
      <div className="notfound">
        <h2>Oops !!!</h2>
        <p> No Public Repos Avaliable !!</p>
        <Link to={`/`}>
          <span>Back</span>
        </Link>
      </div>
    );
  else {
    return (
      <div>
        <section className="github--profile">
          {repos.map(repo => {
            return (
              <div className="github--profile__info" key={repo.html_url}>
                <h2>
                  <a href={repo.html_url} title={repo.name} target={"_blank"}>
                    {repo.name || repo.full_name}
                  </a>
                </h2>
                <p className={"bio"}>{repo.description}</p>

                <a
                  className="buttonDownload"
                  href={`${Download}/${repo.owner.login}/${
                    repo.name
                  }/zip/master`}
                  title={repo.name}
                  target={void 0}
                >
                  {"Download Repo"}
                </a>
              </div>
            );
          })}
          <div className={"home"}>
            <Link to={`/`}>
              <i className="material-icons icon-blue">home</i>
            </Link>
          </div>
        </section>
      </div>
    );
  }
}
export default Repos;

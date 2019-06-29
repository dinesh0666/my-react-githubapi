import React, { useState, useEffect } from "react";
import SearchProfile from "./components/SearchProfile";
import Profile from "./components/Profile";
import "./App.css";
import githubUsernameRegex from "github-username-regex";
import toastr from "toastr";

function App() {
  const API = "https://api.github.com/users";

  const [state, setState] = useState({
    username: "dinesh0666",
    name: "",
    avatar: "",
    location: "",
    repos: "",
    followers: "",
    following: "",
    homeUrl: "",
    notFound: ""
  });

  const fetchProfile = function(username) {
    if (githubUsernameRegex.test(username)) {
      let url = `${API}/${username}`;
      fetch(url)
        .then(res => res.json())
        .then(data => {
          setState({
            username: data.login,
            name: data.name,
            avatar: data.avatar_url,
            location: data.location,
            repos: data.public_repos,
            followers: data.followers,
            following: data.following,
            homeUrl: data.html_url,
            notFound: data.message,
            bio: data.bio
          });
        })
        .catch(error => console.log("Oops! . There Is A Problem"));
    } else {
      toastr.error("Please Enter the Valid Github username");
    }
  };

  useEffect(() => {
    fetchProfile(state["username"]);
  }, []);
  return (
    <div>
      <h1 className="heading">Search Git Hub Profile</h1>
      <SearchProfile fetchProfile={fetchProfile} />
      <Profile data={state} />
    </div>
  );
}

export default App;

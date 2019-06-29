import React, { useState } from "react";

function SearchProfile(props) {
  const [username, setUsername] = useState();

  const changeText = function(e) {
    setUsername(e.target.value);
  };
  const handleForm = function(e) {
    e.preventDefault();
    props.fetchProfile(username);
    setUsername("");
  };
  return (
    <div className="search--box">
      <form onSubmit={e => handleForm(e)}>
        <label>
          <input
            type="search"
            autoComplete="off"
            onChange={e => changeText(e)}
            name={"username"}
            value={username}
            placeholder="Type Username + Enter"
          />
        </label>
      </form>
    </div>
  );
}
export default SearchProfile;

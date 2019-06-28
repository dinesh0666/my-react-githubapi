import React, { useState, useEffect } from 'react';
import { Link } from "@reach/router";



function Followers(props) {
    const [followers, setFollowers] = useState([]);
    const API = "https://api.github.com/users";

    const fetchFollowers = function (username) {
        let url = `${API}/${username}/followers`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setFollowers(data)
            })
            .catch((error) => console.log('Oops! . There Is A Problem'))
    }

    useEffect(() => {
        fetchFollowers(props.username)
    }, []);

    if (followers.length === 0)
        return (
            <div className="notfound">
                <h2>Oops !!!</h2>
                <p> No Followers yet !! </p>
                <Link to={`/`} ><span>Back</span></Link>
            </div>
        );
    else {
        return (
            <div>
                <section className="github--profile">
                    {followers.map((follower) => {
                        return <div className="github--profile__info" key={follower.login}>
                            <a href={follower.html_url} target={"_blank"} title={follower.login}>
                                <img className={'user-info__avatar'} src={follower.avatar_url} alt={follower.login} /></a>
                            <h2><a href={follower.html_url} title={follower.login} target={"_blank"}>{follower.name || follower.login}</a>
                                <p className={'bio'}>{follower.bio}</p>
                            </h2>
                        </div>
                    })}
                </section>
                <div className={"home"}>
                <Link to={`/`} ><i className="material-icons icon-blue">home</i></Link>
                </div>
            </div>
        )
    }

}
export default Followers;
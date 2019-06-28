import React, { useState, useEffect } from 'react';
import { Link } from "@reach/router";



function Followings(props) {
    const [followings, setFollowings] = useState([]);
    const API = "https://api.github.com/users";

    const fetchFollowings = function (username) {
        let url = `${API}/${username}/following`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setFollowings(data)
            })
            .catch((error) => console.log('Oops! . There Is A Problem'))
    }

    useEffect(() => {
        fetchFollowings(props.username)
    }, []);

    if (followings.length === 0)
        return (
            <div className="notfound">
                <h2>Oops !!!</h2>
                <p> No Followings yet !! </p>
                <Link to={`/`} ><span>Back</span></Link>
            </div>
        );
    else {
        return (
            <div>
                <section className="github--profile">
                    {followings.map((follower) => {
                        return <div className="github--profile__info" key={follower.login}>
                            <a href={follower.html_url} target={"_blank"} title={follower.login}>
                                <img className={'user-info__avatar'} src={follower.avatar_url} alt={follower.login} /></a>
                            <h2><a href={follower.html_url} title={follower.login} target={"_blank"}>{follower.name || follower.login}</a>
                                <p className={'bio'}>{follower.bio}</p>
                            </h2>
                        </div>
                    })}
                    <div className={"home"}>
                        <Link to={`/`} ><i className="material-icons icon-blue">home</i></Link>
                    </div>
                </section>
            </div>
        )
    }

}
export default Followings;
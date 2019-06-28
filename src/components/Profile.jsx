import React from 'react';
import {Link } from "@reach/router";

function Profile(props)  {
      let data = props.data;
      if (data.notFound === 'Not Found')
        return (
           <div className="notfound">
              <h2>Oops !!!</h2>
              <p>The Component Couldn't Find The You Were Looking For . Try Again </p>
           </div>
        );
        else
        return (
          <section className="github--profile">
            <div className="github--profile__info">
              <a href={data.homeUrl} target={"_blank"} title={data.name || data.username}>
              <img className={'user-info__avatar'} src={data.avatar} alt={data.username}/></a>
              <h2><a href={data.homeUrl} title={data.username} target={"_blank"}>{data.name || data.username}</a>
              <p className={'bio'}>{data.bio}</p>
              </h2>
            </div>
            <div className="github--profile__state">
              <ul>
                 <li>
                    <Link to={`/followers/${data.username}`} ><i>{data.followers ? data.followers : 0}</i><span>Followers</span></Link>
                 </li>
                 <li>
                    <Link to={`/repos/${data.username}`} title="Number Of Repositoriy"><i>{data.repos ? data.repos : 0}</i><span>Repos</span></Link>
                 </li>
                 <li>
                    <Link to={`/followings/${data.username}`}  title="Number Of Following"><i>{data.following ? data.following : 0}</i><span>Following</span></Link>
                 </li>
              </ul>
            </div>
          </section>
        );
  }
export default Profile;
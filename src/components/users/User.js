import React, { useEffect, useContext } from "react";
import { Link } from 'react-router-dom';
import Spinner from "./Spinner";
import Repos from "../repos/Repos";
import GithubContext from '../../context/github/githubContext';
import tick from '../imgs/tick.jpg';
import cross from '../imgs/cross.jpg';

const User = (props) => {
  const githubContext = useContext(GithubContext);
  const { repos, loading, getUser, getUserRepos } = githubContext;

  useEffect(() => {
    getUser(props.match.params.login);
    getUserRepos(props.match.params.login);
  }, []);

  const {
    html_url,
    avatar_url,
    name,
    company,
    blog,
    location,
    email,
    hireable,
    bio,
    public_repos,
    public_gists,
    followers,
    following,
  } = githubContext.user;

  return (
    <div className='m-3'>
      <Link to='/' className='btn btn-sm btn-back btn-light'>Back to Search</Link>
      {loading && <Spinner />}
      {!loading && (
        <div className='card'>
          <div className='text-center my-2'>
            <img
              src={avatar_url}
              alt='user'
              className='round-img'
              style={{ width: "200px" }}
            />
            <br />
            <h4>{name && name.toUpperCase()}</h4>
            <p>
              | {email && `${email} |`} {blog} |
            </p>
            <p>{bio}</p>
            <a href={html_url} className='btn btn-dark btn-sm'>
              Github Profile
            </a>
          </div>

          <div className='grid-2'>
            <div >
              <p>Company : {company || 'NA'}</p>
              <p>Location : {location || 'NA'}</p>
              <p> {(hireable && `Hireable`) || `Not Hireable X`}&nbsp;&nbsp;
                {(hireable && <img src={tick} alt='tick' className='tick' />) || (<img src={cross} alt='cross' className='cross' />)} </p>
            </div>
            <div >
              <p>Followers : {followers}</p>
              <p>Following : {following}</p>
              <p>Public Repos : {public_repos}</p>
              <p>Public Gists : {public_gists}</p>
            </div>
          </div>

          <div>
            <h4>Repositories</h4>
            <Repos repos={repos} />
            <center>
              <a href={html_url + "?tab=repositories"} className='btn btn-dark btn-sm'>VIEW ALL</a>
            </center>
          </div>
        </div>
      )}
    </div>
  );
}

export default User;

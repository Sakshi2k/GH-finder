import React, { Fragment, useEffect } from "react";
import propTypes from "prop-types";
import Spinner from "./Spinner";
import Repos from "../repos/Repos";

function User(props) {
  useEffect(() => {
    props.getUser(props.match.params.login);
    props.getUserRepos(props.match.params.login);
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
  } = props.user;

  return (
    <Fragment>
      {props.loading && <Spinner />}
      {!props.loading && (
        <div className='card'>
          <div className='text-center my-2'>
            <img
              src={avatar_url}
              alt='Picture'
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
              View Profile
            </a>
          </div>

          <div className='grid-2'>
            <div>
              <p>Company : {company}</p>
              <p>Location : {location}</p>
              <p>{(hireable && `Hireable`) || `Not Hireable`}</p>
            </div>
            <div>
              <p>Followers : {followers}</p>
              <p>Following : {following}</p>
              <p>Public Repos : {public_repos}</p>
              <p>Public Gists : {public_gists}</p>
            </div>
          </div>

          <div>
            <h4>BLOGS</h4>
            <Repos repos={props.repos} />
            <center>
              <a
                href={html_url + "?tab=repositories"}
                className='btn btn-light'
              >
                VIEW ALL
              </a>
            </center>
          </div>
        </div>
      )}
    </Fragment>
  );
}

User.propTypes = {
  user: propTypes.object.isRequired,
  loading: propTypes.bool,
};

export default User;

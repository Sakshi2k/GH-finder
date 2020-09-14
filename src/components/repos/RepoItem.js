import React from "react";
import propTypes from "prop-types";

function RepoItem({ repo }) {
  return (
    <div className='card text-center'>
      <h4>{repo.name}</h4>
      {/* <p>{(repo.private && `Private`) || `Public`}</p> */}
      <h6>{repo.fork && `Forked`}</h6>
      <p>{repo.forks > 0 && `Forks ${repo.forks}`}</p>
      <a href={repo.html_url} className='btn btn-primary btn-sm'>
        Visit Repo
      </a>
    </div>
  );
}

RepoItem.propTypes = {
  repo: propTypes.object.isRequired,
};
export default RepoItem;

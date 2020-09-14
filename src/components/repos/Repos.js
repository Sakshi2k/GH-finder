import React from "react";
import RepoItem from "./RepoItem";
import propTypes from "prop-types";

function Repos({ repos }) {
  return (
    <div className='grid-3'>
      {repos.map((repo) => (
        <RepoItem repo={repo} key={repo.id} />
      ))}
    </div>
  );
}

Repos.propTypes = {
  repos: propTypes.array.isRequired,
};

export default Repos;

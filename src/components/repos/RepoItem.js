import React from "react";

function RepoItem({ repo }) {
  return (
    <div className='card text-center'>
      <p className='text-right sm-text'>{repo.fork && `Forked`}</p>
      <p className='inlineP text-left sm-text'>{repo.forks > 0 && `Forks ${repo.forks}`}</p>
      <a href={repo.html_url} className='sm-lead'>
        {repo.name}
      </a>
    </div>
  );
}

export default RepoItem;

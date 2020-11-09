import React from "react";
import RepoItem from "./RepoItem";

function Repos({ repos }) {
  return (
    <div className='grid-4' style={tempStyle}>
      {/* <div > */}
      {/* <h4>Repositories</h4> */}
      {
        repos.map((repo) => (
          <RepoItem repo={repo} key={repo.id} />
        ))
      }
      <br />
      <br /><br />
    </div>
  );
}


const tempStyle = {
  'margin-left': '2pt'
}

export default Repos;

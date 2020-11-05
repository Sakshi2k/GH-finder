import React, { useState, useContext } from "react";
import GithubContext from '../../context/github/githubContext';

const Search = ({ setAlert }) => {
  const githubContext = useContext(GithubContext)

  const [userName, setUserName] = useState("");

  const changeUserName = (event) => {
    setUserName(event.target.value);
  };

  const submitUserName = (event) => {
    event.preventDefault();
    if (userName === "") {
      setAlert("Please Enter Username To Search..!", "light");
    }
    userName !== "" && githubContext.searchUsers(userName);
  };

  return (
    <form onSubmit={submitUserName} className='btn-sm mg-top-2'>
      <input
        type='text'
        name='username'
        placeholder='Enter Username'
        value={userName}
        autoComplete='off'
        className='form-control'
        onChange={changeUserName}
      />
      <button type='submit' className='btn btn-dark btn-sm'>Search</button>
      <button
        type='button'
        className='btn btn-light btn-sm'
        onClick={() => {
          githubContext.clearUsers();
          setUserName('');
        }}
      > Clear </button>
      {userName && <h3>Search results for : {userName}</h3>}
    </form>
  );
};

export default Search;

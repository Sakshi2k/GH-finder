import React, { useState } from "react";
import propTypes from "prop-types";

const Search = (props) => {
  const [userName, setuserName] = useState("");

  const changeUserName = (event) => {
    setuserName(event.target.value);
  };

  const HandleClear = () => {
    setuserName("");
    props.clearAll();
  };

  const submitUserName = (event) => {
    event.preventDefault();
    if (userName === "") {
      props.setAlert("Please Enter UserName To Search..!", "light");
    }
    userName !== "" && props.searchUsers(userName);
  };

  return (
    <form action='' onSubmit={submitUserName} className='btn-sm'>
      <input
        type='text'
        name='username'
        placeholder='Enter Username'
        value={userName}
        autoComplete='off'
        onChange={changeUserName}
      />
      <button type='submit' className='btn btn-dark btn-sm'>
        Search
      </button>
      <button
        type='button'
        className='btn btn-light btn-sm'
        onClick={() => {
          HandleClear();
        }}
      >
        Clear
      </button>
      {userName && <h3>Search Results for UserName : {userName}</h3>}
    </form>
  );
};

Search.propTypes = {
  searchUsers: propTypes.func.isRequired,
};

export default Search;

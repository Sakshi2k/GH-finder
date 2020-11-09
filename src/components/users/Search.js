import React, { useState, useContext } from "react";
import { useHistory } from 'react-router-dom';
import { Form, FormControl, Button } from 'react-bootstrap';
import GithubContext from '../../context/github/githubContext';

const Search = ({ setAlert }) => {
  const githubContext = useContext(GithubContext)

  const [userName, setUserName] = useState("");
  const history = useHistory();

  const changeUserName = (event) => {
    setUserName(event.target.value);
  };


  const routeChange = () => {
    let path = `/`;
    history.push(path);
  }

  const submitUserName = (event) => {
    event.preventDefault();
    if (userName === "") {
      setAlert("Please Enter Username To Search..!", "light");
    }
    userName !== "" && githubContext.searchUsers(userName);
  }

  return (
    <Form inline onSubmit={submitUserName} >
      <FormControl type='text'
        name='username'
        placeholder='Enter Username'
        value={userName}
        autoComplete='off'
        className='form-control'
        onClick={routeChange}
        onChange={changeUserName} />
      <Button type="submit" className='btn searchBtn'
      > Submit</Button>
      <Button
        type='button'
        className='btn btn-light'
        onClick={() => {
          githubContext.clearUsers();
          setUserName('');
        }}
      > Clear </Button>
      <br /><br />
    </Form >
  );
};

export default Search;

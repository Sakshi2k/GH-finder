import React, { Fragment, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import Users from '../users/Users';

export default function Home(props) {
    const { users, loading } = useContext(GithubContext);

    return (
        <Fragment>
            {(users.length === 0 && !loading && <h1 className="text-center mg-top-4 lead2"><br />Searched Results will be shown here</h1>)}
            <Users />
        </Fragment>
    )
}

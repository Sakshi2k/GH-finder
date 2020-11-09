import React, { useContext } from "react";
import UserItem from "./UserItem";
import Spinner from "./Spinner";
import GithubContext from '../../context/github/githubContext';

const Users = () => {

    const { loading, users } = useContext(GithubContext);

    if (loading) {
        return <Spinner />;             //NOT WORKING
    } else {
        return (
            <div>
                <div className='grid-4'>
                    {users.map((user) => (
                        <UserItem key={user.id} user={user} />
                    ))}
                </div>
                <br />
                {users.length > 0 && <p className='text-center'>You are able to view 30 users currently.</p>}
                <br /><br />
            </div>
        );
    }
};

export default Users;
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
                <div style={userStyle}>
                    {users.map((user) => (
                        <UserItem key={user.id} user={user} />
                    ))}
                </div>
                {users.length > 0 && <p className='text-center'>You are able to view 30 users currently.</p>}
                <br /><br />
            </div>
        );
    }
};

const userStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gridGap: "0.8rem",
};

export default Users;
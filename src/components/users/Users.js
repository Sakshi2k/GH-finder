import React from "react";
import propTypes from "prop-types";
import UserItem from "./UserItem";
import Spinner from "./Spinner";

const Users = ({ users, loading }) => {
    if (loading) {
        return <Spinner />; //NOT WORKING
    } else {
        return (
            <div style={userStyle}>
                {users.map((user) => (
                    <UserItem key={user.id} user={user} />
                ))}
            </div>
        );
    }
};


const userStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gridGap: "0.8rem",
};

Users.propTypes = {
    users: propTypes.array.isRequired,
    loading: propTypes.bool.isRequired,
};


export default Users;
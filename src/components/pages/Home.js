import React, { Fragment } from 'react';
import Search from '../users/Search';
import Users from '../users/Users';

export default function Home(props) {
    return (
        <Fragment>
            <Search setAlert={props.setAlert} />
            <Users />
        </Fragment>
    )
}

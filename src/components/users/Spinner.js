import React, { Fragment } from "react";
import spinner from "./spinner.gif";

export default function Spinner() {
  return (
    <Fragment>
      <h2 className='text-center my-2'>Loading...</h2>
      <img
        src={spinner}
        alt='Spinner'
        style={{ width: "200px", margin: "auto", display: "block" }}
      />
    </Fragment>
  );
}

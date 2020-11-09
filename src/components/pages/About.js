import React from "react";

function About() {
  return (
    <div className='mg-top-4'>
      <br />
      <h3>Hey,</h3>
      <br />
      <div style={{ marginLeft: '2rem' }}>
        <h6 className='lead' style={{ color: 'rgb(10, 141, 91)' }}>Welcome to Github Finder</h6>
        <p className='lead'>This application helps you search Github Users using their username.</p>
        <p className='lead'>You can view their summarised analysed data about any user too.</p>
        <p className='lead'>Version: 1.0</p>
        <p className='lead'>Made by<a rel="noopener noreferrer" target='_blank' href='https://meet-sakshichoudhary.herokuapp.com/'> Sakshi Choudhary</a></p>
      </div>
    </div>
  );
}

export default About;

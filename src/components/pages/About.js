import React from "react";

function About() {
  return (
    <div className='mg-top-4'>
      <br />
      <h3>Hey,</h3>
      <div style={{ marginLeft: '2rem' }}>
        <h6 className='lead' style={{ color: 'rgb(10, 141, 91)' }}>Welcome to Github Finder</h6>
        <p className='lead'>This application helps you search Developers all over the world from Github Platform using their username.
        You can also use their name to do the same, although username will help you search faster.
        You can also view developer's summarised data.</p>
        <p>Version: 1.2</p>
        <p>Made by<a rel="noopener noreferrer" target='_blank' href='https://meet-sakshichoudhary.herokuapp.com/'> Sakshi Choudhary</a></p>
      </div>
    </div >
  );
}

export default About;

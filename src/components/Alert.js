import React from "react";

const Alert = ({ alert }) =>
  alert !== null && (
    <div className={`alert alert-${alert.type}`}>
      <i className='fas fa-info-circle m-3' /> { alert.msg}
    </div >
  );
export default Alert;

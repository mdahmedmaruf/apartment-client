import React from "react";
import { Link } from "react-router-dom";

const DashboardSidebar = () => {
  return (
    <div className="dashboard-side-nav mt-5 px-5">
      <ul>
        {(sessionStorage.getItem('isAdmin')==='true') && <li>
          <Link to="/booking-list">
            <i className="far fa-hdd"></i>
            Booking list
          </Link>
        </li>}
       { (sessionStorage.getItem('isAdmin')==='true') && <li>
          <Link to="/add-rent">
            <i className="fas fa-plus"></i>
            Add Rent House
          </Link>
        </li>}
        {(sessionStorage.getItem('isAdmin')==='false') && <li>
          <Link to="/my-rent">
            <i className="fas fa-home"></i>
            My Rent
          </Link>
        </li>}
      </ul>
    </div>
  );
};

export default DashboardSidebar;

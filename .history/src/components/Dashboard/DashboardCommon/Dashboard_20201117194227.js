import React from "react";
import AddRent from "../AddRentHouse/AddRent";
import MyRent from "../MyRent/MyRent";

const Dashboard = () => {
  return (
    <div>
      {(sessionStorage.getItem('isAdmin')==='true') && <AddRent />}
      {(sessionStorage.getItem('isAdmin')==='false') && <MyRent></MyRent>}
    </div>
  );
};

export default Dashboard;

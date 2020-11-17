import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const MyRentLists = ({myRent}) => {
  //{myRent}
  return (
    <tr>
      <td>{myRent.title}</td>
      <td> $ {myRent.price}</td>
      <Link to={`/view-details/${myRent.houseId}`}><Button className='login-button bg-primary text-white rounded-sm mt-1 ml-1'>View Details</Button></Link>
    </tr>
  );
};

export default MyRentLists;

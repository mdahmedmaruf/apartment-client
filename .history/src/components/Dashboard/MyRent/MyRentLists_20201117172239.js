import React from "react";
import { Button } from "react-bootstrap";

const MyRentLists = ({myRent}) => {
  //{myRent}

  const id = myRent.houseId;
  return (
    <tr>
      <td>{myRent.title}</td>
      <td> $ {myRent.price}</td>
      <Button className='login-button bg-primary text-white rounded-sm mt-1 ml-1'>View Details</Button>
    </tr>
  );
};

export default MyRentLists;

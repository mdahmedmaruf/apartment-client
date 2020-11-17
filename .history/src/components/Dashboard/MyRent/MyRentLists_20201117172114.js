import React from "react";

const MyRentLists = ({myRent}) => {
  //{myRent}
  return (
    <tr>
      <td>{myRent.title}</td>
      <td>{myRent.price}</td>
      <Button className='login-button bg-primary text-white rounded-sm mt-1 ml-1'>View Details</Button>
    </tr>
  );
};

export default MyRentLists;

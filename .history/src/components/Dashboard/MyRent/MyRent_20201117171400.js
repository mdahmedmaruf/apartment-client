import React, { useContext, useEffect, useState } from "react";
import { Button, Col, Row, Table } from "react-bootstrap";
import { UserContext } from "../../../App";
import DashboardNav from "../DashboardCommon/DashboardNav";
import DashboardSidebar from "../DashboardCommon/DashboardSidebar";
//import MyRentLists from "./MyRentLists";

const MyRent = () => {
   const [myRents, setMyRents] = useState([]);
   
   const [loggedInUser, setLoggedInUser] = useContext(UserContext);

     useEffect(() => {
      fetch(`http://localhost:5000/my-booking-house?email=${loggedInUser.email||loggedInUser.currentEmail}`)
        .then((res) => res.json())
        .then((data) => setMyRents(data));
    }, []);
  
    console.log(myRents);

  return (
    <>
      <DashboardNav />
      <Row>
        <Col md={3}>
          <DashboardSidebar />
        </Col>
        <Col md={9}>
          <h3 className="my-5 mx-5">My Rent</h3>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>House name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* {myRents.map((myRent) => (
                <MyRentLists myRent={myRent} key={myRent.name} />
              ))} */}

              {/*<tr>
                <td>Washington Avenue</td>
                <td>$195</td>
               
              </tr>
              <tr>
                <td>Washington Avenue</td>
                <td>$195</td>
                <Button className='login-button bg-primary text-white rounded-sm mt-1 ml-1'>View Details</Button>
              </tr>
              <tr>
                <td>Washington Avenue</td>
                <td>$195</td>
                <Button className='login-button bg-primary text-white rounded-sm mt-1 ml-1'>View Details</Button>
              </tr>*/}
            </tbody>
          </Table>
        </Col>
      </Row>
    </>
  );
};

export default MyRent;

import React from "react";
import { Button, Col, Row, Table } from "react-bootstrap";
import DashboardNav from "../DashboardCommon/DashboardNav";
import DashboardSidebar from "../DashboardCommon/DashboardSidebar";
//import MyRentLists from "./MyRentLists";

const MyRent = () => {
  //   const [myRents, setMyRents] = useState([]);

  //   useEffect(() => {
  //     fetch("")
  //       .then((res) => res.json())
  //       .then((data) => setMyRents(data));
  //   }, []);
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

              <tr>
                <td>Washington Avenue</td>
                <td>$195</td>
                <Button className='details-button'>View Details</Button>
              </tr>
              <tr>
                <td>Washington Avenue</td>
                <td>$195</td>
                <td>View Details</td>
              </tr>
              <tr>
                <td>Washington Avenue</td>
                <td>$195</td>
                <td>View Details</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </>
  );
};

export default MyRent;

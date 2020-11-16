import React from "react";
import { Col, Row } from "react-bootstrap";
import DashboardNav from "../DashboardCommon/DashboardNav";
import DashboardSidebar from "../DashboardCommon/DashboardSidebar";
import AddRentForm from "./AddRentForm";

const AddRent = () => {
  return (
    <>
      <DashboardNav />

      <Row>
        <Col md={3}>
          <DashboardSidebar />
        </Col>
        <Col md={9} className="dashboard-content">
          <h3 className="my-5 mx-5">Add Rent Home</h3>
          <AddRentForm />
        </Col>
      </Row>
    </>
  );
};

export default AddRent;

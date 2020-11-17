import React, { useContext, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Apartment from "../components/ApartmentLists";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Service from "../components/Service";
import data from "../homelist.data";
import jwt_decode from "jwt-decode";
import { UserContext } from "../App";

const Home = () => {
  
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  
  const [allHouse,setAllHouse] = useState([]);

  const token = sessionStorage.getItem('token');
  if(token){
      const decodedToken = jwt_decode(token);
      loggedInUser.currentName = decodedToken.name;
      loggedInUser.currentEmail = decodedToken.email;
      loggedInUser.currentPhotoUrl = decodedToken.picture;
      setLoggedInUser(loggedInUser);
  }
  
   sessionStorage.setItem('isAdmin',false);
   

   useEffect(()=>{
       fetch('http://localhost:5000/check-admin',{
         method: 'POST',
         headers: {'Content-Type': 'application/json'},
         body: JSON.stringify({email:(loggedInUser.email||loggedInUser.currentEmail)})
       }).then(response => response.json())
       .then(data => sessionStorage.setItem('isAdmin',data));
   },[])
   

   useEffect(()=>{
       fetch('http://localhost:5000/all-house')
       .then(response=> response.json())
       .then(data=>setAllHouse(data));
   },[])



  return (
    <>
      <Header />
      <Banner />
      <Container>
        <div className="home-list-title text-center py-5">
          <p className="text-primary">House Rent</p>
          <h3>
            Discover the latest Rent <br />
            available today
          </h3>
        </div>
        <Row>
          {data.map((apartment) => (
            <Col key={apartment._id} sm={12} md={6} lg={4} xl={4}>
              <Apartment apartment={apartment} />
            </Col>
          ))}
        </Row>
        <Service />
      </Container>
      <Footer />
    </>
  );
};

export default Home;

//src={`data:image/jpeg;base64,${service.image.img}`}
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
import loader from "../images/loader.gif";
import './Home.css'
import { useDispatch, useSelector } from "react-redux"; 
import { listHomes } from '../actions/HomeActions';
const Home = () => {
  

  const dispatch = useDispatch(); 
  const homeList = useSelector(state => state.homeList);
  const { loading,error, homes } = homeList;


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
       fetch('https://immense-scrubland-81187.herokuapp.com/check-admin',{
         method: 'POST',
         headers: {'Content-Type': 'application/json'},
         body: JSON.stringify({email:(loggedInUser.email||loggedInUser.currentEmail)})
       }).then(response => response.json())
       .then(data => sessionStorage.setItem('isAdmin',data));
   },[])
   

  /* useEffect(()=>{
       fetch('https://immense-scrubland-81187.herokuapp.com/all-house')
       .then(response=> response.json())
       .then(data=>setAllHouse(data));
   },[])*/

   useEffect(()=>{ dispatch(listHomes()) },[dispatch])

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
          { houses.length ===0 ? <img className='img-fluid w-50 loader-section' src={loader} alt=""/> : houses.map((apartment) => (
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
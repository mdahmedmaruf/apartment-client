import React, { useContext, useState } from "react";
import { Button, Col, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { UserContext } from "../../../App";

const AddRentForm = () => {
  
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  

  const [fileName , setFileName] = useState('Thumbnail');

  const [file ,setFile] = useState('');

  const { register, handleSubmit } = useForm();
  
  const onChange = (event) =>{
    setFile(event.target.files[0]);
    setFileName(event.target.files[0].name);
  } 
  const onSubmit = (data) =>{
        const formData = new FormData();
        formData.append('file',file);
        formData.append('title',data.title);
        formData.append('price',data.price);
        formData.append('location',data.location);
        formData.append('bedroom',data.bedroom);
        formData.append('bathroom',data.bathroom);
       
      
      fetch('https://immense-scrubland-81187.herokuapp.com/add-rent-house',{
        method: 'POST',
        body: formData
      }).then(response => response.json())
      .then(result => console.log(result));

  };


  return (
    <Form className="rent-form" onSubmit={handleSubmit(onSubmit)}>
      <Form.Row>
        <Form.Group as={Col} controlId="formTitle">
          <Form.Label>Service Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter title"
            name="title"
            ref={register}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formPrice">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="text"
            placeholder="Price"
            name="price"
            ref={register}
          />
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} controlId="fromLocation">
          <Form.Label>Location</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter location"
            name="location"
            ref={register}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formBed">
          <Form.Label>No of Bedroom</Form.Label>
          <Form.Control
            type="text"
            placeholder="No of Bedroom"
            name="bedroom"
            ref={register}
          />
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} controlId="fromBath">
          <Form.Label>No of Bathroom</Form.Label>
          <Form.Control
            type="text"
            placeholder="No of Bathroom"
            name="bathroom"
            ref={register}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formThumb">
          <Form.Label>Thumbnail</Form.Label>
          <Form.File
            id="custom-file"
            label={fileName}
            role="button"
            custom
            name="thumb"
            ref={register}
            onChange={onChange}
          />
        </Form.Group>
      </Form.Row>

      <Button className="bg-primary rounded-sm" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default AddRentForm;

import React, { useState } from "react";
import { Button, Col, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

const AddRentForm = () => {
    
  const [fileName , setFileName] = useState('Upload image');

  const [file ,setFile] = useState('');

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  const onChange = (event) =>{
    setFile(event.target.files[0]);
    setFileName(event.target.files[0].name);
  } 



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
            label="Add Thumbnail"
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

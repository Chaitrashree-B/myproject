import React, { useState } from 'react';
import { Container, Form, FormGroup, Label, Input, Button, Modal, ModalHeader, ModalBody } from 'reactstrap';

import './NewTicketPage.css'; // Import the custom CSS file for NewTicketPage

const NewTicketPage = () => {
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform submit logic here
    console.log('New ticket submitted successfully');
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleVehicleRegistrationChange = (e) => {
    const input = e.target.value;
    const formattedInput = input.replace(/\s/g, '').toUpperCase(); // Remove spaces and convert to uppercase
    e.target.value = formattedInput;
  };

  return (
    <Container className="mt-5">
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="leadSource">Lead Source</Label>
          <Input type="select" id="leadSource">
            <option value="Web">Web</option>
            <option value="Chat">Chat</option>
            <option value="Call">Call</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input type="text" id="name" placeholder="Enter your name" required />
        </FormGroup>
        <FormGroup>
          <Label for="contactNumber">Contact Number</Label>
          <Input type="tel" id="contactNumber" placeholder="Enter your contact number" required />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email address</Label>
          <Input type="email" id="email" placeholder="Enter your email address" required />
        </FormGroup>
        <FormGroup>
          <Label for="vehicleMake">Vehicle Make</Label>
          <Input type="text" id="vehicleMake" placeholder="Enter the vehicle make" required />
        </FormGroup>
        <FormGroup>
          <Label for="vehicleRegistration">Vehicle Registration Number</Label>
          <Input
            type="text"
            id="vehicleRegistration"
            placeholder="Enter the vehicle registration number"
            onChange={handleVehicleRegistrationChange} // Add onChange event handler
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="breakdownIssue">Breakdown Issue</Label>
          <Input type="text" id="breakdownIssue" placeholder="Enter the breakdown issue" required />
        </FormGroup>
        <FormGroup>
          <Label for="location">Location</Label>
          <Input type="text" id="location" placeholder="Enter the location" required />
        </FormGroup>
        <FormGroup>
          <Label for="serviceFee">Service Fee</Label>
          <Input type="text" id="serviceFee" placeholder="Enter the service fee" />
        </FormGroup>
        <FormGroup>
          <Label for="assistanceTime">Assistance Time</Label>
          <Input type="text" id="assistanceTime" value={new Date().toLocaleString()} disabled />
        </FormGroup>
        <FormGroup>
          <Label for="comments">Comments</Label>
          <Input type="textarea" id="comments" rows={4} placeholder="Enter any additional comments" />
        </FormGroup>
        <Button color="primary" type="submit" block>Submit</Button>
      </Form>
      <Modal isOpen={showModal} toggle={closeModal}>
        <ModalHeader toggle={closeModal}>Success</ModalHeader>
        <ModalBody>
          New Task Created Successfully
        </ModalBody>
      </Modal>
    </Container>
  );
};

export default NewTicketPage;

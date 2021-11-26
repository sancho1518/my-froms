import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class EmployeeDataForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: this.props.dataList.firstName || "",
      lastName: this.props.dataList.lastName || "",
      email: this.props.dataList.email || "",
      phoneNumber: this.props.dataList.phoneNumber || "",
      homeAddress: this.props.dataList.homeAddress || "",
      jobRole: this.props.dataList.jobRole || "",
      currentSalary: this.props.dataList.currentSalary || "",
      id: props.dataList.id || "",
    };
  }

  handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({ [name]:value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.editData(this.state);
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      homeAddress: "",
      jobRole: "",
      currentSalary: "",
    });
    this.props.closeModal();
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group className="mb-3 form" controlId="formGridFirstName">
          <Form.Label className="formLabel">First Name:</Form.Label>
          <Form.Control
            type="firstName"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleChange}
            placeholder="Enter First Name"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridLastName">
          <Form.Label className="formLabel">Last Name:</Form.Label>
          <Form.Control
            type="lastName"
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleChange}
            placeholder="Enter Last Name"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridEmail">
          <Form.Label className="formLabel">Email:</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridPhoneNUmber">
          <Form.Label className="formLabel">Phone Number:</Form.Label>
          <Form.Control
            type="number"
            name="phoneNumber"
            value={this.state.phoneNumber}
            onChange={this.handleChange}
            placeholder="Enter Phone Nnmber"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridHomeAddress">
          <Form.Label className="formLabel">Home Address:</Form.Label>
          <Form.Control
            type="homeAddress"
            name="homeAddress"
            value={this.state.homeAddress}
            onChange={this.handleChange}
            placeholder="1234 Main St"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridJobRole">
          <Form.Label className="formLabel">Job Role:</Form.Label>
          <Form.Control
            type="text"
            name="jobRole"
            value={this.state.jobRole}
            onChange={this.handleChange}
            placeholder="Enter Job Role"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridCurrentSalary">
          <Form.Label className="formLabel">Current Salary:</Form.Label>
          <Form.Control
            type="text"
            name="currentSalary"
            value={this.state.currentSalary}
            onChange={this.handleChange}
            placeholder="Enter Current Salary"
          />
        </Form.Group>

        <Button className="formSubmit" variant="primary" type="submit">
          Save Changes
        </Button>
      </Form>
    );
  }
}

export default EmployeeDataForm;
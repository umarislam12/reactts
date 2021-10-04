// @ts-nocheck
import React from "react";
import { Select, Form,FormControl,FormGroup } from "react-bootstrap";
export default function CustomForm() {
  return (
    <div>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>First name</Form.Label>
    <Form.Control type="text" placeholder="Enter first name" />
    <Form.Text className="text-muted">
     Please enter first name
    </Form.Text>
  </Form.Group>
        <div>
          <input placeholder="Enter your Last name" />
        </div>
        <div>
          <input placeholder="XXXXX-XXXXXXX-X" />
        </div>
        <Form.Select size="lg">
          <option>Large select</option>
        </Form.Select>
        <input type="date/time" />
        <input placeholder="03xx-xxxxxxx" />

        <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

        <div className="form-group">
          <div></div>
        </div>
        <input />
      </Form>
    </div>
  );
}

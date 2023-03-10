import TextArea from "@uiw/react-md-editor/lib/components/TextArea";
import React, { Fragment, useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import Breadcrumb from "../common/breadcrumb";
import TabsetUser from "./tabset-user";

const Create_Store = () => {
  const [seller, setSeller] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const name = form.name.value;
    const address = form.address.value;
    const description = form.description.value;
    const user = seller.name;
    const userID = seller._id;

    const data = {
      name,
      address,
      description,
      user,
      userID,
    };

    fetch(`http://localhost:5055/api/store/add/${seller._id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        window.location.reload(true);
        console.log(data);
      });
  };

  useEffect(() => {
    const usr = localStorage.getItem("user-id");
    fetch(`http://localhost:5055/api/admin/${usr}`)
      .then((res) => res.json())
      .then((data) => setSeller(data));
  }, []);
  return (
    <Fragment>
      <Breadcrumb title="Create User" parent="Users" />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader>
                <h5> Add Store</h5>
              </CardHeader>
              <CardBody>
                <Form
                  className="needs-validation user-add"
                  noValidate=""
                  onSubmit={handleSubmit}
                >
                  <h4>Store Details</h4>
                  <FormGroup className="row">
                    <Label className="col-xl-3 col-md-4">
                      <span>*</span> Name
                    </Label>
                    <div className="col-xl-8 col-md-7">
                      <Input
                        // onChange={(e) => setFirstName(e.target.value)}
                        className="form-control"
                        id="validationCustom0"
                        type="text"
                        required=""
                        name="name"
                      />
                    </div>
                  </FormGroup>
                  <FormGroup className="row">
                    <Label className="col-xl-3 col-md-4">
                      <span>*</span> Address
                    </Label>
                    <div className="col-xl-8 col-md-7">
                      <Input
                        // onChange={(e) => setLastName(e.target.value)}
                        className="form-control"
                        id="validationCustom1"
                        type="text"
                        required=""
                        name="address"
                      />
                    </div>
                  </FormGroup>
                  <FormGroup className="row">
                    <Label className="col-xl-3 col-md-4">
                      <span>*</span> Description
                    </Label>
                    <div className="col-xl-8 col-md-7">
                      {/* <Input
                        // onChange={(e) => setEmail(e.target.value)}
                        className="form-control"
                        id="validationCustom2"
                        type="text"
                        required=""
                      /> */}
                      <textarea rows="" cols="" name="description"></textarea>
                    </div>
                  </FormGroup>
                  {/* <FormGroup className="row">
                    <Label className="col-xl-3 col-md-4">
                      <span>*</span> Password
                    </Label>
                    <div className="col-xl-8 col-md-7">
                      <Input
                        // onChange={(e) => setPassword(e.target.value)}
                        className="form-control"
                        id="validationCustom3"
                        type="password"
                        required=""
                      />
                    </div>
                  </FormGroup> */}
                  {/* <FormGroup className="row">
                    <Label className="col-xl-3 col-md-4">
                      <span>*</span> Confirm Password
                    </Label>
                    <div className="col-xl-8 col-md-7">
                      <Input
                        className="form-control"
                        id="validationCustom4"
                        type="password"
                      />
                    </div>
                  </FormGroup> */}
                  <div className="pull-right">
                    <button
                      className="btn btn-warning"
                      type="submit"
                      color="primary"
                    >
                      Add Store
                    </button>
                  </div>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Create_Store;

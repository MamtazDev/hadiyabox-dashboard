import React, { Fragment, useEffect, useState } from "react";
import Breadcrumb from "../../common/breadcrumb";
import data from "../../../assets/data/digital-sub-category";
import Datatable from "../../common/datatable";
import {
  Modal,
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
} from "reactstrap";

const Digital_sub_category = () => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => {
    setOpen(true);
  };

  const onCloseModal = () => {
    setOpen(false);
  };

  const [user, setUser] = useState("");
  const [userData, setUserData] = useState("");

  const [sellerName, setSellerName] = useState("");
  const [amount, setAmount] = useState("");

  const handleWithDrawSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    console.log("hello");
    const name = form.sellerName.value;
    const amount = parseInt(form.amount.value);

    const data = {
      name,
      amount,
    };

    fetch(`http://localhost:5055/api/withdraw/add/${user}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 200) {
          window.location.reload(true);
        }
      });
  };

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    setUser(userId);

    fetch(`http://localhost:5055/api/admin/${userId}`).then((res) =>
      res.json().then((data) => setUserData(data))
    );
  }, []);

  return (
    <Fragment>
      <Breadcrumb title="Withdraw Request" parent="Digital" />
      {/* <!-- Container-fluid starts--> */}
      <Container fluid="true">
        <Row>
          <Card>
            <CardBody>
              <Form onSubmit={handleWithDrawSubmit}>
                <FormGroup>
                  <Label htmlFor="recipient-name" className="col-form-label">
                    Name:
                  </Label>
                  <Input
                    type="text"
                    className="form-control"
                    name="sellerName"
                    // onChange={(e) => setSellerName(e.target.value)}
                  />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="recipient-name" className="col-form-label">
                    Withdraw Ammount:
                  </Label>
                  <Input
                    type="text"
                    className="form-control"
                    name="amount"
                    // onChange={(e) => setAmount(e.target.value)}
                  />
                </FormGroup>
                {/* <FormGroup>
                          <Label
                            htmlFor="recipient-name"
                            className="col-form-label"
                          >
                            Price :
                          </Label>
                          <Input
                            type="text"
                            className="form-control"
                            // onChange={(e) => setProductPrice(e.target.value)}
                          />
                        </FormGroup> */}
                {/* <FormGroup>
                          <Label
                            htmlFor="message-text"
                            className="col-form-label"
                          >
                            Category Image :
                          </Label>
                          <Input
                            className="form-control"
                            id="validationCustom02"
                            type="file"
                            onChange={(e) => setCategoryImage(e.target.value)}
                          />
                        </FormGroup> */}
                <button type="submit" className="btn btn-secondary">
                  Request Withdraw
                </button>
              </Form>
            </CardBody>
          </Card>
        </Row>
      </Container>
      {/* <!-- Container-fluid Ends--> */}
    </Fragment>
  );
};

export default Digital_sub_category;

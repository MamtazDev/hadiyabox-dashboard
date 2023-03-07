import React, { Fragment, useEffect, useState } from "react";
import Breadcrumb from "../common/breadcrumb";
import data from "../../assets/data/orders";
import Datatable from "../common/datatable";
import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";

const Orders = () => {
  const [wallet, setWallet] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5055/api/orders/wallet/all")
      .then((res) => res.json())
      .then((data) => setWallet(data));
  }, []);
  console.log("wallet", wallet);

  const newWallet = wallet.map((item) => {
    return { ...item.products[0] };
  });

  return (
    <Fragment>
      <Breadcrumb title="Orders" parent="Sales" />

      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader>
                <h5>Manage Order</h5>
              </CardHeader>
              <CardBody className="order-datatable">
                <Datatable
                  multiSelectOption={"wallet"}
                  myData={newWallet}
                  pageSize={10}
                  pagination={true}
                  class="-striped -highlight"
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Orders;

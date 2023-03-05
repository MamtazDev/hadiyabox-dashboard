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

  const newwallet = [];

  wallet.map((item) => {
    // if item.products.length

    console.log(item.products.length);
    if (item.products.length > 0) return;
    else {
      // var newWl = [ item?.products[0]]
      console.log("item?.products[0]", item?.products);

      newwallet.push();

      console.log("Data: ", newwallet);
      // return setWallet(newWl)
      // return{...item?.products[0]}
    }

    // return{...item?.products[0]}
  });

  // console.log("new wallet", newwallet);
  // console.log("updated wallet file",  wallet);
  // console.log("updated wallet",  wallet[0]);
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
                  multiSelectOption={false}
                  myData={wallet}
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

import React, { Fragment, useEffect, useState } from "react";
import Breadcrumb from "../common/breadcrumb";
import data from "../../assets/data/sales-transactions";
import Datatable from "../common/datatable";
import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";

const Transactions_sales = () => {
  const [ticket, setTicket] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5055/api/ticket/")
      .then((res) => res.json())
      .then((data) => setTicket(data));
  }, []);
  return (
    <Fragment>
      <Breadcrumb title="Transactions" parent="Sales" />

      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader>
                <h5>Transaction Details</h5>
              </CardHeader>
              <div id="batchDelete" className="transactions">
                <h2>something</h2>
                {/* <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">First</th>
                      <th scope="col">Last</th>
                      <th scope="col">Handle</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td colspan="2">Larry the Bird</td>
                      <td>@twitter</td>
                    </tr>
                  </tbody>
                </table> */}
                <Datatable
                  listPage={true}
                  myData={ticket}
                  pageSize={10}
                  pagination={true}
                  class="-striped -highlight"
                />
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Transactions_sales;

import React, { Fragment, useEffect, useState } from "react";
import Breadcrumb from "../common/breadcrumb";
import data from "../../assets/data/listPages";
import Datatable from "../common/datatable";
import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";

const ListPages = () => {
  const [ticket, setTicket] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5055/api/ticket/")
      .then((res) => res.json())
      .then((data) => setTicket(data));
  }, []);
  return (
    <Fragment>
      <Breadcrumb title="Ticket Pages" parent="Ticket" />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader>
                <h5>Ticket List</h5>
              </CardHeader>
              <CardBody>
                <div
                  id="batchDelete"
                  className="category-table order-table coupon-list-delete"
                >
                  <Datatable
                    // multiSelectOption={false}
                    listPage={true}
                    myData={ticket}
                    pageSize={7}
                    pagination={false}
                    class="-striped -highlight"
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default ListPages;

import React, { Fragment, useState } from "react";
import { Tabs, TabList, TabPanel, Tab } from "react-tabs";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button, Col, Form, Input, Label, Row } from "reactstrap";

const Tabset = () => {
  const [startDate, setstartDate] = useState(new Date());
  const [endDate, setendDate] = useState(new Date());

  const handleStartDate = (date) => {
    setstartDate(date);
  };

  const handleEndDate = (date) => {
    setendDate(date);
  };

  const clickActive = (event) => {
    document.querySelector(".nav-link").classList.remove("show");
    event.target.classList.add("show");
  };
  const [title, setTitle] = useState("");
  const [logo, setLogo] = useState("");
  const [couponCode, setCouponCode] = useState("");
  const [endTime, setEndTime] = useState("");
  const [discountPercentage, setDiscountPercentage] = useState("");
  const [minimumAmount, setMinimumAmount] = useState("");
  const [productType, setproductType] = useState("");

  const addCoupon = () => {
    const couponData = {
      title,
      logo,
      couponCode,
      endTime,
      discountPercentage,
      minimumAmount,
      productType,
    };

    fetch("http://localhost:5055/api/coupon/add",{
		method:"POST",
		headers:{
			"content-type":"application/json"
		},
		body:JSON.stringify(couponData)
	})
	.then(res=>res.json())
	.then(data=>console.log(data))

  };

  return (
    <Fragment>
      <Tabs>
        <TabList className="nav nav-tabs tab-coupon">
          <Tab className="nav-link" onClick={(e) => clickActive(e)}>
            General
          </Tab>
          <Tab className="nav-link" onClick={(e) => clickActive(e)}>
            Restriction
          </Tab>
          <Tab className="nav-link" onClick={(e) => clickActive(e)}>
            Usage
          </Tab>
        </TabList>

        <TabPanel>
          <div className="tab-pane fade active show">
            <Form className="needs-validation" noValidate="">
              <h4>General</h4>
              <Row>
                <Col sm="12">
                  <div className="form-group row">
                    <Label className="col-xl-3 col-md-4">
                      <span>*</span> Title
                    </Label>
                    <div className="col-md-7">
                      <Input
                        className="form-control"
                        onChange={(e) => {
                          setTitle(e.target.value);
                        }}
                        id="validationCustom0"
                        type="text"
                        required=""
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <Label className="col-xl-3 col-md-4">
                      <span>*</span> Logo
                    </Label>
                    <div className="col-md-7">
                      <Input
                        className="form-control"
                        id="validationCustom0"
                        type="text"
                        onChange={(e) => {
                          setLogo(e.target.value);
                        }}
                        required=""
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <Label className="col-xl-3 col-md-4">
                      <span>*</span> Coupon Code
                    </Label>
                    <div className="col-md-7">
                      <Input
                        className="form-control"
                        id="validationCustom1"
                        type="text"
                        onChange={(e) => {
                          setCouponCode(e.target.value);
                        }}
                        required=""
                      />
                    </div>
                    <div className="valid-feedback">
                      Please Provide a Valid Coupon Code.
                    </div>
                  </div>
                  {/* <div className="form-group row">
                    <Label className="col-xl-3 col-md-4">Start Date</Label>
                    <div className="col-md-7">
                      <DatePicker
                        selected={startDate}
                        onChange={handleStartDate}
                      />
                    </div>
                  </div> */}
                  <div className="form-group row">
                    <Label className="col-xl-3 col-md-4">End Time</Label>
                    <div className="col-md-7">
                      {/* <DatePicker
                        selected={endDate}
                        endDate={endDate}
                        onChange={handleEndDate}
                      /> */}
                      <Input
                        className="form-control"
                        id="validationCustom1"
                        type="date"
                        onChange={(e) => {
							setEndTime(e.target.value);
                        }}
                        required=""
                      />
                    </div>
                  </div>
                  {/* <div className="form-group row">
                    <Label className="col-xl-3 col-md-4">Free Shipping</Label>
                    <div className="col-md-7">
                      <Label className="d-block">
                        <Input
                          className="checkbox_animated"
                          id="chk-ani2"
                          type="checkbox"
                        />
                        Allow Free Shipping
                      </Label>
                    </div>
                  </div> */}
                  <div className="form-group row">
                    <Label className="col-xl-3 col-md-4">
                      Discount Percentage
                    </Label>
                    <div className="col-md-7">
                      <Input
                        className="form-control"
                        type="number"
                        onChange={(e) => {
                          setDiscountPercentage(e.target.value);
                        }}
                        required=""
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <Label className="col-xl-3 col-md-4">Minimum Amount</Label>
                    <div className="col-md-7">
                      <Input
                        className="form-control"
                        type="number"
                        onChange={(e) => {
                          setMinimumAmount(e.target.value);
                        }}
                        required=""
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <Label className="col-xl-3 col-md-4">Product Type</Label>
                    <div className="col-md-7">
                      <select
                        onChange={(e) => {
                          setproductType(e.target.value);
                        }}
                        className="form-select"
                        required=""
                      >
                        <option value="">--Select--</option>
                        <option value="1">A</option>
                        <option value="2">B</option>
                        <option value="2">C</option>
                      </select>
                    </div>
                  </div>
                  {/* <div className="form-group row">
                    <Label className="col-xl-3 col-md-4">Status</Label>
                    <div className="col-md-7">
                      <Label className="d-block">
                        <Input
                          className="checkbox_animated"
                          id="chk-ani2"
                          type="checkbox"
                        />
                        Enable the Coupon
                      </Label>
                    </div>
                  </div> */}
                </Col>
              </Row>
            </Form>
          </div>
        </TabPanel>
        <TabPanel>
          <Form className="needs-validation" noValidate="">
            <h4>Restriction</h4>
            <div className="form-group row">
              <Label className="col-xl-3 col-md-4">Products</Label>
              <div className="col-md-7">
                <Input
                  className="form-control"
                  id="validationCustom3"
                  type="text"
                  required=""
                />
              </div>
              <div className="valid-feedback">
                Please Provide a Product Name.
              </div>
            </div>
            <div className="form-group row">
              <Label className="col-xl-3 col-md-4">Category</Label>
              <div className="col-md-7">
                <select className="form-select" required="">
                  <option value="">--Select--</option>
                  <option value="1">Electronics</option>
                  <option value="2">Clothes</option>
                  <option value="2">Shoes</option>
                  <option value="2">Digital</option>
                </select>
              </div>
            </div>
            <div className="form-group row">
              <Label className="col-xl-3 col-md-4">Minimum Spend</Label>
              <div className="col-md-7">
                <Input
                  className="form-control"
                  id="validationCustom4"
                  type="number"
                />
              </div>
            </div>
            <div className="form-group row">
              <Label className="col-xl-3 col-md-4">Maximum Spend</Label>
              <div className="col-md-7">
                <Input
                  className="form-control"
                  id="validationCustom5"
                  type="number"
                />
              </div>
            </div>
          </Form>
        </TabPanel>
        <TabPanel>
          <Form className="needs-validation" noValidate="">
            <h4>Usage Limits</h4>
            <div className="form-group row">
              <Label className="col-xl-3 col-md-4">Per Limit</Label>
              <div className="col-md-7">
                <Input
                  className="form-control"
                  id="validationCustom6"
                  type="number"
                />
              </div>
            </div>
            <div className="form-group row">
              <Label className="col-xl-3 col-md-4">Per Customer</Label>
              <div className="col-md-7">
                <Input
                  className="form-control"
                  id="validationCustom7"
                  type="number"
                />
              </div>
            </div>
          </Form>
        </TabPanel>
      </Tabs>
      <div className="pull-right">
        <Button onClick={addCoupon} type="button" color="primary">
          Save
        </Button>
      </div>
    </Fragment>
  );
};

export default Tabset;

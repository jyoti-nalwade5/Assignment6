/* eslint linebreak-style: ["error", "windows"] */
import React from 'react';
import {
  Button, FormGroup, FormControl, ControlLabel, Form, Row, Col, ButtonToolbar
} from 'react-bootstrap';

export default class ProductAdd extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const form = document.forms.productAdd;

    const product = {
      name: form.productName.value,
      pricePerUnit: form.pricePerUnit.value.substr(1),
      category: form.category.value,
      imageUrl: form.imageUrl.value,
    };
    const { createProduct } = this.props;
    createProduct(product);
    form.productName.value = '';
    form.pricePerUnit.value = '$';
    form.category.value = '';
    form.imageUrl.value = '';
  }

  render() {
    return (
      <Form name="productAdd" >
        <Row>
        <Col xs={6} sm={4} md={3} lg={6}>
        <FormGroup>
          <ControlLabel>Category</ControlLabel>
            <FormControl
            componentClass="select"
            name="category"
            autoFocus
            >
              <option value="Shirts">Shirts</option>
              <option value="Jeans">Jeans</option>
              <option value="Jackets">Jackets</option>
              <option value="Sweaters">Sweaters</option>
              <option value="Accessories">Accessories</option>
            </FormControl>
        </FormGroup>
        </Col>
        <Col xs={6} sm={4} md={3} lg={6}>
        <FormGroup>
            <ControlLabel>Product Name</ControlLabel>
              <FormControl name="productName" />
        </FormGroup>
        </Col>
        </Row>
        <Row>
        <Col xs={6} sm={4} md={3} lg={6}> 
        <FormGroup>
            <ControlLabel>Price Per Unit (in USD)</ControlLabel>
            <FormControl name="pricePerUnit" type="text" defaultValue="$"/>
        </FormGroup>
        </Col>
        <Col xs={6} sm={4} md={3} lg={6}>
        <FormGroup>
            <ControlLabel>Image URL</ControlLabel>
            <FormControl name="imageUrl" />
        </FormGroup>
        </Col>
        </Row>
        <Row>
        <Col xs={6} sm={4} md={3} lg={5}></Col>
        <Col xs={6} sm={4} md={3} lg={5}>
        <FormGroup>
          <ControlLabel>&nbsp;</ControlLabel>
            <ButtonToolbar>
              <Button bsStyle="primary" type="submit" onClick={this.handleSubmit}>Add Product</Button> 
            </ButtonToolbar>
        </FormGroup>
        </Col>
        </Row>
      </Form>
    );
  }
}

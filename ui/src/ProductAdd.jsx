/* eslint linebreak-style: ["error", "windows"] */
import React from 'react';
import {
  Button, FormGroup, FormControl, ControlLabel
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
      <form name="productAdd" onSubmit={this.handleSubmit}>
      <div>
        <FormGroup>
          <ControlLabel>Category:</ControlLabel>
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
        <FormGroup>
            <ControlLabel>Product Name</ControlLabel>
              <FormControl name="productName" />
        </FormGroup>
        <FormGroup>
            <ControlLabel>Price Per Unit (in USD)</ControlLabel>
            <FormControl name="pricePerUnit" type="text" defaultValue="$"/>
        </FormGroup>
        <FormGroup>
            <ControlLabel>Image URL</ControlLabel>
            <FormControl name="imageUrl" />
        </FormGroup>
        <Button bsStyle="primary" type="submit">Add Product</Button> 
      </div>
      </form>
    );
  }
}

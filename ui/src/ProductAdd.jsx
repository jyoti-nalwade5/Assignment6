/* eslint linebreak-style: ["error", "windows"] */
import React from 'react';
import { Button } from 'react-bootstrap';

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
        <div className="formContainer">
          <div className="formCol">
            Category:
            <br />
            <select id="menu" name="category">
              <option value="Shirts">Shirts</option>
              <option value="Jeans">Jeans</option>
              <option value="Jackets">Jackets</option>
              <option value="Sweaters">Sweaters</option>
              <option value="Accessories">Accessories</option>
            </select>
            <br />
            <br />
            Product Name:
            <br />
            <input type="text" name="productName" />
            <br />
          </div>
                &nbsp;&nbsp;
          <div className="formCol">
            Price Per Unit:
            <br />
            <input type="text" name="pricePerUnit" defaultValue="$" />
            <br />
            <br />
            Image URL:
            <br />
            <input type="text" name="imageUrl" />
            <br />
          </div>
        </div>
        <br />
        <Button bsStyle="primary" type="submit">Add Product</Button>
      </form>
    );
  }
}

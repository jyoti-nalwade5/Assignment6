/* eslint linebreak-style: ["error", "windows"] */
import React from 'react';
import { Panel } from 'react-bootstrap';

import ProductTable from './ProductTable.jsx';
import ProductAdd from './ProductAdd.jsx';
import graphQLFetch from './graphQLFetch.js';


export default class ProductList extends React.Component {
  constructor() {
    super();
    this.state = { products: [] };
    this.createProduct = this.createProduct.bind(this);
    this.deleteProduct = this.deleteProduct.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }

  async loadData() {
    const query = `query {
              productList {
                id
                name
                pricePerUnit
                category
                imageUrl
              }
            }`;

    const data = await graphQLFetch(query);
    if (data) {
      this.setState({ products: data.productList });
    }
  }

  async createProduct(product) {
    const query = `mutation addProduct($product: ProductInputs!) {
              addProduct(product: $product) {
                  id
              }
            }`;

    const data = await graphQLFetch(query, { product });
    if (data) {
      this.loadData();
    }
  }

  async deleteProduct(id) {
    const query = `mutation deleteProduct($id: Int!) {
        deleteProduct(id: $id)
      }`;

    const data = await graphQLFetch(query, { id });
    if (data) {
      alert('Product deleted product successfully!'); // eslint-disable-line no-alert
      this.loadData();
    }
  }

  render() {
    const { products } = this.state;
    return (
      <React.Fragment>
        
        <p>Showing all available products</p>
        <hr />
        <ProductTable
          products={products}
          deleteProduct={this.deleteProduct}
        />
        <br />
        <Panel>
          <Panel.Heading>
            <Panel.Title toggle>Add a new product to inventory</Panel.Title>
          </Panel.Heading>
          <Panel.Body collapsible>
          <ProductAdd createProduct={this.createProduct} />
          </Panel.Body>
          </Panel>
      </React.Fragment>
    );
  }
}

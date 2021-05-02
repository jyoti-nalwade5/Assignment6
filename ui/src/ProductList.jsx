/* eslint linebreak-style: ["error", "windows"] */
import React from 'react';
import { Panel } from 'react-bootstrap';

import Toast from './Toast.jsx';
import ProductTable from './ProductTable.jsx';
import ProductAdd from './ProductAdd.jsx';
import graphQLFetch from './graphQLFetch.js';


export default class ProductList extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      toastVisible: false,
      toastMessage: '',
      toastType: 'info',
   };
    this.createProduct = this.createProduct.bind(this);
    this.deleteProduct = this.deleteProduct.bind(this);
    this.showSuccess = this.showSuccess.bind(this);
    this.showError = this.showError.bind(this);
    this.dismissToast = this.dismissToast.bind(this);
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

    const data = await graphQLFetch(query, this.showError);
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

    const data = await graphQLFetch(query, { product },this.showError);
    if (data) {
      this.showSuccess(`Product added successfully.`);
      this.loadData();
    }
  }

  async deleteProduct(id) {
    const query = `mutation deleteProduct($id: Int!) {
        deleteProduct(id: $id)
      }`;

    const data = await graphQLFetch(query, { id },this.showError);
    if (data) {
      this.showSuccess(`Product ${id} deleted successfully.`); 
      this.loadData();
    }
  }

  showSuccess(message) {
    this.setState({
      toastVisible: true, toastMessage: message, toastType: 'success',
    });
  }

  showError(message) {
    this.setState({
      toastVisible: true, toastMessage: message, toastType: 'danger',
    });
  }

  dismissToast() {
    this.setState({ toastVisible: false });
  }

  render() {
    const { products } = this.state;
    const { toastVisible, toastType, toastMessage } = this.state;
    return (
      <React.Fragment>
        <p>Showing all available products</p>
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
        <Toast
          showing={toastVisible}
          onDismiss={this.dismissToast}
          bsStyle={toastType}
          >
          {toastMessage}
        </Toast>
      </React.Fragment>
    );
  }
}

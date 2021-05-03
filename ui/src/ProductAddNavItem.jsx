import React from 'react';
import { withRouter } from 'react-router-dom';
import {
  NavItem, Glyphicon, Modal, Form, Row, Col, FormGroup, FormControl, ControlLabel,
  Button, ButtonToolbar, Tooltip, OverlayTrigger,
} from 'react-bootstrap';

import graphQLFetch from './graphQLFetch.js';
import Toast from './Toast.jsx';

class ProductAddNavItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showing: false,
      toastVisible: false,
      toastMessage: '',
      toastType: 'success',
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.showSuccess = this.showSuccess.bind(this);
    this.showError = this.showError.bind(this);
    this.dismissToast = this.dismissToast.bind(this);
  }

  showModal() {
    this.setState({ showing: true });
  }

  hideModal() {
    this.setState({ showing: false });
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

  async handleSubmit(e) {
        e.preventDefault();
        this.hideModal();
        const form = document.forms.productAdd;

    const product = {
      name: form.productName.value,
      pricePerUnit: form.pricePerUnit.value.substr(1),
      category: form.category.value,
      imageUrl: form.imageUrl.value,
    };
    
    const query = `mutation addProduct($product: ProductInputs!) {
        addProduct(product: $product) {
            id
        }
      }`;

    const data = await graphQLFetch(query, { product },this.showError);
        if (data) {
        this.showSuccess(`Product added successfully.`);
        const { history } = this.props;
        history.push(`/`);
        }
    form.productName.value = '';
    form.pricePerUnit.value = '$';
    form.category.value = '';
    form.imageUrl.value = '';
  }

  render() {
    const { showing } = this.state;
    const { toastVisible, toastMessage, toastType } = this.state;
    return (
      <React.Fragment>
        <NavItem onClick={this.showModal}>
          <OverlayTrigger
            placement="left"
            delayShow={1000}
            overlay={<Tooltip id="create-product">Create Product</Tooltip>}
          >
            <Glyphicon glyph="plus" />
          </OverlayTrigger>
        </NavItem>
        <Modal keyboard show={showing} onHide={this.hideModal}>
          <Modal.Header closeButton>
            <Modal.Title>Create Product</Modal.Title>
          </Modal.Header>
          <Modal.Body>
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
      </Form>
        </Modal.Body>
          <Modal.Footer>
          <Row>
            <Col xs={6} sm={4} md={3} lg={5}></Col>
            <Col xs={6} sm={4} md={3} lg={5}>
            <ButtonToolbar>
              <Button bsStyle="primary" type="submit" onClick={this.handleSubmit}>Add Product</Button> 
              <Button bsStyle="link" onClick={this.hideModal}>Cancel</Button>
            </ButtonToolbar>
            </Col>
             </Row>
          </Modal.Footer>
        </Modal>
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

export default withRouter(ProductAddNavItem);
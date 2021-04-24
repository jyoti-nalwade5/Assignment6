/* eslint linebreak-style: ["error", "windows"] */
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import {
  Button, Glyphicon, Tooltip, OverlayTrigger,
} from 'react-bootstrap';

const ProductRow = withRouter(({ product, deleteProduct, index }) => {
 
  const editTooltip = (
    <Tooltip id="edit-tooltip" placement="top">Edit Product</Tooltip>
  );
  const deleteTooltip = (
    <Tooltip id="delete-tooltip" placement="top">Delete Product</Tooltip>
  );
  return(
  <tr>
    <td>{product.name}</td>
    <td>
      $
      {product.pricePerUnit}
    </td>
    <td>{product.category}</td>
    <td><Link to={`/view/${encodeURIComponent(product.imageUrl)}`}>ViewImage</Link></td>
    <td>
      <Link to={`/edit/${product.id}`}>
        <OverlayTrigger delayShow={1000} overlay={editTooltip}>
          <Button bsSize="xsmall">
            <Glyphicon glyph="pencil" />
          </Button>
        </OverlayTrigger>
      </Link>
    </td>
    <td>
    <OverlayTrigger delayShow={1000} overlay={deleteTooltip}>
      <Button bsSize="xsmall" type="button" onClick={() => { deleteProduct(index); }}>
        <Glyphicon style={{color:'red'}} glyph="trash" />
      </Button>
    </OverlayTrigger>
    </td>
  </tr>
  );
});

export default function ProductTable({ products, deleteProduct }) {
  const productRows = products.map(product => (
    <ProductRow
      key={product.id}
      product={product}
      deleteProduct={deleteProduct}
      index={product.id}
    />
  ));

  return (
    <table className="bordered-table">
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Price</th>
          <th>Category</th>
          <th>Image</th>
          <th>Action</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {productRows}
      </tbody>
    </table>
  );
}

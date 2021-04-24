/* eslint linebreak-style: ["error", "windows"] */
import React from 'react';

export default function ProductImage({ match }) {
  const { url } = match.params;
  console.log(decodeURIComponent(url)); // eslint-disable-line no-console

  return (
    <div>
      <br />
      <br />
      <img style={{ maxWidth: '50vw' }} src={decodeURIComponent(url)} alt="" />
    </div>
  );
}

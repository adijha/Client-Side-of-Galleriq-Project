import React, { Fragment } from 'react';

export default function PaymentComplete() {
  const content = () => (
    <div class='center  jumbotron jumbotron-fluid'>
      <div class='container'>
        <h1 class='display-4'>Thanks for Purchase!</h1>
      </div>
    </div>
  );

  return <Fragment>{content()}</Fragment>;
}

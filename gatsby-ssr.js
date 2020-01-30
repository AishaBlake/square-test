import React from "react";

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <script src='https://js.squareup.com/v2/paymentform'></script>
  ]);
};
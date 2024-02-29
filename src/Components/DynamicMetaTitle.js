import React from "react";
import { Helmet } from "react-helmet-async";

const DynamicMetaTitle = ({
  title = "home",
  description = "home description",
}) => {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
};

export default DynamicMetaTitle;

import React from "react";
import { Helmet } from "react-helmet-async";

const DynamicMetaTitle = ({
  title = "home",
  description = "home description",
  metaImage,
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:image" content={metaImage} />
    </Helmet>
  );
};

export default DynamicMetaTitle;

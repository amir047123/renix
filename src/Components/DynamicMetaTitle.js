import React from "react";
import { Helmet } from "react-helmet-async";

const DynamicMetaTitle = ({
  title ,
  description ,
  metaImage,
  canonicalUrl,
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:image" content={metaImage} />
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

    </Helmet>
  );
};

export default DynamicMetaTitle;

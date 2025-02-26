import React from "react";
import AllNews from "./News/AllNews";
import useGetSeo from "../Hooks/useGetSeo";
import DynamicMetaTitle from "../Components/DynamicMetaTitle";

const NewsMedia = () => {
  const metaData = useGetSeo("media_page");
  return (
    <div>
      <DynamicMetaTitle
        title={metaData?.metaTitle}
        metaImage={metaData?.metaImage}
        description={metaData?.metaDescription}
      />
      <AllNews></AllNews>
    </div>
  );
};

export default NewsMedia;

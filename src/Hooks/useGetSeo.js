import axios from "axios";
import { useEffect, useState } from "react";
import { server_url } from "../Config/API";

const useGetSeo = (pageName) => {
  const [getSeo, setGetSeo] = useState(null);
  useEffect(() => {
    const fetchSeo = async () => {
      const { data } = await axios.get(
        `${server_url}/seo/specific?fieldName=page&fieldValue=${pageName}`
      );
      setGetSeo(data?.data[0]);
      console.log(data?.data[0]);
    };

    fetchSeo();
  }, [pageName]);

  return getSeo;
};

export default useGetSeo;

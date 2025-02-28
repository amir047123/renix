import axios from "axios";
import { useEffect, useState } from "react";
import { server_url } from "../Config/API";

const useGetSeo = (pageName) => {
  const [getSeo, setGetSeo] = useState(null);
  useEffect(() => {
    const fetchSeo = async () => {
      const { data } = await axios.get(
<<<<<<< HEAD
        `http://localhost:3001/api/v1/seo/specific?fieldName=page&fieldValue=${pageName}`
=======
        `${server_url}/seo/specific?fieldName=page&fieldValue=${pageName}`
>>>>>>> 47bb5cedf53f5587c42b72757c4a2d7953614036
      );
      setGetSeo(data?.data[0]);
    };

    fetchSeo();
  }, [pageName]);

  return getSeo;
};

export default useGetSeo;



export const singleImageUpload = async (formData, setMyImageUrl) => {
    const imageBaseUrl = `http://localhost:8080/api/v1/upload/single-image-upload`;
  
    fetch(imageBaseUrl, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Data: ", data);
        if (data.status === "success") {
          console.log("Response:", data);
          setMyImageUrl(data.url);
        }
      });
  };
  
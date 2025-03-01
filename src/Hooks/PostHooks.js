import swal from "sweetalert";

const PostHooks = async (url, data, successMsg) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json",
      },
    });

    const responseData = await response.json();

    if (responseData.status === "success") {
      swal(successMsg ? successMsg : "Success");
      return responseData;
    } else {
      throw new Error(responseData?.message || "Something went wrong");
    }
  } catch (error) {
    swal("Oops", `${error?.message}`, "error");
  }
};

export default PostHooks;

const GetUserHook = (BASE_URL, setUser, setLoading) => {
  setLoading(true);
  fetch(BASE_URL)
    .then((res) => res.json())
    .then((data) => {
      setUser(data.data);
      setLoading(false);
    });
};

export default GetUserHook;

const token = localStorage.getItem("token");

const getUser = async () => {
  if (!token) {
    alert(`Please log-in`);
    window.location.href = "/login";
  }
  try {
    const response = await fetch("http://localhost:4069/users/getone", {
      headers: {
        Authorization: `${token}`,
      },
    });
    const data = await response.json();
    const user = data.user;
    return user;
  } catch (err) {
    return Error(err.message);
  }
};
export default getUser;

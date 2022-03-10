const getToken = (name) => {
  const token = localStorage.getItem(`${name}`);

  if (token) {
    return token;
  } else {
    return null;
  }
};

const setToken = (name, token) => {
  if (!token) {
    return false;
  }
  localStorage.setItem(`${name}`, token);
};

const delToken = () => {
  localStorage.removeItem("token");
};

export { getToken, setToken, delToken };
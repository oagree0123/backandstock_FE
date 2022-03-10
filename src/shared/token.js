const getToken = (name) => {
  let value = "; " + document.cookie;

  let parts = value.split(`; ${name}=`);

  if (parts.length === 2) {
    return parts.pop().split(";").shift();
  }
};

const setToken = (name, token, exp = 5) => {
  let date = new Date();
  date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000);

  document.cookie = `${name}=${token}; expires=${date.toUTCString()}`;
};

const delToken = (name) => {
  let date = new Date("2020-01-01").toUTCString();

  document.cookie = name + "=; expires=" + date;
};


export { getToken, setToken, delToken };
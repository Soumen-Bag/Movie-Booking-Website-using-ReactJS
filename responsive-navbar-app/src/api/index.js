const isLogin = () => {
  const user = localStorage.getItem("currentUser");
  return user !== null;
};

const logout = () => {
  localStorage.removeItem("currentUser");
};

export { isLogin, logout };
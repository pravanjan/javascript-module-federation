var call = async () => {
  const login = await import("producer/Login");
  await login.login(document.querySelector("body"));
};

call();

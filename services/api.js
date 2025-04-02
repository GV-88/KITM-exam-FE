const URL = import.meta.env.VITE_URL;

const issueRequest = async (token, path, method, reqBody) => {
  const request = {
    method: method ?? "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  if (reqBody) {
    request.body = JSON.stringify(reqBody);
  }

  if (token) {
    request.headers["Authorization"] = "Bearer " + token;
  }

  try {
    const response = await fetch(`${URL}/${path}`, request);
    if (!response.ok) {
      throw new Error(response.messageCode);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const api = {
  register: async (username, password, confirmPassword) => {
    return issueRequest(null, "register", "POST", {
      username,
      password,
      confirmPassword,
    });
  },
};

export default api;

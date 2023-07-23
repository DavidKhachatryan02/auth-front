import client from "./client";

export default {
  login: (data) => client.post("/auth/login", data),
  register: (data) => client.post("/auth/register", data),
  signInWithGoogle: (data) => client.post("/auth/google", data),
  getMe: () => client.get("/auth/me"),
};

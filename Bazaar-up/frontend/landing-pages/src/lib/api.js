export async function api(path, { method = "GET", body, token } = {}) {
  const res = await fetch(`/api${path}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data?.message || "Request failed");
  return data;
}

export const AuthAPI = {
  register: (payload) => api("/auth/register", { method: "POST", body: payload }),
  login: (payload) => api("/auth/login", { method: "POST", body: payload }),
  me:   (token)   => api("/auth/me", { token }),
};

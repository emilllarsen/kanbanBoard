const {
  VITE_API_PROTOCOL,
  VITE_API_HOSTNAME,
  VITE_API_PORT,
  VITE_API_VERSION,
} = import.meta.env
;
const API_URL = `${VITE_API_PROTOCOL}://${VITE_API_HOSTNAME}:${VITE_API_PORT}/api/${VITE_API_VERSION}`;

export async function apiFetch(endpoint, options = {}) {
  const headers = {
    ...(options?.headers || {}),
    "Content-Type": "application/json",
  };
  const response = await fetch(API_URL + endpoint, {
    ...options,
    headers,
  });

  const result = await response.json();

  if (!result) {
    throw new Error(
      result?.msg || result?.message || result?.error || "An error has occurred",
    );
  }
  return result;
}

export const authApiUrl = `${process.env.NEXT_PUBLIC_API_URL}/login`;
export const login = (formData) => {
  return fetch(authApiUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });
};

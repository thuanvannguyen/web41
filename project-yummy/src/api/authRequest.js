import { APP } from "../../constant"

export const loginUser = async (email, password) => {
  const response = await fetch(`${APP.BASE_URL}/login`, {
    method: "POST",
    body: JSON.stringify({ email, password }), // Bobdy gia tri gui len server.
    headers: {
      "Content-Type": "application/json"
    }
  });

  if (!response.ok) {
    throw new Error("Login Failed!")
  }
  return await response.json(); // Kết quả API TRẢ VỀ.
}
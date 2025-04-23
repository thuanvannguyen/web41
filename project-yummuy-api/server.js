const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Mock user data
const users = [{ email: "test@example.com", password: "password123" }];

// Hàm để tạo token ngẫu nhiên
const generateToken = () => {
  return "token_" + Math.random().toString(36).substring(2, 15) + Date.now();
};

// Lưu trữ token và thời gian hết hạn
const tokenStore = {};

// API Login
app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  const user = users.find((u) => u.email === email && u.password === password);

  if (user) {
    const token = generateToken();
    const expiresAt = Date.now() + 30 * 60 * 1000; // 30 phút

    tokenStore[token] = expiresAt;
    return res.json({
      status: "success",
      token: token,
      expiresAt: new Date(expiresAt).toLocaleString(),
      expiresIn: Math.floor((expiresAt - Date.now()) / 1000), // giây
      message: "Login successful",
    });
  } else {
    return res.status(401).json({
      status: "error",
      message: "Invalid credentials",
    });
  }
});

// API để kiểm tra token
app.get("/api/protected", (req, res) => {
  const token = req.headers["authorization"];

  if (token && tokenStore[token]) {
    const expiresAt = tokenStore[token];
    const timeLeft = expiresAt - Date.now();

    if (timeLeft > 0) {
      return res.json({
        status: "success",
        message: "Access granted to protected resource",
        expiresIn: Math.floor(timeLeft / 1000), // giây
      });
    } else {
      delete tokenStore[token];
      return res.status(401).json({
        status: "error",
        message: "Token expired",
      });
    }
  } else {
    return res.status(401).json({
      status: "error",
      message: "Unauthorized",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// expiresAt: thời điểm mà token sẽ hết hạn.
// expiresIn: thời gian còn lại cho đến khi token hết hạn.

// http://localhost:3000/api/login - login => tra ve token thong tin user
// http://localhost:3000/api/protected
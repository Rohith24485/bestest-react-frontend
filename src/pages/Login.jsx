import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const saveUser = async () => {
    console.log("Button Clicked");

    try {
      const res = await fetch("http://localhost:8080/save", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      });

      console.log("Response:", res);

      if (res.ok) {
        const data = await res.json();
        console.log(data);

        // 🔥 IMPORTANT FIX (THIS WAS MISSING)
        localStorage.setItem("email", email);

        alert("✅ Login Successful!");
        navigate("/home");
      } else {
        alert("❌ Failed to Save User!");
      }
    } catch (error) {
      console.error("ERROR:", error);
      alert("❌ Server Not Connected!");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1 id="one">LOGIN</h1>
        <br />

        <input
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={saveUser}>Login</button>
      </div>
    </div>
  );
}

export default Login;
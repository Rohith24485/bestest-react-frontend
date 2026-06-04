import { useState } from "react";

function Payment() {
  const [price, setPrice] = useState("");
  const [address, setAddress] = useState("");

  const payNow = async () => {

    // 🔥 LOGIN CHECK FIRST
    const email = localStorage.getItem("email");

    if (!email) {
      alert("Please login first");
      window.location.href = "/";
      return;
    }

    // 🔥 PAYLOAD
    const paymentData = {
      email,
      price: Number(price),
      address,
      status: "SUCCESS"
    };

    console.log("👉 Sending Payment Data:", paymentData);

    try {

      const response = await fetch("http://localhost:8080/order/save", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(paymentData)
      });

      const result = await response.text();
      console.log("👉 Backend Response:", result);

      // 🔥 SUCCESS CONDITION
      if (response.status === 200 || response.status === 201) {

        alert("💳 Payment Successful ✅");

        // 🔥 CLEAR CART AFTER PAYMENT
        await fetch(`http://localhost:8080/cart/clear/${email}`, {
          method: "DELETE"
        });

        // 🔥 SUCCESS PAGE
        window.location.href = "/home";

      } else {

        alert("❌ Payment Failed (Backend Issue)");

      }

    } catch (error) {
      console.log("❌ ERROR:", error);
      alert("Server Error ❌ Try again");
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        height: "100vh",
        backgroundImage: "url('/images/loginpage1.jpeg')",
        backgroundSize: "cover"
      }}
    >

      <div
        className="p-4 shadow-lg rounded"
        style={{ width: "400px", background: "rgb(178,196,193)" }}
      >

        <h3 className="text-center mb-4">💳 Payment Page</h3>

        
        <input
          className="form-control mb-3"
          placeholder="Price"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <textarea
  className="form-control mb-3"
  placeholder="Enter Full Address"
  rows="4"
  value={address}
  onChange={(e) => setAddress(e.target.value)}
></textarea>

        <button className="btn btn-success w-100" onClick={payNow}>
          Pay Now
        </button>

      </div>

    </div>
  );
}

export default Payment;
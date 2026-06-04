import { useState } from "react";

function ProductCard({ image, title, price }) {

  const addToCart = async () => {
    const email = localStorage.getItem("email");

    try {
      const response = await fetch(
        "http://localhost:8080/cart/save",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            productName: title,
            price: price,
            image: image,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert("✅ Product Added Successfully");
        window.dispatchEvent(new Event("cartUpdated"));
      }

      console.log(data);

    } catch (error) {
      console.log(error);
      alert("❌ Error");
    }
  };

  // 👉 AMAZON ALWAYS LOWEST LOGIC
  const amazonPrice = price;
  const flipkartPrice = price + 120;
  const meeshoPrice = price + 200;

  return (
    <div
      className="card h-100 shadow-lg border-0 product-card"
      style={{ borderRadius: "15px" }}
    >
      <img
        src={image}
        className="card-img-top"
        alt={title}
        style={{ height: "300px", objectFit: "cover" }}
      />

      <div className="card-body text-center">

        <h5 className="fw-bold">{title}</h5>

        {/* AMAZON (LOWEST HIGHLIGHT) */}
        <p className="amazon-price">
          <b>Amazon :</b> ₹{amazonPrice} <span className="badge">Lowest</span>
        </p>

        <p className="flipkart-price">
           <b>Flipkart :</b> ₹{flipkartPrice}
        </p>

        <p className="meesho-price">
           <b>Meesho :</b> ₹{meeshoPrice}
        </p>

        <button
          className="btn btn-success w-100 mt-2"
          onClick={addToCart}
        >
          ADD TO CART
        </button>

      </div>
    </div>
  );
}

export default ProductCard;
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  const email = localStorage.getItem("email");

  useEffect(() => {
    fetch(`http://localhost:8080/cart/${email}`)
      .then((res) => res.json())
      .then((data) => setCartItems(data))
      .catch((err) => console.log(err));
  }, [email]);

  const removeItem = async (id) => {
    try {
      await fetch(`http://localhost:8080/cart/delete/${id}`, {
        method: "DELETE",
      });

      setCartItems((prev) =>
        prev.filter((item) => item.id !== id)
      );
    } catch (error) {
      console.log(error);
    }
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.price,
    0
  );

  return (
    <div className="container mt-5">

      <h2 className="mb-4">🛒 Cart Page</h2>

      {cartItems.map((item) => (
        <div
          key={item.id}
          className="card shadow-sm p-3 mb-3"
        >
          <div className="row align-items-center">

            <div className="col-md-2">
              <img
                src={item.image}
                alt={item.productName}
                className="img-fluid rounded"
                style={{
                  width: "120px",
                  height: "120px",
                  objectFit: "cover",
                }}
              />
            </div>

            {/* Gradient Background Area */}
            <div className="col-md-7">
              <div className="product-details">
                <h4 className="product-name">
                  {item.productName}
                </h4>

                <h5 className="product-price">
                  ₹{item.price}
                </h5>
              </div>
            </div>

            <div className="col-md-3 text-end">
              <button
                className="btn btn-danger"
                onClick={() => removeItem(item.id)}
              >
                Cancel
              </button>
            </div>

          </div>
        </div>
      ))}

      <h2 className="mt-4">
        Total : ₹{total}
      </h2>

      <button
        className="btn btn-success mt-3"
        onClick={() => navigate("/payment")}
      >
        Proceed To Payment
      </button>

    </div>
  );
}

export default Cart;
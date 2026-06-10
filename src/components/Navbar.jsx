import { useEffect, useState } from "react";

function Navbar() {

  const [cartCount, setCartCount] = useState(0);

  const email = localStorage.getItem("email");

  const fetchCartCount = async () => {
    if (!email) return;

    try {
      const res = await fetch(
        `http://localhost:8080/cart/${email}`
      );

      const data = await res.json();

      setCartCount(data.length);

    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchCartCount();
  }, []);

  // 🔥 STEP 2 ADD THIS LISTENER
  useEffect(() => {

    const updateCart = () => {
      fetchCartCount();
    };

    window.addEventListener("cartUpdated", updateCart);

    return () => {
      window.removeEventListener("cartUpdated", updateCart);
    };

  }, []);

  const logout = () => {
    localStorage.removeItem("email");
    alert("Logged out");
    window.location.href = "/";
  };

  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">

        <a className="navbar-brand" href="/">
          🌟 BESTEST PRICE V2
        </a>

        <div className="ms-auto d-flex gap-2">

          <a href="/" className="btn btn-outline-light">HOME</a>

          <a href="/cart" className="btn btn-outline-warning">
          CART ({cartCount})
          </a>

          <button onClick={logout} className="btn btn-outline-danger">
            LOGOUT
          </button>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import "./Home.css";

function Home() {

  // 👕 BOYS COLLECTION
  const boysProducts = [
    { name: "MEN CASUAL SHIRT",price: 799, image: "/images/card1.jpeg" },
    { name: "MENS TRIPED SHIRT", price: 999, image: "/images/card2.jpeg" },
    { name: "FORMAL SHIRT", price: 399, image: "/images/card3.jpeg" },
    { name: "FULL HAND T-SHIRT", price: 299, image: "/images/card4.jpeg" },
    { name: "CASUAL T-SHIRT", price: 1199, image: "/images/card5.jpeg" },
    { name: "JACKET & LOWER", price: 1199, image: "/images/card6.jpeg" },
    { name: "SHIRTS & PANT", price: 1599, image: "/images/card7.jpeg" },
    { name: "MEN FORMAL", price: 1399, image: "/images/card8.jpeg" },
  ];

  // 💃 GIRLS COLLECTION
  const girlsProducts = [
    { name: "ELEGANT PARTY DRESS", price: 1299, image: "/images/gc1.jpeg" },
    { name: "CASUAL FLORAL DRESS", price: 899, image: "/images/gc2.jpeg" },
    { name: "TRADITIONAL KURTI SET", price: 999, image: "/images/gc3.jpeg" },
    { name: "WESTERN MIDI DRESS", price: 1499, image: "/images/gc4.jpeg" },
    { name: "SUMMER SHORT DRESS", price: 799, image: "/images/gc5.jpeg" },
    { name: "ETHNIC SAREE STYLE", price: 1999, image: "/images/gc1.jpeg" },
    { name: "PARTY WEAR GOWN", price: 2199, image: "/images/gc3.jpeg" },
    { name: "CASUAL TOP & JEANS", price: 1399, image: "/images/gc2.jpeg" },
  ];

  // 🧒 KIDS COLLECTION
  const kidsProducts = [
    { name: "KIDS T-SHIRT SET", price: 499, image: "/images/kc1.jpeg" },
    { name: "BOYS SHORTS SET", price: 599, image: "/images/kc2.jpeg" },
    { name: "GIRLS FROCK", price: 699, image: "/images/kc3.jpeg" },
    { name: "CARTOON PRINT TEE", price: 399, image: "/images/k34.jpeg" },
    { name: "KIDS NIGHT SUIT", price: 799, image: "/images/kc5.jpeg" },
    { name: "DENIM SET", price: 999, image: "/images/kc6.jpeg" },
    { name: "SUMMER WEAR SET", price: 599, image: "/images/kc7.jpeg" },
    { name: "SPORTS WEAR KIDS", price: 899, image: "/images/kc8.jpeg" },
  ];

  // 👟 SHOE COLLECTION
  const shoeProducts = [
    { name: "NIKE RUNNING SHOES", price: 2999, image: "/images/shoe1.jpeg" },
    { name: "ADIDAS SPORT SHOES", price: 2799, image: "/images/shoe2.jpeg" },
    { name: "CASUAL WHITE SNEAKERS", price: 1999, image: "/images/shoe3.jpeg" },
    { name: "LEATHER FORMAL SHOES", price: 2499, image: "/images/shoe4.jpeg" },
    { name: "SPORT RUNNING SHOES", price: 1899, image: "/images/shoe5.jpeg" },
    { name: "TRENDY STREET SHOES", price: 1599, image: "/images/shoe6.jpeg" },
    { name: "BASKETBALL SHOES", price: 3199, image: "/images/shoe7.jpeg" },
    { name: "CASUAL SLIP-ON SHOES", price: 1299, image: "/images/shoe8.jpeg" },
  ];

  return (
    <div className="container mt-4">

      <Navbar />
      
      <br />
      <h1 className="mb-4 text-center">
        🛍️ Fashion Store
      </h1>

      {/* BOYS */}
      <h3 className="mb-3">Boys Collection :</h3>
      <div className="row">
        {boysProducts.map((product, index) => (
          <div className="col-md-3 mb-4" key={index}>
            <ProductCard image={product.image} title={product.name} price={product.price} />
          </div>
        ))}
      </div>

      {/* GIRLS */}
      <h3 className="mb-3 mt-5">Girls Collection :</h3>
      <div className="row">
        {girlsProducts.map((product, index) => (
          <div className="col-md-3 mb-4" key={index}>
            <ProductCard image={product.image} title={product.name} price={product.price} />
          </div>
        ))}
      </div>

      {/* KIDS */}
      <h3 className="mb-3 mt-5">Kids Collection :</h3>
      <div className="row">
        {kidsProducts.map((product, index) => (
          <div className="col-md-3 mb-4" key={index}>
            <ProductCard image={product.image} title={product.name} price={product.price} />
          </div>
        ))}
      </div>

      {/* SHOES */}
      <h3 className="mb-3 mt-5">Shoe Collection :</h3>
      <div className="row">
        {shoeProducts.map((product, index) => (
          <div className="col-md-3 mb-4" key={index}>
            <ProductCard image={product.image} title={product.name} price={product.price} />
          </div>
        ))}
      </div>

      {/* ================= FOOTER ================= */}
      <footer
        className="mt-5 text-white"
        style={{ backgroundColor: "rgb(47, 39, 39)" }}
      >
        <div className="container py-4">

          <div className="row text-center">

            <div className="col-md-2">
              <h5>SHOP</h5>
              <p>By Category</p>
              <p>Shop Home</p>
              <p>Mens</p>
              
            </div>

            <div className="col-md-2">
              <h5>SPORTS</h5>
              <p>Skate</p>
              <p>Football</p>
              
            </div>

            <div className="col-md-2">
              <h5>SUPPORT</h5>
              <p>Store Locator</p>
              <p>Order Status</p>
            </div>

            <div className="col-md-2">
              <h5>COMPANY</h5>
              <p>Customer Service</p>
              <p>Terms</p>
              <p>Privacy</p>
              
            </div>

            <div className="col-md-2">
              <h5>INFO</h5>
              <p>By Category</p>
              <p>Shop Home</p>
              <p>Mens</p>
            </div>

          </div>

          <hr />

          <div className="text-center py-3">
            <p>© 2026 BESTEST WEBSITE. ALL RIGHTS RESERVED</p>
            <small>Email: bestest@gmail.com | Phone: 54321 54321</small>
          </div>

        </div>
      </footer>

    </div>
  );
}

export default Home;
import { useContext, useEffect, useState } from "react";
import AuthContext from "../components/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Button } from "react-bootstrap";

const baseUrl = import.meta.env.VITE_API_BASE_URL;

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) return navigate("/login");
    fetchCart();
  }, [user]);

  const fetchCart = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return navigate("/login");
      const { data } = await axios.get(`${baseUrl}/cart`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCartItems(Array.isArray(data) ? data : []);
    } catch {
      navigate("/login");
    }
  };

  const updateCart = async (id, qty) => {
    if (qty < 1 || qty > 99) return;
    try {
      const token = localStorage.getItem("token");
      if (!token) return navigate("/login");
      await axios.put(`${baseUrl}/cart/${id}`, null, {
        headers: { Authorization: `Bearer ${token}` },
        params: { quantity: qty },
      });
      fetchCart();
    } catch {}
  };

  const removeFromCart = async (id) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return navigate("/login");
      await axios.delete(`${baseUrl}/cart/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchCart();
    } catch {}
  };

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + (item.price || 0) * (item.quantity || 1),
    0
  );

  const handleQuantityChange = (e, id) => {
    const qty = parseInt(e.target.value, 10);
    if (!isNaN(qty)) updateCart(id, qty);
  };

  const handleCheckOut = () => {
    if (!cartItems.length) return alert("Your cart is empty");
    navigate("/checkout");
  };

  return (
    <section className="container my-4">
      <h1 className="fs-3">Cart</h1>
      {!cartItems.length ? (
        <div className="alert alert-info">
          Your cart is empty. <Link to="/shop">Continue shopping</Link>
        </div>
      ) : (
        <>
          <table className="table table-borderless">
            <thead>
              <tr className="shadow">
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody className="list">
              {cartItems.map((item) => (
                <tr className="shadow" key={item.productId}>
                  <td>
                    <img
                      width="100px"
                      src={item.imageUrl || "/default-product.jpg"}
                      alt={`${item.brand || "Unknown"} ${
                        item.model || "Unknown"
                      }`}
                      onError={(e) => (e.target.src = "/default-product.jpg")}
                    />
                    <span>{`${item.brand || "Unknown brand"} ${
                      item.model || "Unknown model"
                    }`}</span>
                  </td>
                  <td>{`${item.price || 0}$`}</td>
                  <td>
                    <input
                      className="form-control quantity-input"
                      type="number"
                      min="1"
                      max="99"
                      style={{ width: "60px" }}
                      value={item.quantity || 1}
                      onChange={(e) => handleQuantityChange(e, item.productId)}
                    />
                  </td>
                  <td>{`${(item.price || 0) * (item.quantity || 1)}$`}</td>
                  <td>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => removeFromCart(item.productId)}
                    >
                      Remove
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="row my-5">
            <div className="col-8"></div>
            <div className="col-4">
              <div className="border border-2 border-black p-4">
                <h4>Cart total</h4>
                <div className="d-flex py-3 justify-content-between border-bottom border-2">
                  <div>Subtotal</div>
                  <div>{`${totalPrice}`}</div>
                </div>
                <div className="d-flex py-3 justify-content-between border-bottom border-2">
                  <div>Shipping</div>
                  <div>free</div>
                </div>
                <div className="d-flex py-3 justify-content-between">
                  <div>Total</div>
                  <div>{`${totalPrice}$`}</div>
                </div>
                <div>
                  <Button
                    variant="danger"
                    className="p-2 px-4"
                    onClick={handleCheckOut}
                  >
                    Proceed to checkout
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
}

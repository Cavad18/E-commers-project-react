import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const baseUrl = import.meta.env.VITE_API_BASE_URL;

export default function Product() {
  const { state } = useLocation();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [notification, setNotification] = useState({
    show: false,
    message: "",
    type: "",
  });

  useEffect(() => {
    if (state?.product) {
      setProduct(state.product);
    } else {
      console.error("Product not found in navigation state");
    }
    setIsLoading(false);
  }, [state]);



  const showNotification = (message, type) => {
    setNotification({ show: true, message, type });
    setTimeout(() => setNotification({ show: false, message: "", type: "" }), 3000);
  };



  const handleAddToCart = () => {
    const token = localStorage.getItem("token");

    if (!token) {
      showNotification("Please log in to add items to your cart", "error");
      return;
    }

    if (!product?.id) {
      showNotification("Product information is incomplete", "error");
      return;
    }

    setIsLoading(true);

    fetch(`${baseUrl}/cart/${product.id}?quantity=1`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-type": "application/json",
      },
    })
      .then(response => {
        if (!response.ok) throw new Error("Failed to add to cart");
        return response.json();
      })
      .then(() => {
        showNotification("Product added to cart", "success");
      })
      .catch(error => {
        showNotification(`Error: ${error.message}`, "error");
      })
      .finally(() => setIsLoading(false));
  };



  if (isLoading && !product) {
    return (
      <div className="container my-5 text-center">
        Loading product details...
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container my-5 text-center">
        Product not found.
      </div>
    );
  }


  return (
    <section className="container my-5">
      <h1 className="fs-6">Product Page</h1>
      <div className="row">
        <div className="col-md-7 p-3 p-md-5">
          <img
            className="w-100 rounded"
            src={product.imageUrl}
            alt={product.model}
          />
        </div>

        <div className="col-md-5">
          <h3 className="mt-3 mt-md-0">
            {product.brand} {product.model}
          </h3>

          <p>${product.price}</p>
          <p>{product.description}</p>

          <button
            className="btn btn-dark p-3 px-4 fw-medium"
            onClick={handleAddToCart}
            disabled={isLoading}
          >
            {isLoading ? "Processing..." : "Add to cart"}
          </button>

          {notification.show && (
            <div
              className={`alert mt-3 ${
                notification.type === "error"
                  ? "alert-danger"
                  : "alert-success"
              }`}
            >
              {notification.message}
            </div>
          )}
        </div>
      </div>
    </section>
);
}
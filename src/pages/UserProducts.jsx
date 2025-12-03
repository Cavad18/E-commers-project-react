import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function UserProducts() {
  const navigate = useNavigate();

  const [products, setProducts] = useState([
    {
      id: 1,
      brand: "Dell 2222",
      model: "Dell XPS 13",
      category: "Laptops",
      imageUrl: "/images/laptop.jpg",
      price: 1196565656,
      rating: 5
    },
    {
      id: 2,
      brand: "123123",
      model: "123123",
      category: "1233123",
      imageUrl: "/images/phonelaptop.jpg",
      price: 12321,
      rating: 2
    }
  ]);

  function handleCreate() {
    navigate("/create-product");
  }

  function handleEdit(id) {
    navigate(`/edit-product/${id}`);
  }

  function handleDelete(id) {
    if (window.confirm("Ты уверен что хочешь удалить?")) {
      setProducts(products.filter((p) => p.id !== id));
    }
  }

  return (
    <div className="container py-4">
      <div className="p-3">
        <button onClick={handleCreate} className="btn btn-info text-white mb-3">
          Новый продукт
        </button>

        <table className="table align-middle">
          <thead>
            <tr>
              <th>Id</th>
              <th>Бренд</th>
              <th>Модель</th>
              <th>Категория</th>
              <th>Изображение</th>
              <th>Цена</th>
              <th>Рейтинг</th>
              <th>Операции</th>
            </tr>
          </thead>

          <tbody>
            {products.map((p) => (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.brand}</td>
                <td>{p.model}</td>
                <td>{p.category}</td>

                <td>
                  <img
                    src={p.imageUrl}
                    alt="product"
                    style={{
                      width: "120px",
                      height: "90px",
                      objectFit: "cover",
                      borderRadius: "6px"
                    }}
                  />
                </td>

                <td>{p.price} $</td>
                <td>{p.rating}/5</td>

                <td>
                  <div className="d-flex gap-2">
                    <button
                      className="btn btn-primary btn-sm"
                      onClick={() => handleEdit(p.id)}
                    >
                      Редактировать
                    </button>

                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(p.id)}
                    >
                      Удалить
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
</div>
);
}
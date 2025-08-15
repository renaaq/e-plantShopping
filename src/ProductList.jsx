// src/components/ProductList.jsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "./cartSlice"; // 👈 ajusta la ruta según tu proyecto

const ProductList = () => {
  const dispatch = useDispatch();

  // Estado para marcar qué productos ya se agregaron
  const [addedToCart, setAddedToCart] = useState({});

  // Arreglo de categorías con plantas
  const plantsArray = [
    {
      category: "Indoor",
      plants: [
        {
          id: 1,
          name: "Aloe Vera",
          image: "https://via.placeholder.com/150",
          description: "Planta medicinal ideal para interiores.",
          cost: 15,
        },
        {
          id: 2,
          name: "Peace Lily",
          image: "https://via.placeholder.com/150",
          description: "Planta purificadora de aire.",
          cost: 20,
        },
      ],
    },
    {
      category: "Succulents",
      plants: [
        {
          id: 3,
          name: "Cactus",
          image: "https://via.placeholder.com/150",
          description: "Fácil de cuidar, perfecto para principiantes.",
          cost: 10,
        },
        {
          id: 4,
          name: "Echeveria",
          image: "https://via.placeholder.com/150",
          description: "Suculenta muy decorativa.",
          cost: 12,
        },
      ],
    },
  ];

  // Función para manejar añadir al carrito
  const handleAddToCart = (plant) => {
    dispatch(addItem(plant)); // manda la planta al estado global (CartSlice)
    setAddedToCart((prev) => ({ ...prev, [plant.id]: true })); // marca como añadida
  };

  return (
    <div className="product-grid">
      {plantsArray.map((category, index) => (
        <div key={index}>
          {/* Nombre de la categoría */}
          <h1 className="text-xl font-bold my-4">{category.category}</h1>

          {/* Lista de productos */}
          <div className="product-list flex flex-wrap gap-6">
            {category.plants.map((plant) => (
              <div
                className="product-card border rounded-lg p-4 shadow-md w-60"
                key={plant.id}
              >
                <img
                  className="product-image w-full h-32 object-cover mb-2"
                  src={plant.image}
                  alt={plant.name}
                />
                <div className="product-title font-semibold">{plant.name}</div>
                <div className="product-description text-sm text-gray-600">
                  {plant.description}
                </div>
                <div className="product-cost font-bold my-2">
                  ${plant.cost}
                </div>
                <button
                  className={`product-button px-3 py-1 rounded ${
                    addedToCart[plant.id]
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-green-500 hover:bg-green-600 text-white"
                  }`}
                  onClick={() => handleAddToCart(plant)}
                  disabled={addedToCart[plant.id]}
                >
                  {addedToCart[plant.id] ? "Added" : "Add to Cart"}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;

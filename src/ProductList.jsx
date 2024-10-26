import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from './CartSlice'; // Adjust the import path if necessary

const ProductList = () => {
  const [addedToCart, setAddedToCart] = useState({});
  const dispatch = useDispatch();

  const plantsArray = [
    {
      name: "Aloe Vera",
      imageUrl: "path/to/aloe-vera.jpg",
      description: "A succulent plant species known for its medicinal properties.",
      cost: 10.99,
    },
    {
      name: "Snake Plant",
      imageUrl: "path/to/snake-plant.jpg",
      description: "Easy to care for and great air purifiers.",
      cost: 12.99,
    },
    {
      name: "Peace Lily",
      imageUrl: "path/to/peace-lily.jpg",
      description: "Beautiful white flowers and low light tolerance.",
      cost: 15.99,
    },
    {
      name: "Spider Plant",
      imageUrl: "path/to/spider-plant.jpg",
      description: "Hardy houseplant known for its air-purifying abilities.",
      cost: 9.99,
    },
    {
      name: "Rubber Plant",
      imageUrl: "path/to/rubber-plant.jpg",
      description: "Large glossy leaves that thrive in indirect light.",
      cost: 19.99,
    },
    {
      name: "Fiddle Leaf Fig",
      imageUrl: "path/to/fiddle-leaf-fig.jpg",
      description: "Popular indoor plant with large, lush leaves.",
      cost: 29.99,
    },
    {
      name: "ZZ Plant",
      imageUrl: "path/to/zz-plant.jpg",
      description: "Very low maintenance and great for beginners.",
      cost: 18.99,
    },
    {
      name: "Boston Fern",
      imageUrl: "path/to/boston-fern.jpg",
      description: "Lush green fronds and good for humidity.",
      cost: 14.99,
    },
    {
      name: "Calathea",
      imageUrl: "path/to/calathea.jpg",
      description: "Known for its stunning leaf patterns and colors.",
      cost: 22.99,
    },
    {
      name: "Pothos",
      imageUrl: "path/to/pothos.jpg",
      description: "Versatile trailing plant, great for indoor spaces.",
      cost: 11.99,
    },
  ];

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedToCart((prevState) => ({
      ...prevState,
      [plant.name]: true,
    }));
  };

  return (
    <div className="product-grid">
      {plantsArray.map((plant) => (
        <div key={plant.name} className="product-card">
          <h3>{plant.name}</h3>
          <img src={plant.imageUrl} alt={plant.name} />
          <p>{plant.description}</p>
          <p>${plant.cost}</p>
          <button onClick={() => handleAddToCart(plant)}>
            Add to Cart
          </button>
          {addedToCart[plant.name] && <p>Added to Cart!</p>}
        </div>
      ))}
    </div>
  );
};

export default ProductList;

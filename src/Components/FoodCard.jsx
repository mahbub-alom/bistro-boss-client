import React from "react";

const FoodCard = ({item}) => {
    const {name,recipe,image,price}=item;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          alt="Shoes"
        />
      </figure>
      <p className="bg-slate-900 text-white absolute right-0 mt-5 me-5 px-4 ">{price}</p>
      <div className="card-body">
        <h2 className="card-title mx-auto text-black">{name}</h2>
        <p className="text-gray-500">{recipe}</p>
        <div className="card-actions justify-end">
        <button className="btn btn-outline border-0 bg-slate-100 border-orange-400 border-b-4 mt-4">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;

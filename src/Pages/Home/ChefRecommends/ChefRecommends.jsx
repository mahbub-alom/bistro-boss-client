import React from "react";
import SectionTitle from "../../../Components/SectionTitle";
import chefReco from "../../../assets/home/slide1.jpg";

const ChefRecommends = () => {
  return (
    <section className="mb-10">
      <SectionTitle
        heading="Should try"
        subHeading="Chef Recommends"
      ></SectionTitle>
      <div className="grid md:grid-cols-3">
        <div className="card w-96 bg-base-300 shadow-xl">
          <figure className="pt-10">
            <img src={chefReco} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="card-actions">
              <button className="hover:btn bg-slate-100 p-2 rounded-md border border-b-4 border-yellow-600 uppercase text-orange-400">Add to Cart</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-300 shadow-xl">
          <figure className="pt-10">
            <img src={chefReco} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="card-actions">
              <button className="hover:btn bg-slate-100 p-2 rounded-md border border-b-4 border-yellow-600 uppercase text-orange-400">Add to Cart</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-300 shadow-xl">
          <figure className="pt-10">
            <img src={chefReco} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="card-actions">
              <button className="hover:btn bg-slate-100 p-2 rounded-md border border-b-4 border-yellow-600 uppercase text-orange-400">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChefRecommends;

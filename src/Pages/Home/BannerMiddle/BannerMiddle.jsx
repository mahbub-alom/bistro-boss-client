import React from "react";
import chefService from "../../../assets/home/chef-service.jpg";

const BannerMiddle = () => {
  return (
    <div className="carousel w-full mb-10">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={chefService} className="max-w-screen-xl mx-auto" />
        <div className="absolute bg-white -translate-y-1/2 pt-16 pb-16 ps-10 pe-10 left-10 right-10 top-1/2">
          <h2 className="text-3xl text-black text-center">Bistro Boss</h2>
          <p className="text-gray-400 text-2xl text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus, libero accusamus laborum deserunt ratione dolor
            officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
            nihil iusto ducimus incidunt quibusdam nemo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BannerMiddle;

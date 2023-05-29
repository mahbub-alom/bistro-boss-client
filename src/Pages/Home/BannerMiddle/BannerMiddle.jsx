import React from "react";
import chefService from "../../../assets/home/chef-service.jpg";

const BannerMiddle = () => {
  return (
    <div className="mb-10">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("${chefService}")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="ms-5 me-5">
          <div className="bg-white pt-10 pb-10 ps-10 pe-10">
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
      </div>
    </div>
  );
};

export default BannerMiddle;

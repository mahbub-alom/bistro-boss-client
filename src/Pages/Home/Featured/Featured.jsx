import React from "react";
import SectionTitle from "../../../Components/SectionTitle";
import featured from "../../../assets/home/featured.jpg";
import moment from "moment";
import './Featured.css'

const Featured = () => {
  return (
    <section className="featured-item bg-fixed text-white pt-8 my-20">
      <SectionTitle
        subHeading="check it out"
        heading="Featured Item"
      ></SectionTitle>
      <div className="md:flex justify-center items-center pb-20 pt-12 px-36 bg-slate-500 bg-opacity-60">
        <div>
          <img src={featured} alt="" />
        </div>
        <div className="md:ml-10">
          <p>{moment().format("MMMM Do YYYY, h:mm:ss a")}</p>
          <p className="uppercase">Where can i get some?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum eos saepe magnam similique, nemo aliquam maiores voluptas repudiandae earum provident excepturi ducimus qui laboriosam vel quos sint! Qui necessitatibus quos magni, quaerat voluptate accusamus amet, modi neque corrupti maxime ab laborum ipsum quidem esse minima optio beatae? Quae, corporis autem.</p>
          <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
        </div>
      </div>
    </section>
  );
};

export default Featured;

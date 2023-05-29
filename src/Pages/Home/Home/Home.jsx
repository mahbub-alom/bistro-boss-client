import React from "react";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import PopularMenu from "../PopularMenu/PopularMenu";
import ChefRecommends from "../ChefRecommends/ChefRecommends";
import Featured from "../Featured/Featured";
import TestiMonials from "../TestiMonials/TestiMonials";
import { Helmet } from "react-helmet-async";
import BannerMiddle from "../BannerMiddle/BannerMiddle";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <BannerMiddle></BannerMiddle>
      <PopularMenu></PopularMenu>
      <ChefRecommends></ChefRecommends>
      <Featured></Featured>
      <TestiMonials></TestiMonials>
    </div>
  );
};

export default Home;

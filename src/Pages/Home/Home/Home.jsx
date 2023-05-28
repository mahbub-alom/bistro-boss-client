import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import PopularMenu from '../PopularMenu/PopularMenu';
import BannerMiddle from '../BannerMiddle/BannerMiddle';
import ChefRecommends from '../ChefRecommends/ChefRecommends';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <BannerMiddle></BannerMiddle>
            <PopularMenu></PopularMenu>
            <ChefRecommends></ChefRecommends>
        </div>
    );
};

export default Home;
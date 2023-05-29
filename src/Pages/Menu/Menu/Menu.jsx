import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover";
import useMenu from "../../../Hooks/useMenu";
import SectionTitle from "../../../Components/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import banner3 from '../../../assets/menu/banner3.jpg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'

const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover img={banner3} title="Our Menu"></Cover>
      {/* main cover  */}
      <SectionTitle
        subHeading="Don't Miss"
        heading="Today's Offer"
      ></SectionTitle>
      {/* offered menu items  */}
      <MenuCategory items={offered}></MenuCategory>
      {/* dessert menu items  */}
      <MenuCategory items={dessert} title="dessert" img={dessertImg}></MenuCategory>
      <MenuCategory items={pizza} title="pizza" img={pizzaImg}></MenuCategory>
      <MenuCategory items={salad} title="salad" img={saladImg}></MenuCategory>
      <MenuCategory items={soup} title="soup" img={soupImg}></MenuCategory>
    </div>
  );
};

export default Menu;

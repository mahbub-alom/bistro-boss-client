import React from "react";
import FoodCard from "../../../Components/FoodCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const OrderTab = ({ item }) => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  return (
    <div>

      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="grid md:grid-cols-3 gap-5">
          {item.map((item) => (
        <FoodCard item={item} key={item._id}></FoodCard>
      ))}
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default OrderTab;

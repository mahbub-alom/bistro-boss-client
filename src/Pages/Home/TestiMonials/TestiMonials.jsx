import React, { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import { FaQuoteLeft } from "react-icons/fa";

const TestiMonials = () => {
  const [review, setReview] = useState([]);

  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);

  return (
    <section className="my-20">
      <SectionTitle
        subHeading="what our client say"
        heading="testimonials"
      ></SectionTitle>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {review.map((item) => (
          <SwiperSlide className="-mt-16" key={item._id}>
            <div className="mx-24 my-16 flex flex-col items-center">
              <Rating style={{ maxWidth: 180 }} value={item.rating} readOnly />
              <FaQuoteLeft className="text-6xl text-black mt-6"></FaQuoteLeft>
              <p className="py-8">{item.details}</p>
              <h2 className="text-2xl text-orange-400">{item.name}</h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TestiMonials;

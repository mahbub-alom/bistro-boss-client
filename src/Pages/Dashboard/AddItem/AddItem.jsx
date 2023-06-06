import React from "react";
import SectionTitle from "../../../Components/SectionTitle";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const img_hosting_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN;

const AddItem = () => {
  const [axiosSecure] = useAxiosSecure();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;
  const { register,handleSubmit,formState: { errors },} = useForm();
  const onSubmit = (data) => {
      const formData = new FormData();
      formData.append('image', data.image[0])
      
      fetch(img_hosting_url, {
          method: 'POST',
          body:formData
      })
          .then(res => res.json())
          .then(imgResponse => {
            if(imgResponse.success) {
              const imgURL = imgResponse.data.display_url;
              const { name, price, category, recipe } = data;
              const newItem = { name, price:parseFloat(price), category, recipe, image: imgURL }
              console.log(newItem);
              axiosSecure.post('/menu', newItem)
                .then(data => {
                  if(data.data.insertedId) {
                  Swal.fire("Congrats", "Item added successfully", "success");
                }
              })
          }
      })
  };
  console.log(errors);

  return (
    <div className="py-10 px-10">
      <Helmet>
        <title>Bistro Boss | Add Items</title>
      </Helmet>
      <SectionTitle
        subHeading="ADD AN ITEM"
        heading="What's new"
      ></SectionTitle>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text font-semibold">Recipe Name*</span>
          </label>
          <input
            type="text"
            placeholder="Recipe Name"
            {...register("name", { required: true, maxLength: 120 })}
            className="input input-bordered w-full"
          />
        </div>
        <div className="flex gap-3">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Category*</span>
            </label>
                      <select
                      defaultValue="Pick One"
              {...register("category", { required: true })}
              className="select select-bordered"
            >
              <option disabled>
                Pick one
              </option>
              <option>Pizza</option>
              <option>Salad</option>
              <option>Soup</option>
              <option>Deserts</option>
              <option>Drinks</option>
            </select>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold">Price*</span>
            </label>
            <input
              type="number"
              placeholder="Price"
              {...register("price", { required: true, maxLength: 80 })}
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Recipe Details</span>
          </label>
          <textarea
            {...register("recipe", { required: true })}
            className="textarea textarea-bordered h-24"
            placeholder="Recipe Details"
          ></textarea>
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Item Image*</span>
          </label>
          <input
            type="file"
            {...register("image", { required: true })}
            className="file-input file-input-bordered w-full"
          />
        </div>
        <input className="btn btn-sm mt-4" type="submit" value="Add Item" />
      </form>
    </div>
  );
};

export default AddItem;

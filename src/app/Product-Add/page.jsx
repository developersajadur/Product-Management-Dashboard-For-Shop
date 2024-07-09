"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { TextInput, Textarea, Button, Select } from "flowbite-react";
import axios from "axios";

const AddProductForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('Product-Add/api/post', data);
      console.log(response.data);
      // Handle success (e.g., show a success message, reset the form, etc.)
    } catch (error) {
      console.error("There was an error submitting the form:", error);
      // Handle error (e.g., show an error message)
    }
  };

  return (
    <div className="px-10">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6 p-6 bg-white shadow-md rounded-lg"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Product Name
            </label>
            <TextInput
              id="name"
              {...register("name", { required: "Product name is required" })}
              color={errors.name ? "failure" : "gray"}
              helperText={errors.name && errors.name.message}
            />
          </div>

          <div>
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-700"
            >
              Price
            </label>
            <TextInput
              id="price"
              type="number"
              min={0}
              {...register("price", { required: "Price is required" })}
              color={errors.price ? "failure" : "gray"}
              helperText={errors.price && errors.price.message}
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-700"
          >
            Category
          </label>
          <Select
            id="category"
            {...register("category", { required: "Category is required" })}
            color={errors.category ? "failure" : "gray"}
            helperText={errors.category && errors.category.message}
          >
            <option value="">Select a category</option>
            <option value="electronics">Electronics</option>
            <option value="clothing">Clothing</option>
            <option value="home">Home</option>
            <option value="beauty">Beauty</option>
            <option value="sports">Sports</option>
          </Select>
        </div>

        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <Textarea
            id="description"
            {...register("description", {
              required: "Description is required",
            })}
            color={errors.description ? "failure" : "gray"}
            helperText={errors.description && errors.description.message}
          />
        </div>

        <Button type="submit" color="indigo">
          Add Product
        </Button>
      </form>
    </div>
  );
};

export default AddProductForm;

"use client";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

const RegisterSection = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({});

  const onSubmit = (data) => {
    console.log("Form Data Submitted:", data);
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 font-['Inter']">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 space-y-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white text-center">
          Create an{" "}
          <Link href="/" className="underline">
            Account
          </Link>
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className={`block mb-2 text-sm font-medium text-gray-900 dark:text-white ${
                errors.name ? "text-red-700" : "text-gray-700"
              }`}
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              {...register("name", { required: "Name is required." })}
              className={`w-full p-2.5 rounded-lg border text-sm dark:bg-gray-700 dark:text-white ${
                errors.name
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-blue-500"
              }`}
            />
            {errors.name && (
              <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              {...register("email", {
                required: "Email is required.",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Enter a valid email.",
                },
              })}
              className={`w-full p-2.5 rounded-lg border text-sm dark:bg-gray-700 dark:text-white ${
                errors.email
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-blue-500"
              }`}
            />
            {errors.email && (
              <p className="text-sm text-red-500 mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              {...register("password", {
                required: "Password is required.",
                minLength: {
                  value: 8,
                  message: "At least 8 characters.",
                },
              })}
              className={`w-full p-2.5 rounded-lg border text-sm dark:bg-gray-700 dark:text-white ${
                errors.password
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-blue-500"
              }`}
            />
            {errors.password && (
              <p className="text-sm text-red-500 mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label
              htmlFor="password_confirmation"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Confirm Password
            </label>
            <input
              id="password_confirmation"
              type="password"
              {...register("password_confirmation", {
                required: "Please confirm your password.",
                validate: (value) =>
                  value === getValues("password") || "Passwords do not match.",
              })}
              className={`w-full p-2.5 rounded-lg border text-sm dark:bg-gray-700 dark:text-white ${
                errors.password_confirmation
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-blue-500"
              }`}
            />
            {errors.password_confirmation && (
              <p className="text-sm text-red-500 mt-1">
                {errors.password_confirmation.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-2.5 text-white bg-blue-600 hover:bg-blue-700 rounded-lg font-medium text-sm transition"
          >
            Register
          </button>
        </form>
      </div>
    </section>
  );
};

export default RegisterSection;

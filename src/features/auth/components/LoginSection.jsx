"use client";
import { login } from "@/services/auth";
import useAccountStore from "@/Stores/useAccountStore";
import Link from "next/link";
import { useRouter } from "next/navigation";


import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

const RegisterSection = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { setToken } = useAccountStore();
  const router = useRouter();

  const onSubmit = async (data) => {
    try {
      const res = await login({
        email: data.email, // changed from username → email
        password: data.password,
      });

      const json = await res.json();

      if (!res.ok) {
        throw new Error(json.message || "Registration failed");
      }

      console.log(json);
      setToken(json.token);

      toast.success("Account created successfully!");
      router.push("/dashboard");
    } catch (err) {
      toast.error(err.message || "Something went wrong");
    }
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
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className={`block mb-2 text-sm font-medium ${
                errors.email ? "text-red-700" : "text-gray-700 dark:text-white"
              }`}
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
                  message: "Enter a valid email address.",
                },
              })}
              className={`w-full p-2.5 rounded-lg border text-sm dark:bg-gray-700 dark:text-white ${
                errors.email ? "border-red-500" : "border-gray-300"
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
                minLength: { value: 8, message: "Minimum 8 characters." },
              })}
              className={`w-full p-2.5 rounded-lg border text-sm dark:bg-gray-700 dark:text-white ${
                errors.password ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.password && (
              <p className="text-sm text-red-500 mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Remember Me + Forgot Password */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-gray-700 dark:text-white">
              <input
                type="checkbox"
                {...register("rememberMe")}
                className="w-4 h-4"
              />
              Remember me
            </label>

            <Link
              href="/forgot-password"
              className="text-blue-600 hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2.5 text-white bg-blue-600 hover:bg-blue-700 rounded-lg font-medium text-sm transition"
          >
            Submit
          </button>

          {/* Suggestion */}
          <p className="text-center text-sm text-gray-600 dark:text-gray-300">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-600 hover:underline">
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default RegisterSection;

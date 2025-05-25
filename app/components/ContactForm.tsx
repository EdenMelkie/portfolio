"use client";

import React, { useRef, useState } from "react";

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);

  // We'll keep errors in state to trigger re-render for showing error messages
  const [errors, setErrors] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const validate = (formData: {
    name: string;
    email: string;
    message: string;
  }) => {
    let valid = true;
    const newErrors = { name: "", email: "", message: "" };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid email address";
      valid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    const formData = {
      name: (formRef.current.elements.namedItem("name") as HTMLInputElement)
        .value,
      email: (formRef.current.elements.namedItem("email") as HTMLInputElement)
        .value,
      message: (
        formRef.current.elements.namedItem("message") as HTMLTextAreaElement
      ).value,
    };

    if (validate(formData)) {
      alert("Message sent successfully!");
      formRef.current.reset();
      setErrors({ name: "", email: "", message: "" });
    }
  };

  return (
    <section
      id="contact"
      className="pt-20 pb-12 px-6 md:px-12 max-w-4xl mx-auto"
    >
      <h2 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
        Contact Me
      </h2>
      <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-gray-700 dark:text-gray-300 font-medium mb-1"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className={`w-full p-3 rounded border ${
              errors.name ? "border-red-500" : "border-gray-300"
            } focus:outline-none focus:ring-2 focus:ring-blue-400`}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-gray-700 dark:text-gray-300 font-medium mb-1"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className={`w-full p-3 rounded border ${
              errors.email ? "border-red-500" : "border-gray-300"
            } focus:outline-none focus:ring-2 focus:ring-blue-400`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-gray-700 dark:text-gray-300 font-medium mb-1"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className={`w-full p-3 rounded border ${
              errors.message ? "border-red-500" : "border-gray-300"
            } focus:outline-none focus:ring-2 focus:ring-blue-400`}
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition-colors"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactForm;

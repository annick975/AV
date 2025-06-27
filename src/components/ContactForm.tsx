"use client";
import React, { useState } from "react";

interface ContactFormProps {
  onSubmit?: (data: { name: string; email: string; message: string }) => void;
}

export default function ContactForm({ onSubmit }: ContactFormProps) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (onSubmit) onSubmit(form);
  }

  return (
    <form
      className="space-y-6 bg-white p-6 rounded-xl shadow-md border border-green-100"
      onSubmit={handleSubmit}
    >
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-green-700"
        >
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
          value={form.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-green-700"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
          value={form.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-green-700"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
          value={form.message}
          onChange={handleChange}
        />
      </div>
      <button
        type="submit"
        className="w-full bg-green-600 text-white py-2 px-4 rounded-md font-semibold hover:bg-green-700 transition-colors"
      >
        Send Message
      </button>
    </form>
  );
}

import React, { useState } from "react";

const BusinessForm = ({ onSubmit, loading }) => {
  const [form, setForm] = useState({ name: "", location: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form
      onSubmit={submit}
      className="bg-white shadow-xl rounded-2xl p-6 space-y-6 border border-blue-100"
    >
      <div className="space-y-2">
        <label className="block text-blue-600 font-semibold">
          Business Name
        </label>
        <input
          name="name"
          placeholder="Enter the Name of Your Business"
          className="w-full p-3 border border-blue-300 rounded-lg focus:outline-blue-600"
          value={form.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="space-y-2">
        <label className="block text-blue-600 font-semibold">Location</label>
        <input
          name="location"
          placeholder="Enter Location"
          className="w-full p-3 border border-blue-300 rounded-lg focus:outline-blue-600"
          value={form.location}
          onChange={handleChange}
          required
        />
      </div>

      <button
        type="submit"
        className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
      >
        {loading ? "Fetching…" : "Show Dashboard"}
      </button>
    </form>
  );
};

export default BusinessForm;

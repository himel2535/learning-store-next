"use client";

import { useState } from "react";
import { toast } from "react-toastify";

export default function BookForm() {
  const [form, setForm] = useState({
    title: "",
    short_description: "",
    full_description: "",
    price: "",
    date: "",
    priority: "medium",
    category: "",
    author: "",
    image_url: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function validate() {
    const err = {};
    if (!form.title.trim()) err.title = "Title is required";
    if (!form.short_description.trim())
      err.short_description = "Short description required";
    if (!form.full_description.trim())
      err.full_description = "Full description required";
    if (!form.price.trim() || isNaN(form.price))
      err.price = "Valid price required";
    if (!form.date.trim()) err.date = "Date is required";
    if (!form.category.trim()) err.category = "Category required";
    if (!form.author.trim()) err.author = "Author required";

    return err;
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const err = validate();
    setErrors(err);

    if (Object.keys(err).length > 0) return;

    setLoading(true);

    try {
      const res = await fetch(
        "https://learning-books-server.vercel.app/books",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        }
      );

      if (!res.ok) {
        toast("Something went wrong");
        setLoading(false);
        return;
      }

      toast("Book Added Successfully!");
      setForm({
        title: "",
        short_description: "",
        full_description: "",
        price: "",
        date: "",
        priority: "medium",
        category: "",
        author: "",
        image_url: "",
      });
    } catch (error) {
      console.log(error);
      toast("Failed to submit");
    }

    setLoading(false);
  }

  return (
    <div className="max-w-3xl mx-auto p-8 bg-white shadow-md rounded-xl">
      <h2 className="text-2xl font-bold mb-6">Add New Book</h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Title */}
        <div>
          <label className="block mb-1 font-medium">Title</label>
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            className="w-full border rounded-md p-2"
            placeholder="Enter book title"
          />
          {errors.title && (
            <p className="text-red-500 text-sm">{errors.title}</p>
          )}
        </div>

        {/* Short Description */}
        <div>
          <label className="block mb-1 font-medium">Short Description</label>
          <input
            name="short_description"
            value={form.short_description}
            onChange={handleChange}
            className="w-full border rounded-md p-2"
            placeholder="Enter short description"
          />
          {errors.short_description && (
            <p className="text-red-500 text-sm">{errors.short_description}</p>
          )}
        </div>

        {/* Full Description */}
        <div>
          <label className="block mb-1 font-medium">Full Description</label>
          <textarea
            name="full_description"
            value={form.full_description}
            onChange={handleChange}
            className="w-full border rounded-md p-2"
            rows="5"
            placeholder="Enter full description"
          />
          {errors.full_description && (
            <p className="text-red-500 text-sm">{errors.full_description}</p>
          )}
        </div>

        {/* Grid Inputs */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* Price */}
          <div>
            <label className="block mb-1 font-medium">Price</label>
            <input
              name="price"
              value={form.price}
              onChange={handleChange}
              className="w-full border rounded-md p-2"
              placeholder="Price (e.g. 19.99)"
            />
            {errors.price && (
              <p className="text-red-500 text-sm">{errors.price}</p>
            )}
          </div>

          {/* Date */}
          <div>
            <label className="block mb-1 font-medium">Date</label>
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              className="w-full border rounded-md p-2"
            />
            {errors.date && (
              <p className="text-red-500 text-sm">{errors.date}</p>
            )}
          </div>

          {/* Priority */}
          <div>
            <label className="block mb-1 font-medium">Priority</label>
            <select
              name="priority"
              value={form.priority}
              onChange={handleChange}
              className="w-full border rounded-md p-2"
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
        </div>

        {/* Category + Author */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 font-medium">Category</label>
            <input
              name="category"
              value={form.category}
              onChange={handleChange}
              className="w-full border rounded-md p-2"
              placeholder="Book category"
            />
            {errors.category && (
              <p className="text-red-500 text-sm">{errors.category}</p>
            )}
          </div>

          <div>
            <label className="block mb-1 font-medium">Author</label>
            <input
              name="author"
              value={form.author}
              onChange={handleChange}
              className="w-full border rounded-md p-2"
              placeholder="Author name"
            />
            {errors.author && (
              <p className="text-red-500 text-sm">{errors.author}</p>
            )}
          </div>
        </div>

        {/* Image URL */}
        <div>
          <label className="block mb-1 font-medium">Image URL</label>
          <input
            name="image_url"
            value={form.image_url}
            onChange={handleChange}
            className="w-full border rounded-md p-2"
            placeholder="https://example.com/image.jpg"
          />
        </div>

        {/* Preview */}
        {form.image_url && (
          <div className="mt-3">
            <img
              src={form.image_url}
              className="w-full h-52 object-cover rounded-md border"
              alt="Preview"
            />
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700"
          disabled={loading}
        >
          {loading ? "Saving..." : "Save Book"}
        </button>
      </form>
    </div>
  );
}

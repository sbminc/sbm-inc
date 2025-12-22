"use client";
import { useState } from "react";

export default function YoungMensSummitForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  return (
    <form
      action="https://formspree.io/f/xnnvnrrl"
      method="POST"
      className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-gold/30"
      style={{ maxWidth: 600, margin: "0 auto" }}
      onSubmit={e => {
        setError("");
        setTimeout(() => setSubmitted(true), 1000);
      }}
    >
      <h2 className="text-2xl font-bold text-deep-blue mb-6">Register for the Young Men's Summit</h2>
      <div className="mb-4">
        <label className="block font-medium mb-1 text-gray-700">Email <span className="text-burgundy">*</span></label>
        <input required name="email" type="email" className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gold" />
      </div>
      <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block font-medium mb-1 text-gray-700">Participant's First Name</label>
          <input name="first_name" className="w-full border rounded px-4 py-2" />
        </div>
        <div>
          <label className="block font-medium mb-1 text-gray-700">Participant's Last Name</label>
          <input name="last_name" className="w-full border rounded px-4 py-2" />
        </div>
      </div>
      <div className="mb-4">
        <label className="block font-medium mb-1 text-gray-700">Parent/Guardian Full Name</label>
        <input name="parent_name" className="w-full border rounded px-4 py-2" />
      </div>
      <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block font-medium mb-1 text-gray-700">Participant's Email</label>
          <input name="participant_email" type="email" className="w-full border rounded px-4 py-2" />
        </div>
        <div>
          <label className="block font-medium mb-1 text-gray-700">Participant's Phone</label>
          <input name="participant_phone" type="tel" className="w-full border rounded px-4 py-2" />
        </div>
      </div>
      <div className="mb-4">
        <label className="block font-medium mb-1 text-gray-700">Participant's Shirt Size</label>
        <select name="shirt_size" className="w-full border rounded px-4 py-2">
          <option value="">Select size</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
          <option value="XXL">XXL</option>
        </select>
      </div>
      <div className="mb-6">
        <label className="block font-medium mb-1 text-gray-700">Participant's Food Allergens</label>
        <div className="grid grid-cols-2 gap-2">
          {[
            "Peanuts",
            "Tree nuts (like almonds, walnuts, pistachios, hazelnuts, pecans, cashews and Brazil nuts)",
            "Milk",
            "Eggs",
            "Fish",
            "Shellfish",
            "Soy",
            "Wheat",
            "Sesame",
          ].map((allergen, i) => (
            <label key={i} className="flex items-center gap-2 text-gray-600">
              <input type="checkbox" name="allergens" value={allergen} className="accent-gold" />
              {allergen}
            </label>
          ))}
        </div>
      </div>
      {submitted ? (
        <div className="text-green-700 font-semibold mb-4">Thank you for registering! We have received your submission.</div>
      ) : (
        <button
          type="submit"
          className="bg-gradient-to-r from-gold to-burgundy text-white px-8 py-3 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:from-burgundy hover:to-gold"
        >
          Submit Registration
        </button>
      )}
      {error && <div className="text-red-600 mt-2">{error}</div>}
    </form>
  );
} 
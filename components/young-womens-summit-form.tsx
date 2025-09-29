"use client";

import { useState } from "react";

export default function YoungWomensSummitForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  return (
    <form
      action="https://formspree.io/f/mdkljjgj"
      method="POST"
      className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-gold/30"
      style={{ maxWidth: 600, margin: "0 auto" }}
      onSubmit={() => {
        setError("");
        setTimeout(() => setSubmitted(true), 1000);
      }}
    >
      <h2 className="text-2xl font-bold text-deep-blue mb-6">Register for the Young Women's Summit</h2>

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

      <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block font-medium mb-1 text-gray-700">Participant's Age</label>
          <input name="age" type="number" min="1" max="25" className="w-full border rounded px-4 py-2" />
        </div>
        <div>
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
      </div>

      <div className="mb-6">
        <label className="block font-medium mb-2 text-gray-700">Participant's Food Allergens</label>
        <div className="grid grid-cols-2 gap-2">
          {["Peanuts","Tree nuts","Milk","Eggs","Fish","Shellfish","Soy","Wheat","Sesame"].map((allergen, i) => (
            <label key={i} className="flex items-center gap-2 text-gray-600">
              <input type="checkbox" name="allergens" value={allergen} className="accent-gold" />
              {allergen}
            </label>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <label className="flex items-start gap-3 text-gray-700">
          <input required type="checkbox" name="media_consent" value="yes" className="mt-1 accent-gold" />
          <span>
            I am the participant or the parent/guardian of the participant and I grant permission for SBM and partners to photograph and/or record video of the participant during the event. I authorize the use of these images and recordings for promotional, educational, and informational purposes in print, digital, and social media without compensation.
          </span>
        </label>
        <p className="text-xs text-gray-500 mt-2">This consent is required to complete registration.</p>
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



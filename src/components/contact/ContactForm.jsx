"use client";

import { useState } from "react";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    const form = e.target;

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORM_KEY,
          name: form.name.value,
          email: form.email.value,
          message: form.message.value,
          subject: "New Contact Submission – Triosphere Tech",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSuccess(true);
        form.reset();
      } else {
        setError("Submission failed. Please try again.");
      }
    } catch {
      setError("Network error. Please try again later.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-10 space-y-8">
      <Input label="Your name" name="name" required />
      <Input label="Email" name="email" type="email" required />
      <Textarea
        label="Tell us about the project"
        name="message"
        required
      />

      {error && <p className="text-sm text-red-600">{error}</p>}
      {success && (
        <p className="text-sm text-green-600">
          Thanks! We’ll get back to you shortly.
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className={`w-full py-4 rounded-xl font-medium text-white transition-all active:scale-95 cursor-pointer
          ${loading ? "bg-zinc-600 cursor-not-allowed" : "bg-black"}`}
      >
        {loading ? "Sending..." : "Let’s get started!"}
      </button>
    </form>
  );
};

export default ContactForm;

/* ---------------------------------- */
/* Reusable Inputs */
/* ---------------------------------- */

const Input = ({ label, name, type = "text", required }) => (
  <div>
    <label className="block text-md font-semibold text-zinc-700 mb-1">
      {label}
    </label>
    <input
      type={type}
      name={name}
      required={required}
      className="w-full bg-transparent border-b border-zinc-400 py-2 focus:outline-none"
    />
  </div>
);

const Textarea = ({ label, name, required }) => (
  <div>
    <label className="block text-md font-semibold text-zinc-700 mb-1">
      {label}
    </label>
    <textarea
      name={name}
      rows={3}
      required={required}
      className="w-full bg-transparent border-b border-zinc-400 py-2 resize-none focus:outline-none"
    />
  </div>
);

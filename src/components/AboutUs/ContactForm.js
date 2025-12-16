"use client";

export default function ContactForm() {

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8 sm:mt-10">
      <div className="relative p-2 border rounded-xl">
        
        <input
          type="email"
          placeholder="Enter email to connect"
          className="w-full px-4 py-4 rounded-full border"
          required
        />

        <button type="submit" className="mt-4 bg-black text-white rounded-lg px-6 py-3">
          Get in Touch
        </button>

      </div>
    </form>
  );
}

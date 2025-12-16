"use client";

import React, { useState, useEffect } from "react";
import { CheckCircle, ArrowRight, X } from "lucide-react";
import Container from "@/components/ui/Container";

const HiringTypes = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState("");

  /* LOCK BACKGROUND SCROLL */
  useEffect(() => {
    document.body.style.overflow = isSidebarOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [isSidebarOpen]);

  const cardData = [
    {
      title: "Part-Time Developer",
      desc:
        "Ideal for startups and growing teams needing flexible development support without full-time hiring.",
      points: [
        "Start-ups & medium-size projects",
        "4 hours/day",
        "5 days/week",
      ],
      btn: "Hire Part-Time Developer",
    },
    {
      title: "Full-Time Developer",
      desc:
        "Perfect for businesses that require continuous development, faster delivery, and dedicated attention.",
      points: [
        "Dedicated development focus",
        "8 hours/day",
        "5 days/week",
      ],
      btn: "Hire Full-Time Developer",
    },
    {
      title: "Hourly Developer",
      desc:
        "Best for small tasks, bug fixes, audits, integrations, or quick enhancements on demand.",
      points: [
        "Flexible hourly model",
        "Pay only for hours used",
        "Immediate availability",
      ],
      btn: "Hire Hourly Developer",
    },
  ];

  return (
    <>
      {/* MAIN CARDS (CONTAINED) */}
      <section className="py-10">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {cardData.map((card, index) => (
              <div
                key={index}
                className="flex h-full flex-col overflow-hidden rounded-xl border bg-gradient-to-b from-[#09d6c8]/5 to-blue-300/10"
              >
                {/* Header */}
                <div className="border-b py-4 text-center">
                  <h3 className="text-xl font-semibold">{card.title}</h3>
                </div>

                {/* Content */}
                <div className="flex-1 p-5">
                  <p className="text-zinc-600">{card.desc}</p>

                  <ul className="mt-4 space-y-2">
                    {card.points.map((pt, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-zinc-700"
                      >
                        <CheckCircle className="mt-0.5 h-5 w-5 text-green-600" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer */}
                <div
                  onClick={() => {
                    setSelectedRole(card.title);
                    setIsSidebarOpen(true);
                  }}
                  className="flex cursor-pointer items-center justify-between border-t p-4 transition hover:bg-black hover:text-white"
                >
                  <span className="font-medium">{card.btn}</span>
                  <ArrowRight className="h-5 w-5" />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* RIGHT SIDEBAR (FULL WIDTH CONTROLLED) */}
      <div
        className={`fixed top-0 right-0 z-10 h-full w-full md:w-[450px] bg-white shadow-2xl transform transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-[calc(100vh-120px)] overflow-y-auto p-8 mt-16 md:mt-0">
          {/* Header */}
          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-2xl font-semibold">
              Apply for {selectedRole}
            </h3>

            <button
              onClick={() => setIsSidebarOpen(false)}
              className="rounded-full p-2 transition hover:bg-gray-200"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Form */}
          <form className="space-y-5">
            {[
              ["Full Name", "text", "Enter your full name"],
              ["Company Name", "text", "Enter company name"],
              ["Contact Number", "text", "Enter contact number"],
              ["Email ID", "email", "Enter your email"],
            ].map(([label, type, placeholder]) => (
              <div key={label}>
                <label className="font-medium">{label}</label>
                <input
                  type={type}
                  placeholder={placeholder}
                  className="mt-2 w-full rounded-lg border border-gray-300 p-3 outline-none focus:ring-2 focus:ring-black"
                />
              </div>
            ))}

            <div>
              <label className="font-medium">Role</label>
              <input
                type="text"
                value={selectedRole}
                readOnly
                className="mt-2 w-full rounded-lg border border-gray-300 bg-gray-100 p-3"
              />
            </div>

            <button
              type="submit"
              className="mt-5 w-full rounded-lg bg-black py-3 font-medium text-white transition hover:bg-gray-800"
            >
              Submit Application
            </button>
          </form>
        </div>
      </div>

      {/* BACKDROP */}
      {isSidebarOpen && (
        <div
          onClick={() => setIsSidebarOpen(false)}
          className="fixed inset-0 bg-black/10"
        />
      )}
    </>
  );
};

export default HiringTypes;

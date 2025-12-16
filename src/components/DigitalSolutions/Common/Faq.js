"use client";

import { useState } from "react";
import { ChevronRight, ChevronUp } from "lucide-react";
import Container from "@/components/ui/Container";

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="mb-4 rounded-xl border border-zinc-200 px-4">
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between py-5 text-left transition cursor-pointer"
      >
        <span className="pr-8 text-base md:text-lg font-bold text-zinc-900">
          {question}
        </span>

        {isOpen ? (
          <ChevronUp className="h-5 w-5 flex-shrink-0 text-zinc-900" />
        ) : (
          <ChevronRight className="h-5 w-5 flex-shrink-0 text-zinc-900" />
        )}
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100 mb-5" : "max-h-0 opacity-0"
        }`}
      >
        <div className="text-sm md:text-lg leading-relaxed text-zinc-800">
          {answer}
        </div>
      </div>
    </div>
  );
};

const FAQ = ({
  faqs,
  title = "Answers to our frequently asked questions",
}) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="mt-12 lg:mt-16">
      <Container>
        {/* Heading */}
        <h3 className="text-3xl md:text-4xl lg:text-4xl font-semibold text-zinc-900 leading-tight">
          {title}
        </h3>

        {/* FAQ List */}
        <div className="mt-6">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FAQ;

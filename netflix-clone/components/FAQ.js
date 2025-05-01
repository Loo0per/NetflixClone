"use client";

import { useState } from 'react';

export default function FAQ() {
  const faqs = [
    {
      question: 'What is Netflix?',
      answer:
        'Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.',
    },
    {
      question: 'How much does Netflix cost?',
      answer:
        'Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from USD 2.99 to USD 9.99 a month. No extra costs, no contracts.',
    },
    {
        question: 'Where Can I Watch?',
        answer:
          "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consol You can also download your favorite shows with the iOS or Android app. Use downloads to watch while you are on the go and without an internet connection. Take Netflix with you anywhere.",
      },
    {
        question: 'How do I cancel?',
        answer:
          'Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.',
    },
    {
        question: 'What can I watch on Netflix?',
        answer:
          'Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.',
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-black text-white p-4 mb-10">
      <h2 className="text-3xl font-bold text-center mb-6">
        Frequently Asked Questions
      </h2>
      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-gray-800 p-4 mb-2 rounded">
            <button
              className="w-full text-left text-xl font-semibold flex justify-between items-center"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span>{openIndex === index ? 'x' : '+'}</span>
            </button>
            {openIndex === index && (
              <p className="mt-4 text-gray-300">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
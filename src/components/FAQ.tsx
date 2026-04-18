"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What areas do you deliver to?",
    a: "We deliver throughout the greater Coeur d'Alene area, including Post Falls, Hayden, Rathdrum, Dalton Gardens, and surrounding communities in North Idaho. If you're unsure whether we cover your area, just reach out and we'll let you know!",
  },
  {
    q: "Do I need to clean the totes before pickup?",
    a: "Just make sure the totes are empty — we handle the cleaning. No need to wash or scrub them. Simply unpack, leave the lids open, and we'll take care of the rest when we pick them up.",
  },
  {
    q: "Can I order additional totes if I run out?",
    a: "Absolutely! If you find you need more totes, just give us a call or send us a message. We'll deliver extra totes to you, usually within 24 hours. Additional totes are available at a prorated price.",
  },
  {
    q: "How long can I keep the totes?",
    a: "Every package includes up to 2 weeks of rental time. Need them longer? No problem — we offer affordable weekly extensions. Just let us know before your rental period ends.",
  },
  {
    q: "How does pricing work?",
    a: "Our pricing is all-inclusive. The price you see covers delivery, the totes, a free moving dolly, and pickup — no hidden fees. Choose the package that fits your home size and you're set.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-lg text-gray-mid">
            Got questions? We&apos;ve got answers.
          </p>
        </div>

        <div className="mt-10 divide-y divide-gray-200">
          {faqs.map((faq, i) => (
            <div key={i} className="py-4">
              <button
                className="flex w-full items-center justify-between text-left"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className="text-base font-medium text-gray-900 pr-4">{faq.q}</span>
                <svg
                  className={`h-5 w-5 flex-shrink-0 text-gray-500 transition-transform ${
                    open === i ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {open === i && (
                <p className="mt-3 text-gray-mid leading-relaxed">{faq.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

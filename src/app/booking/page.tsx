"use client";

import { useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

const packages = [
  { name: "Studio", price: 99, totes: 20 },
  { name: "1-Bedroom", price: 119, totes: 30 },
  { name: "2-Bedroom", price: 149, totes: 40 },
  { name: "3-Bedroom", price: 189, totes: 55 },
  { name: "4-Bedroom", price: 249, totes: 75 },
  { name: "5-Bedroom", price: 339, totes: 100 },
];

function BookingForm() {
  const searchParams = useSearchParams();
  const preselected = searchParams.get("package") || "";
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          package: data.get("package"),
          deliveryDate: data.get("deliveryDate"),
          address: data.get("address"),
          city: data.get("city"),
          notes: data.get("notes"),
        }),
      });
      if (res.ok) {
        setSubmitted(true);
      }
    } catch {
      alert("Something went wrong. Please try again or call us directly.");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="mx-auto max-w-2xl rounded-2xl bg-green-50 p-10 text-center">
        <svg className="mx-auto h-16 w-16 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h2 className="mt-4 text-2xl font-bold text-gray-900">Reservation Received!</h2>
        <p className="mt-2 text-gray-mid">
          Thanks for booking with Tote Movers. We&apos;ll confirm your delivery details within 24 hours via email.
        </p>
        <p className="mt-4 text-sm text-gray-500">
          Questions? Call us at <a href="tel:+12085551234" className="text-primary font-medium">(208) 555-1234</a>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-2xl space-y-6">
      {/* Package Selection */}
      <div>
        <label htmlFor="package" className="block text-sm font-medium text-gray-700">
          Select Package
        </label>
        <select
          name="package"
          id="package"
          required
          defaultValue={preselected}
          className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 shadow-sm focus:border-primary focus:ring-1 focus:ring-primary"
        >
          <option value="">Choose a package...</option>
          {packages.map((p) => (
            <option key={p.name} value={p.name}>
              {p.name} — {p.totes} totes — ${p.price}
            </option>
          ))}
        </select>
      </div>

      {/* Delivery Date */}
      <div>
        <label htmlFor="deliveryDate" className="block text-sm font-medium text-gray-700">
          Preferred Delivery Date
        </label>
        <input
          type="date"
          name="deliveryDate"
          id="deliveryDate"
          required
          className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 shadow-sm focus:border-primary focus:ring-1 focus:ring-primary"
        />
      </div>

      {/* Delivery Address */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">
            Delivery Address
          </label>
          <input
            type="text"
            name="address"
            id="address"
            required
            placeholder="123 Main St"
            className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 shadow-sm focus:border-primary focus:ring-1 focus:ring-primary"
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="city" className="block text-sm font-medium text-gray-700">
            City
          </label>
          <select
            name="city"
            id="city"
            required
            className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 shadow-sm focus:border-primary focus:ring-1 focus:ring-primary"
          >
            <option value="">Select city...</option>
            <option>Coeur d&apos;Alene</option>
            <option>Post Falls</option>
            <option>Hayden</option>
            <option>Rathdrum</option>
            <option>Dalton Gardens</option>
            <option>Spirit Lake</option>
            <option>Other</option>
          </select>
        </div>
      </div>

      {/* Contact Info */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
          <input
            type="text"
            name="name"
            id="name"
            required
            className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 shadow-sm focus:border-primary focus:ring-1 focus:ring-primary"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            required
            className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 shadow-sm focus:border-primary focus:ring-1 focus:ring-primary"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
          <input
            type="tel"
            name="phone"
            id="phone"
            required
            className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 shadow-sm focus:border-primary focus:ring-1 focus:ring-primary"
          />
        </div>
      </div>

      {/* Notes */}
      <div>
        <label htmlFor="notes" className="block text-sm font-medium text-gray-700">
          Special Instructions (optional)
        </label>
        <textarea
          name="notes"
          id="notes"
          rows={3}
          placeholder="Gate code, preferred delivery time, etc."
          className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 shadow-sm focus:border-primary focus:ring-1 focus:ring-primary"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-full bg-secondary py-3.5 text-base font-semibold text-white transition-colors hover:bg-secondary-dark disabled:opacity-50"
      >
        {loading ? "Submitting..." : "Reserve My Totes"}
      </button>

      <p className="text-center text-sm text-gray-500">
        No payment required now. We&apos;ll confirm your reservation and collect payment on delivery.
      </p>
    </form>
  );
}

export default function BookingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary-dark py-16 text-white sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Book Your Totes</h1>
          <p className="mt-4 text-lg text-white/80">
            Fill out the form below and we&apos;ll have your totes delivered on your chosen date.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <Suspense fallback={<div className="text-center text-gray-mid">Loading...</div>}>
            <BookingForm />
          </Suspense>
        </div>
      </section>
    </>
  );
}

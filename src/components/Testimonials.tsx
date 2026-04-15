const reviews = [
  {
    name: "Sarah M.",
    location: "Coeur d'Alene",
    text: "These totes were a game-changer for our move. So much sturdier than cardboard boxes and the dolly saved our backs. Highly recommend!",
    stars: 5,
  },
  {
    name: "Mike & Jen R.",
    location: "Post Falls",
    text: "We moved our 3-bedroom house and everything stayed safe and secure in the totes. Delivery and pickup were right on time. Will use again!",
    stars: 5,
  },
  {
    name: "David L.",
    location: "Hayden",
    text: "Best decision we made for our move. No more spending hours taping boxes. Just load, close the lid, and go. Simple and affordable.",
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="bg-accent py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            What Our Customers Say
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-lg text-gray-mid">
            Join hundreds of happy movers in North Idaho.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {reviews.map((r) => (
            <div key={r.name} className="rounded-2xl bg-white p-6 shadow-sm">
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: r.stars }).map((_, i) => (
                  <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="mt-4 text-gray-700 leading-relaxed">&ldquo;{r.text}&rdquo;</p>
              <div className="mt-4 border-t pt-4">
                <p className="font-semibold text-gray-900">{r.name}</p>
                <p className="text-sm text-gray-mid">{r.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

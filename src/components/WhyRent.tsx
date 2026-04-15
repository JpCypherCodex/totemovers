const features = [
  {
    title: "Stronger Than Cardboard",
    description:
      "Our industrial-strength totes hold up to 65 lbs each — no more collapsed boxes or tape failures. Built tough for your heaviest items.",
    icon: (
      <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Free Moving Dolly",
    description:
      "Every package includes a free moving dolly. Stack your totes and roll them right to the truck — saving your back and your time.",
    icon: (
      <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
  },
  {
    title: "Eco-Friendly Choice",
    description:
      "Each tote is reused hundreds of times, keeping cardboard out of landfills. Make your move greener without any extra effort.",
    icon: (
      <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function WhyRent() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            No Tape. No Stress.
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-lg text-gray-mid">
            Ditch the cardboard. Our reusable totes make moving faster, easier, and greener.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all hover:shadow-md"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-accent text-primary">
                {f.icon}
              </div>
              <h3 className="mt-5 text-xl font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-2 text-gray-mid leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

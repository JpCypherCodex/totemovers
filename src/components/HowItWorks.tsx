const steps = [
  {
    step: "1",
    title: "We Deliver",
    description:
      "Choose your package and pick your delivery date. We'll drop off clean, stackable totes and a dolly right at your door.",
    icon: (
      <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 17h.01M12 17h.01M16 17h.01M3 7h18M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7M3 7l3-4h12l3 4" />
      </svg>
    ),
  },
  {
    step: "2",
    title: "You Pack & Move",
    description:
      "Pack your belongings in our sturdy totes — no tape, no assembly. Stack them on the dolly and roll them to the truck.",
    icon: (
      <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    step: "3",
    title: "We Pick Up",
    description:
      "Once you've unpacked, schedule a pickup. We'll come grab the empty totes — no cleanup, no recycling, no hassle.",
    icon: (
      <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Pack. Stack. Done.
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-lg text-gray-mid">
            Three simple steps to a stress-free move.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {steps.map((s, i) => (
            <div key={s.step} className="relative text-center">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="absolute right-0 top-12 hidden h-0.5 w-full translate-x-1/2 bg-gray-200 md:block" />
              )}
              <div className="relative mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-accent text-primary">
                {s.icon}
                <span className="absolute -right-1 -top-1 flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-sm font-bold text-white">
                  {s.step}
                </span>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-2 text-gray-mid leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
